/**
 * 作者：邓琪昌
 * 创建日期：2023年8月10日
 * 描述：flower-library 主题设置
 */
import { reactive } from "vue";
import { generate } from "../plug-in/design-colors";
import { defaultPrimary, defaultColors, defaultPresets, defaultInternalSetup } from "./mergeConfiguration";

// 颜色集
let colors : object = reactive({});
/**
 * 正常颜色解析
 * @param {String} colorKey 配置文件中color颜色key
 * @param {String} model ["light","dark"] 解析颜色模式
 */
const defaultColorGenerate = (colorKey : string, model : "light" | "dark" = "light") : object => {
	let tempColors : object = {};
	const tempGenerateColos : string[] = generate(defaultColors[colorKey], { theme: model, backgroundColor: "141414" });
	for (let t in tempGenerateColos) { tempColors[`${colorKey}-${Number(t) + 1}`] = tempGenerateColos[t]; };
	tempColors[colorKey] = tempGenerateColos[5];
	return tempColors;
};

/**
 * 设置深色/浅色模式
 * @param {String} model ["light","dark"] 模式
 */
const setThemeModel = (model : "light" | "dark" = defaultInternalSetup.model) : void => {
	// 缓存主题色
	defaultInternalSetup.model = model;
	uni.setStorageSync("flower-library-theme-model", model);
	setPullToRefreshColor(defaultColors.primary);
	// 初始化颜色
	for (let i in defaultColors) { colors = Object.assign(colors, defaultColorGenerate(i, model)); };
	// 预设颜色
	for (let p in defaultPresets) { if (typeof defaultPresets[p] == "string") { colors[p] = defaultPresets[p]; } else { colors[p] = defaultPresets[p][model == "light" ? 0 : 1]; }; };
};

/**
 * 设置主题
 * @param {String} color [color = "#296BEF"] 颜色
 */
const setThemeColor = (color : string = defaultPrimary) : void => {
	uni.setStorageSync("flower-library-colors-theme", color);
	defaultColors.primary = color;
	setPullToRefreshColor(color);
	colors = Object.assign(colors, defaultColorGenerate("primary", defaultInternalSetup.model));
};
/**
 * 重置主题
 */
const restoreThemeColor = () => {
	uni.removeStorageSync('flower-library-colors-theme');
	defaultColors.primary = defaultPrimary;
	setPullToRefreshColor("defaultPrimary");
	colors = Object.assign(colors, defaultColorGenerate("primary", defaultInternalSetup.model));
};

/**
 * 当未配置下拉刷新颜色时，自动装配主题色
 * @param {String} color 主题颜色
 */
const setPullToRefreshColor = (color : string) => {
	// #ifdef APP-PLUS
	if (!__uniConfig.globalStyle.pullToRefresh) {
		__uniConfig.globalStyle.pullToRefresh = {
			color: color
		};
	};
	// #endif
};

setPullToRefreshColor("#1890ff");

/**
 * 参数是否为内置变量，如果不是则直接返回
 * @param {String} color  颜色值 / 内置颜色
 */
const isBuiltColor = (color : string) : string => {
	return colors[color] ? colors[color] : color
};
/**
 * 获取 flower-library 颜色
 * @param {String} color  颜色值 / 内置颜色
 */
const getColors = (color : string) : string => {
	return isBuiltColor(color)
};
/**
 * 获取 flower-library 颜色
 * @param {String} color  颜色值 / 内置颜色
 */
const getTextColors = (color : string) : object => {
	return { color: getColors(color) };
};
/**
 * 获取 flower-library 颜色
 * @param {String} color  颜色值 / 内置颜色
 */
const getBackgroundColors = (color : string) : object => {
	return { backgroundColor: getColors(color) };
};

/**
 * 设置字体大小增减量
 * @param {Number} parameter  增减数值
 */
const setFontSizeIncrease = (parameter : number) : void => {
	defaultInternalSetup.increase = parameter;
	uni.setStorageSync("flower-library-fontszie-increase", parameter)
};
/**
 * 重置字体大小设置
 */
const restoreFontSizeIncrease = () : void => {
	defaultInternalSetup.increase = 0;
	uni.removeStorageSync("flower-library-fontszie-increase");
};

export {
	generate,
	defaultColors,
	setThemeModel,
	setThemeColor,
	restoreThemeColor,
	setFontSizeIncrease,
	restoreFontSizeIncrease,
	isBuiltColor,
	getColors,
	getTextColors,
	getBackgroundColors
}