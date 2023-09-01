/**
 * 作者：邓琪昌
 * 创建日期：2023年3月15日
 * 描述：flower-library 默认配置文件
 */
import props from "../props";
import { reactive } from "vue";

const config = reactive({
	// 主题色
	colors: {
		primary: "#296BEF",
		success: "#07C160",
		warning: "#EDA20C",
		danger: "#D9514C",
		info: "#909399"
	},
	// 预设颜色
	presets: {
		"gray": ["#8c8c8c", "#8c8c8c"],
		"gray-1": ["#ffffff", "#000000"],
		"gray-2": ["#fafafa", "#141414"],
		"gray-3": ["#f5f5f5", "#1f1f1f"],
		"gray-4": ["#f0f0f0", "#262626"],
		"gray-5": ["#d9d9d9", "#434343"],
		"gray-6": ["#bfbfbf", "#595959"],
		"gray-7": ["#8c8c8c", "#8c8c8c"],
		"gray-8": ["#595959", "#bfbfbf"],
		"gray-9": ["#434343", "#d9d9d9"],
		"gray-10": ["#262626", "#f0f0f0"],
		"gray-11": ["#1f1f1f", "#f5f5f5"],
		"gray-12": ["#141414", "#fafafa"],
		"gray-13": ["#000000", "#ffffff"]
	},
	// 国际化语言
	language: {
		// 语言代码
		languageCode: "zh_Hans",
		// 语言包
		languagePackage: {},
		// 当前语言包
		currentLanguagePackage: {},
		// 当前组件语言包
		currentComponentLanguagePackage: {}
	},
	// 默认设置
	internalSetup: {
		// 字体大小
		increase: uni.getStorageSync("flower-library-fontszie-increase") || 0,
		// 暗黑模式
		model: uni.getStorageSync("flower-library-theme-model") || "light",
		// 默哀模式
		sacrifice: uni.getStorageSync("flower-library-sacrifice-model") || false
	},
	// 插件属性
	plugins: props
});

export default config;