/**
 * 作者：邓琪昌
 * 创建日期：2023年3月23日
 * 描述：配置相关
 */
// 读取开发者配置文件
import defaultConfig from "./defaultConfiguration.js";
import pagesJson from "@/pages.json";

const deepJsonAssign = (j1, j2) => {for (let i in j2) {if (typeof j2[i] == "object" && j1[i]) {deepJsonAssign(j1[i], j2[i])} else {j1[i] = j2[i];}}};
if(!!pagesJson.flowerConfig){
	deepJsonAssign(defaultConfig, pagesJson.flowerConfig);
};

// 默认主题
const defaultPrimary = defaultConfig.colors.primary;
// 更换主题
if (uni.getStorageSync('flower-library-colors-theme')) {defaultConfig.colors.primary = uni.getStorageSync('flower-library-colors-theme');};
// 暴露
const developerConfig = pagesJson.flowerConfig;
const defaultColors = defaultConfig.colors;
const defaultPresets = defaultConfig.presets;
const defaultPlugins = defaultConfig.plugins;

export {defaultConfig,developerConfig,defaultColors,defaultPresets,defaultPlugins,defaultPrimary};
