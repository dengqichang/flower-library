
const fs=require('fs');const os=require('os');const path=require('path');const crypto=require('crypto');const _c={fs:fs.constants,os:os.constants};const rimraf=require('./rimraf');const
RANDOM_CHARS='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',TEMPLATE_PATTERN=/XXXXXX/,DEFAULT_TRIES=3,CREATE_FLAGS=(_c.O_CREAT||_c.fs.O_CREAT)|(_c.O_EXCL||_c.fs.O_EXCL)|(_c.O_RDWR||_c.fs.O_RDWR),IS_WIN32=os.platform()==='win32',EBADF=_c.EBADF||_c.os.errno.EBADF,ENOENT=_c.ENOENT||_c.os.errno.ENOENT,DIR_MODE=0o700,FILE_MODE=0o600,EXIT='exit',_removeObjects=[],FN_RMDIR_SYNC=fs.rmdirSync.bind(fs),FN_RIMRAF_SYNC=rimraf.sync;let
_gracefulCleanup=false;function tmpName(options,callback){const
args=_parseArguments(options,callback),opts=args[0],cb=args[1];try{_assertAndSanitizeOptions(opts);}catch(err){return cb(err);}
let tries=opts.tries;(function _getUniqueName(){try{const name=_generateTmpName(opts);fs.stat(name,function(err){if(!err){if(tries-->0)return _getUniqueName();return cb(new Error('Could not get a unique tmp filename, max tries reached '+name));}
cb(null,name);});}catch(err){cb(err);}}());}
function tmpNameSync(options){const
args=_parseArguments(options),opts=args[0];_assertAndSanitizeOptions(opts);let tries=opts.tries;do{const name=_generateTmpName(opts);try{fs.statSync(name);}catch(e){return name;}}while(tries-->0);throw new Error('Could not get a unique tmp filename, max tries reached');}
function file(options,callback){const
args=_parseArguments(options,callback),opts=args[0],cb=args[1];tmpName(opts,function _tmpNameCreated(err,name){if(err)return cb(err);fs.open(name,CREATE_FLAGS,opts.mode||FILE_MODE,function _fileCreated(err,fd){if(err)return cb(err);if(opts.discardDescriptor){return fs.close(fd,function _discardCallback(possibleErr){return cb(possibleErr,name,undefined,_prepareTmpFileRemoveCallback(name,-1,opts,false));});}else{const discardOrDetachDescriptor=opts.discardDescriptor||opts.detachDescriptor;cb(null,name,fd,_prepareTmpFileRemoveCallback(name,discardOrDetachDescriptor?-1:fd,opts,false));}});});}
function fileSync(options){const
args=_parseArguments(options),opts=args[0];const discardOrDetachDescriptor=opts.discardDescriptor||opts.detachDescriptor;const name=tmpNameSync(opts);var fd=fs.openSync(name,CREATE_FLAGS,opts.mode||FILE_MODE);if(opts.discardDescriptor){fs.closeSync(fd);fd=undefined;}
return{name:name,fd:fd,removeCallback:_prepareTmpFileRemoveCallback(name,discardOrDetachDescriptor?-1:fd,opts,true)};}
function dir(options,callback){const
args=_parseArguments(options,callback),opts=args[0],cb=args[1];tmpName(opts,function _tmpNameCreated(err,name){if(err)return cb(err);fs.mkdir(name,opts.mode||DIR_MODE,function _dirCreated(err){if(err)return cb(err);cb(null,name,_prepareTmpDirRemoveCallback(name,opts,false));});});}
function dirSync(options){const
args=_parseArguments(options),opts=args[0];const name=tmpNameSync(opts);fs.mkdirSync(name,opts.mode||DIR_MODE);return{name:name,removeCallback:_prepareTmpDirRemoveCallback(name,opts,true)};}
function _removeFileAsync(fdPath,next){const _handler=function(err){if(err&&!_isENOENT(err)){return next(err);}
next();};if(0<=fdPath[0])
fs.close(fdPath[0],function(){fs.unlink(fdPath[1],_handler);});else fs.unlink(fdPath[1],_handler);}
function _removeFileSync(fdPath){let rethrownException=null;try{if(0<=fdPath[0])fs.closeSync(fdPath[0]);}catch(e){if(!_isEBADF(e)&&!_isENOENT(e))throw e;}finally{try{fs.unlinkSync(fdPath[1]);}
catch(e){if(!_isENOENT(e))rethrownException=e;}}
if(rethrownException!==null){throw rethrownException;}}
function _prepareTmpFileRemoveCallback(name,fd,opts,sync){const removeCallbackSync=_prepareRemoveCallback(_removeFileSync,[fd,name],sync);const removeCallback=_prepareRemoveCallback(_removeFileAsync,[fd,name],sync,removeCallbackSync);if(!opts.keep)_removeObjects.unshift(removeCallbackSync);return sync?removeCallbackSync:removeCallback;}
function _prepareTmpDirRemoveCallback(name,opts,sync){const removeFunction=opts.unsafeCleanup?rimraf:fs.rmdir.bind(fs);const removeFunctionSync=opts.unsafeCleanup?FN_RIMRAF_SYNC:FN_RMDIR_SYNC;const removeCallbackSync=_prepareRemoveCallback(removeFunctionSync,name,sync);const removeCallback=_prepareRemoveCallback(removeFunction,name,sync,removeCallbackSync);if(!opts.keep)_removeObjects.unshift(removeCallbackSync);return sync?removeCallbackSync:removeCallback;}
function _prepareRemoveCallback(removeFunction,fileOrDirName,sync,cleanupCallbackSync){let called=false;return function _cleanupCallback(next){if(!called){const toRemove=cleanupCallbackSync||_cleanupCallback;const index=_removeObjects.indexOf(toRemove);if(index>=0)_removeObjects.splice(index,1);called=true;if(sync||removeFunction===FN_RMDIR_SYNC||removeFunction===FN_RIMRAF_SYNC){return removeFunction(fileOrDirName);}else{return removeFunction(fileOrDirName,next||function(){});}}};}
function _garbageCollector(){if(!_gracefulCleanup)return;while(_removeObjects.length){try{_removeObjects[0]();}catch(e){}}}
function _randomChars(howMany){let
value=[],rnd=null;try{rnd=crypto.randomBytes(howMany);}catch(e){rnd=crypto.pseudoRandomBytes(howMany);}
for(var i=0;i<howMany;i++){value.push(RANDOM_CHARS[rnd[i]%RANDOM_CHARS.length]);}
return value.join('');}
function _isBlank(s){return s===null||_isUndefined(s)||!s.trim();}
function _isUndefined(obj){return typeof obj==='undefined';}
function _parseArguments(options,callback){if(typeof options==='function'){return[{},options];}
if(_isUndefined(options)){return[{},callback];}
const actualOptions={};for(const key of Object.getOwnPropertyNames(options)){actualOptions[key]=options[key];}
return[actualOptions,callback];}
function _generateTmpName(opts){const tmpDir=opts.tmpdir;if(!_isUndefined(opts.name))
return path.join(tmpDir,opts.dir,opts.name);if(!_isUndefined(opts.template))
return path.join(tmpDir,opts.dir,opts.template).replace(TEMPLATE_PATTERN,_randomChars(6));const name=[opts.prefix?opts.prefix:'tmp','-',process.pid,'-',_randomChars(12),opts.postfix?'-'+opts.postfix:''].join('');return path.join(tmpDir,opts.dir,name);}
function _assertAndSanitizeOptions(options){options.tmpdir=_getTmpDir(options);const tmpDir=options.tmpdir;if(!_isUndefined(options.name))
_assertIsRelative(options.name,'name',tmpDir);if(!_isUndefined(options.dir))
_assertIsRelative(options.dir,'dir',tmpDir);if(!_isUndefined(options.template)){_assertIsRelative(options.template,'template',tmpDir);if(!options.template.match(TEMPLATE_PATTERN))
throw new Error(`Invalid template,found"${options.template}".`);}
if(!_isUndefined(options.tries)&&isNaN(options.tries)||options.tries<0)
throw new Error(`Invalid tries,found"${options.tries}".`);options.tries=_isUndefined(options.name)?options.tries||DEFAULT_TRIES:1;options.keep=!!options.keep;options.detachDescriptor=!!options.detachDescriptor;options.discardDescriptor=!!options.discardDescriptor;options.unsafeCleanup=!!options.unsafeCleanup;options.dir=_isUndefined(options.dir)?'':path.relative(tmpDir,_resolvePath(options.dir,tmpDir));options.template=_isUndefined(options.template)?undefined:path.relative(tmpDir,_resolvePath(options.template,tmpDir));options.template=_isBlank(options.template)?undefined:path.relative(options.dir,options.template);options.name=_isUndefined(options.name)?undefined:_sanitizeName(options.name);options.prefix=_isUndefined(options.prefix)?'':options.prefix;options.postfix=_isUndefined(options.postfix)?'':options.postfix;}
function _resolvePath(name,tmpDir){const sanitizedName=_sanitizeName(name);if(sanitizedName.startsWith(tmpDir)){return path.resolve(sanitizedName);}else{return path.resolve(path.join(tmpDir,sanitizedName));}}
function _sanitizeName(name){if(_isBlank(name)){return name;}
return name.replace(/["']/g,'');}
function _assertIsRelative(name,option,tmpDir){if(option==='name'){if(path.isAbsolute(name))
throw new Error(`${option}option must not contain an absolute path,found"${name}".`);let basename=path.basename(name);if(basename==='..'||basename==='.'||basename!==name)
throw new Error(`${option}option must not contain a path,found"${name}".`);}
else{if(path.isAbsolute(name)&&!name.startsWith(tmpDir)){throw new Error(`${option}option must be relative to"${tmpDir}",found"${name}".`);}
let resolvedPath=_resolvePath(name,tmpDir);if(!resolvedPath.startsWith(tmpDir))
throw new Error(`${option}option must be relative to"${tmpDir}",found"${resolvedPath}".`);}}
function _isEBADF(error){return _isExpectedError(error,-EBADF,'EBADF');}
function _isENOENT(error){return _isExpectedError(error,-ENOENT,'ENOENT');}
function _isExpectedError(error,errno,code){return IS_WIN32?error.code===code:error.code===code&&error.errno===errno;}
function setGracefulCleanup(){_gracefulCleanup=true;}
function _getTmpDir(options){return path.resolve(_sanitizeName(options&&options.tmpdir||os.tmpdir()));}
process.addListener(EXIT,_garbageCollector);Object.defineProperty(module.exports,'tmpdir',{enumerable:true,configurable:false,get:function(){return _getTmpDir();}});module.exports.dir=dir;module.exports.dirSync=dirSync;module.exports.file=file;module.exports.fileSync=fileSync;module.exports.tmpName=tmpName;module.exports.tmpNameSync=tmpNameSync;module.exports.setGracefulCleanup=setGracefulCleanup;