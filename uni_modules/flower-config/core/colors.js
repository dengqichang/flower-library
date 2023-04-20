import {
	reactive
} from "vue";
import {
	generate
} from '../plug-in/design-colors';
import {
	defaultConfig,
	defaultPrimary
} from "./config.js";

// 颜色解析器
const colorGenerate = (e) => {
	const temp = generate(defaultConfig.colors[e]);
	for (let t in temp) {
		colors[`${e}-${Number(t)+1}`] = temp[t];
	};
	colors[e] = temp[5];
	
	// 修改原生下拉刷新APP平台统一样式，下拉刷新默认为主色
	if (e == 'primary') {
		// #ifdef APP-PLUS
		if (!__uniConfig.globalStyle.pullToRefresh) {
			__uniConfig.globalStyle.pullToRefresh = {
				color: defaultConfig.colors.primary
			};
		};
		// #endif
	};
};
// 初始化全局颜色
let colors = reactive({});
for (let i in defaultConfig.colors) {
	colorGenerate(i);
};
colors = Object.assign(colors, defaultConfig.presets);
/**
 * 设置主题
 */
const setTheme = (c) => {
	uni.setStorageSync("flower-library-colors-theme", c);
	defaultConfig.colors.primary = c;
	colorGenerate('primary');
};
/**
 * 重置主题
 */
const restoreTheme = () => {
	uni.removeStorageSync('flower-library-colors-theme');
	defaultConfig.colors.primary = defaultPrimary;
	colorGenerate('primary');
}
/**
 * 参数是否为内置变量，如果不是则直接返回
 */
const isBuiltColor = (c) => {
	return colors[c] ? colors[c] : c
};
/**
 * 获取内置颜色
 */
const getColors = (c) => {
	return isBuiltColor(c)
};

export {
	setTheme,
	restoreTheme,
	getColors
}