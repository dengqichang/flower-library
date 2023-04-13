let Vue3=false
let getPreVueContext
let handleHotUpdate
const uniVue3HotPathList=new Set()
const uniVue3HotDictList=new Set()
let oldH5HotUpdate
let h5Server
let h5ServerUpdateLock
function createGlobalPromise(){let resolve
const lock=new Promise((r)=>{resolve=r})
lock.resolve=resolve
return lock}
try{getPreVueContext=require('@dcloudio/uni-cli-shared/dist/preprocess/context').getPreVueContext()
if(getPreVueContext.VUE3){Vue3=true}
handleHotUpdate=require('@dcloudio/uni-h5-vite/dist/plugin/handleHotUpdate')
oldH5HotUpdate=handleHotUpdate.createHandleHotUpdate()
handleHotUpdate.createHandleHotUpdate=function(){return async function(obj){let lastLock
if(h5ServerUpdateLock){lastLock=h5ServerUpdateLock
await lastLock}else{h5ServerUpdateLock=createGlobalPromise()
lastLock=h5ServerUpdateLock}
h5Server=obj.server
const newParams={...obj}
if(uniVue3HotPathList.has(obj.file)||uniVue3HotPathList.has(obj.file.replace(/\//g,'\\'))){newParams.file='pages.json'}
const res=await oldH5HotUpdate.call(this,newParams)
await(new Promise((resolve)=>{setTimeout(resolve,100)}))
lastLock.resolve()
h5ServerUpdateLock=null
return res}}}catch(e){}
const tmp=require('./tmp/tmp')
const path=require('path')
const callsites=require('./callsites')
const fs=require('fs')
const Module=require('module').Module
const deepFind=require('./deepFind')
const oldLoad=Module._load
const wrap=Module.wrap
let addDependency
let tmpfile=tmp.fileSync();uniVue3HotPathList.add(tmpfile.name)
function touchTmpFileChange(){let now=new Date();fs.utimes(tmpfile.name,now,now,error=>{if(error)console.error(error);});}
function uniPagesHotModule(mix={},fromFilename,pureRequire=false){let parentPath=''
fromFilename=fromFilename||callsites()[1].getFileName()
if(getPreVueContext&&typeof mix==='string'){fromFilename=mix}
try{parentPath=path.dirname(fromFilename)}catch(e){}
function hotRequire(modulesPath){let finalPath=path.resolve(parentPath,modulesPath)
return require(finalPath)}
if(mix&&typeof mix==='object'||getPreVueContext&&typeof mix==='string'&&!pureRequire){let topPath
if(getPreVueContext){topPath=path.resolve(process.env.UNI_INPUT_DIR,mix)
mix.__proto__.addDependency=function(){}
try{require.resolve(topPath)}catch(e){console.warn(e)
return}
uniVue3HotPathList.add(topPath)}else{topPath=path.resolve(process.env.UNI_INPUT_DIR,'pages.js')}
if(typeof mix.addDependency==='function'){addDependency=mix.addDependency
try{addDependency(topPath)}catch(e){}
Module._load=function(request,parentModule,isMain){if(!request.match(/^[.\\\/]/)&&!request.match(/:/)||request.match(/\.json$/i)){Module.wrap=wrap
return oldLoad.call(this,request,parentModule,isMain)}
let isHack=false
let tryResolve=request
if(tryResolve!==topPath){deepFind(parentModule,(child)=>{if(child.parent)return[child.parent]},(child)=>{if(child.filename===require.resolve(topPath)){isHack=true
return false}})}else{isHack=true}
if(!isHack)return oldLoad.call(this,request,parentModule,isMain)
const modulePath=require.resolve(request!==topPath?path.resolve(parentModule.path,request):request)
Module.wrap=function(script){return wrap('require.context = module.constructor.hackInfo.hotRequireContext;\n'+script)}
try{if(getPreVueContext){uniVue3HotPathList.add(modulePath)}
addDependency(modulePath)
const selfModule=require.cache[modulePath]
if(selfModule&&selfModule.parent&&selfModule.parent.children){selfModule.parent.children.find((m,index,arr)=>{if(m===selfModule){arr.splice(index,1)
return true}})}
delete require.cache[modulePath]}catch(e){}
return oldLoad.call(this,request,parentModule,isMain)}}
return hotRequire}
if(typeof mix==='string'){return hotRequire(mix)}
throw new Error('参数错误，只接受loader或者modulePath')}
function hotRequireContext(dir,deep=false,fileRegExp){const filesMap={}
let topPath=''
let ownerPath=''
try{ownerPath=callsites()[1].getFileName()
topPath=ownerPath.match(/(.*)[\/\\][^\/\\]+$/)[1]}catch(e){}
uniVue3HotDictList.add(topPath)
let firstPath=path.resolve(topPath,dir)
function findFiles(dirName){fs.readdirSync(dirName).map((item)=>{let absolutePath=path.resolve(dirName,item)
if(deep){try{findFiles(absolutePath)
return}catch(e){}}
if(fileRegExp&&!item.match(fileRegExp)){return}
if(ownerPath===absolutePath)return
const modulePath=absolutePath.replace(topPath,'.').replace(/\\\\/g,'/').replace(/\\/g,'/')
if(getPreVueContext){uniPagesHotModule(absolutePath)}
filesMap[modulePath]=uniPagesHotModule(absolutePath,null,true)})}
function keys(){return Object.keys(filesMap)}
function resolve(relativePath){return path.resolve(firstPath,relativePath)}
function output(id){return filesMap[id]}
findFiles(firstPath)
output.keys=keys
output.resolve=resolve
return output}
uniPagesHotModule.hot=function(pagesFunction){const fromFilename=callsites()[1].getFileName()
return function(pagesJson,loader){uniPagesHotModule(loader,fromFilename)
return pagesFunction.call(this,pagesJson,loader)}}
uniPagesHotModule.context=hotRequireContext
Module.hackInfo={hotRequireContext}
if(getPreVueContext){getPreVueContext['uniHotJs']=function(jsPath){uniPagesHotModule(jsPath);const pagesJson=require(path.resolve(process.env.UNI_INPUT_DIR,jsPath));for(let i in pagesJson.pages){if(pagesJson.pages[i].path==pagesJson.entryPagePath){let str=pagesJson.pages.splice(i,1)
pagesJson.pages.unshift(str[0])}};return JSON.stringify(pagesJson)}}else{throw Error('uniHotJs方法只支持在uni vue3 vite版本使用！')}
vitePluginUniPages=function(){const chokidarList=new Set()
return{name:'vite-plugin-uniapp-pages',transform(){uniVue3HotPathList.forEach(jsPath=>{this.addWatchFile(jsPath)})
this.addWatchFile(tmpfile.name);}}}
pagesJsonModules=function(path){const files=require.context(`${process.env.UNI_INPUT_DIR}/${path}`,true,/\.js$/)
let modules=[]
files.keys().forEach(key=>{const item=files(key)
modules.push(...item)});return modules;}
module.exports={vitePluginUniPages,pagesJsonModules}