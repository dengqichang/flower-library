import {
	generate
} from "../plug-in/ant-design-colors";
import {
	globalStyle
} from "./pages.js"

// 获取主题色
const themeColor = globalStyle.flowerThemeColor || '#296BEF';
// 获取布局组件底部logo
const layoutBottomLogo = globalStyle.flowerLayoutBottomLogo || '';
// 初始化主题色
let presetPalettes = {};

const tempThemeColorList = generate(themeColor);

for (let i in tempThemeColorList) {
	presetPalettes[`theme-${Number(i)+1}`] = tempThemeColorList[i];
};
presetPalettes[`theme`] = tempThemeColorList[5];

// 当未设置下拉刷新样式时，默认为主题色
// #ifdef APP-PLUS
if (!__uniConfig.globalStyle.pullToRefresh) {
	__uniConfig.globalStyle.pullToRefresh = {
		color: themeColor
	}
};
// #endif

/**
 * @param {String} c 颜色值
 * @return {String} 如c为内置颜色则返回内置颜色值，若不是内置颜色，则直接返回c值
 */
const getBuiltInColor = (c) => {
	return presetPalettes[c] ? presetPalettes[c] : c
}

export {
	getBuiltInColor,
	layoutBottomLogo
}
