/**
 * 作者：邓琪昌
 * 创建日期：2023年8月10日
 * 描述：flower-library 主题设置
 */
import { reactive } from "vue";
import { generate } from "../plug-in/design-colors";
import { defaultPrimary, defaultColors, defaultPresets, defaultInternalSetup } from "./mergeConfiguration";
import { switchGlobalModel } from "./darkThemeModel";
import { getCurrentPageRoute } from "./pages"

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
 * 初始化主题深色/浅色模式
 * @param {String} model ["light","dark"] 模式
 */
const initThemeModel = () : void => {
	// 缓存主题色
	const model = defaultInternalSetup.model;
	// #ifdef APP-PLUS
	setPullToRefreshColor(defaultColors.primary);
	// #endif
	// 初始化颜色
	for (let i in defaultColors) { colors = Object.assign(colors, defaultColorGenerate(i, model)); };
	// 预设颜色
	for (let p in defaultPresets) { if (typeof defaultPresets[p] == "string") { colors[p] = defaultPresets[p]; } else { colors[p] = defaultPresets[p][model == "light" ? 0 : 1]; }; };
};

/**
 * 设置深色/浅色模式
 * @param {String} model ["light","dark"] 模式
 */
const setThemeModel = (model : "light" | "dark" = defaultInternalSetup.model) : void => {
	// 缓存主题色
	defaultInternalSetup.model = model;
	uni.setStorageSync("flower-library-theme-model", model);
	// #ifdef APP-PLUS
	switchGlobalModel(model == "dark" ? true : false, getCurrentPageRoute());
	// #endif
	// 重置初始化
	initThemeModel();
};

/**
 * 获取暗黑模式
 */
const getThemeModel = () => {
	return defaultInternalSetup.model;
};
const getThemeModelBoolean = () => {
	return defaultInternalSetup.model == "dark" ? true : false;
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
 * 获取主题
 */
const getThemeColor = () => {
	return defaultColors.primary;
};
/**
 * 设置默哀模式
 */
const setSacrificeMode = (mode : boolean = false) => {
	defaultInternalSetup.sacrifice = mode;
	uni.setStorageSync("flower-library-sacrifice-model", mode);
};
/**
 * 获取默哀模式值
 */
const getSacrificeMode = () => {
	return defaultInternalSetup.sacrifice;
}
/**
 * 当未配置下拉刷新颜色时，自动装配主题色
 * @param {String} color 主题颜色
 */
const setPullToRefreshColor = (color : string) => {
	if (!__uniConfig.globalStyle.pullToRefresh) {
		__uniConfig.globalStyle.pullToRefresh = {
			color: color
		};
	};
};

/**
 * 参数是否为内置变量，如果不是则直接返回
 * @param {String} color  颜色值 / 内置颜色
 */
const isBuiltColor = (color : string) : string => {
	return colors[color] ? colors[color] : color
};
/**
 * 获取 flower-library 颜色
 * @param {String,Array} color  颜色值 / 内置颜色
 */
const getColors = (color : string | any[]) : string => {
	if (typeof color == "object") {
		return getThemeModelBoolean() ? color[1] : color[0]
	} else {
		return isBuiltColor(color)
	};
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
 * 获取字体大小值
 */
const getFontSizeIncrease = () => {
	return defaultInternalSetup.increase;
}

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
	initThemeModel,
	setThemeModel,
	getThemeModel,
	getThemeModelBoolean,
	setThemeColor,
	getThemeColor,
	restoreThemeColor,
	setFontSizeIncrease,
	getFontSizeIncrease,
	restoreFontSizeIncrease,
	isBuiltColor,
	getColors,
	getTextColors,
	getBackgroundColors,
	setSacrificeMode,
	getSacrificeMode
}