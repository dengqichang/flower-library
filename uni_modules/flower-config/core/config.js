/**
 * 作者：邓琪昌
 * 创建日期：2023年3月23日
 * 描述：配置相关
 */

// 读取开发者配置文件
let developerConfigGlobEagerJS = import.meta.globEager('/flower.config.js');
let developerConfigGlobEagerTS = import.meta.globEager('/flower.config.ts');
// 当配置不存在时赋予json值
if (!developerConfigGlobEagerTS['/flower.config.ts']) {developerConfigGlobEagerTS = {"/flower.config.ts": {"default": {}}}};
if (!developerConfigGlobEagerJS['/flower.config.js']) {developerConfigGlobEagerJS = {"/flower.config.js": {"default": {}}}};
// 开发者配置
let developerConfig = Object.assign(developerConfigGlobEagerJS['/flower.config.js'].default,developerConfigGlobEagerTS['/flower.config.ts'].default);
// 默认配置
let defaultConfig =import.meta.globEager('./defaultConfiguration.js')['./defaultConfiguration.js'].default;
// 合并开发者配置与默认配置
const deepJsonAssign = (j1, j2) => {for (let i in j2) {if (typeof j2[i] == "object" && j1[i]) {deepJsonAssign(j1[i], j2[i])} else {j1[i] = j2[i];}}};
deepJsonAssign(defaultConfig, developerConfig);
// 默认主题
const defaultPrimary = defaultConfig.colors.primary;
// 更换主题
if (uni.getStorageSync('flower-library-colors-theme')) {defaultConfig.colors.primary = uni.getStorageSync('flower-library-colors-theme');};
const defaultColors = defaultConfig.colors;
const defaultPresets = defaultConfig.presets;
const defaultPlugins = defaultConfig.plugins;
export {defaultConfig,developerConfig,defaultColors,defaultPresets,defaultPlugins,defaultPrimary};
