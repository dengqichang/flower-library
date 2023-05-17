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


/**
 * 单位转化，number时为rpx，string自带单位
 */
const unitConversion = (e) => {
	if (isNaN(Number(e, 8))) {
		return `${e}`
	} else {
		return `${e}rpx`
	};
};

const uniDistanceType = (e) => {
	let distanceArray = [];
	switch (typeof e) {
		case "string":
			if (e.indexOf(',') != -1) {
				distanceArray = e.split(",");
			} else {
				distanceArray = e.split(" ");
			};
			break;
		case "object":
			distanceArray = e;
			break;
		default:
			break;
	};
	return distanceArray;
}

const uniDistanceConfig = (s1, s2 = 'margin') => {
	let style = {};
	switch (s1.length) {
		case 1:
			style[`${s2}`] = unitConversion(s1[0]);
			break;
		case 2:
			style[`${s2}Top`] = unitConversion(s1[0]);
			style[`${s2}Right`] = unitConversion(s1[1]);
			style[`${s2}Bottom`] = unitConversion(s1[0]);
			style[`${s2}Left`] = unitConversion(s1[1]);
			break;
		case 3:
			style[`${s2}Top`] = unitConversion(s1[0]);
			style[`${s2}Right`] = unitConversion(s1[1]);
			style[`${s2}Bottom`] = unitConversion(s1[2]);
			style[`${s2}Left`] = unitConversion(s1[1]);
			break;
		case 4:
			style[`${s2}Top`] = unitConversion(s1[0]);
			style[`${s2}Right`] = unitConversion(s1[1]);
			style[`${s2}Bottom`] = unitConversion(s1[2]);
			style[`${s2}Left`] = unitConversion(s1[3]);
			break;
		default:
			break;
	};
	return style;
}

/**
 * 边距转化
 */
const uniMargin = (e) => {
	if (!!e) {
		return uniDistanceConfig(uniDistanceType(e), 'margin');
	} else {
		return {
			margin: '0rpx'
		}
	}
};

const uniPadding = (e) => {
	if (!!e) {
		return uniDistanceConfig(uniDistanceType(e), 'padding');
	} else {
		return {
			padding: '0rpx'
		}
	}
};

export {
	setTheme,
	restoreTheme,
	getColors,
	unitConversion,
	uniMargin,
	uniPadding
}