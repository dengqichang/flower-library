/**
 * 作者：邓琪昌
 * 创建日期：2023年3月23日
 * 描述：配置相关
 */
import defaultConfig from "./defaultConfiguration";
// 读取开发者配置文件
let developerConfigGlobEager : object;
try { developerConfigGlobEager = import.meta.globEager('/flower.config.js')['/flower.config.js'].default; } catch (e) { };
try { developerConfigGlobEager = import.meta.globEager('/flower.config.ts')['/flower.config.ts'].default; } catch (e) { };
// 深度合并
const deepJsonAssign = (j1 : object, j2 : object) : void => { for (let i in j2) { if (typeof j2[i] == "object" && j1[i]) { deepJsonAssign(j1[i], j2[i]) } else { j1[i] = j2[i]; } } };
// 初始化开发者配置
deepJsonAssign(defaultConfig, developerConfigGlobEager);
// 默认主题
const defaultPrimary = defaultConfig.colors.primary;
// 更换主题
if (uni.getStorageSync('flower-library-colors-theme')) { defaultConfig.colors.primary = uni.getStorageSync('flower-library-colors-theme'); };
// 暴露
const defaultColors = defaultConfig.colors;
const defaultPresets = defaultConfig.presets;
const defaultLanguage = defaultConfig.language;
const defaultInternalSetup = defaultConfig.internalSetup;
const defaultPlugins = defaultConfig.plugins;

export {
	defaultPrimary,
	defaultColors,
	defaultPresets,
	defaultLanguage,
	defaultInternalSetup,
	defaultPlugins
}