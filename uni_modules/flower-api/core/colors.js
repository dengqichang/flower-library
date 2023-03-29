import {reactive} from "vue";
import {generate} from '@/uni_modules/flower-api/plug-in/design-colors';
import {defaultConfig,defaultPrimary} from "./config.js";

// 颜色解析器
const colorGenerate = (e) => {
	const temp = generate(defaultConfig.colors[e]);for (let t in temp) {colors[`${e}-${Number(t)+1}`] = temp[t];};colors[e] = temp[5];
};
// 初始化全局颜色
let colors = reactive({});
for (let i in defaultConfig.colors) {colorGenerate(i);};
colors = Object.assign(colors,defaultConfig.presets);
/**
 * 设置主题
 */
const setFlowerTheme = (c) => {
	uni.setStorageSync("flower-ui-colors-theme", c);
	defaultConfig.colors.primary = c;
	colorGenerate('primary');
};
/**
 * 重置主题
 */
const restoreFlowerTheme = () => {
	uni.removeStorageSync('flower-ui-colors-theme');
	defaultConfig.colors.primary = defaultPrimary;
	colorGenerate('primary');
}
/**
 * 参数是否为内置变量，如果不是则直接返回
 */
const isBuiltColor = (c) => {return colors[c] ? colors[c] : c};
/**
 * 获取内置颜色
 */
const getFlowerColor = (c) => {return isBuiltColor(c)};
export {
	setFlowerTheme,
	restoreFlowerTheme,
	getFlowerColor
}