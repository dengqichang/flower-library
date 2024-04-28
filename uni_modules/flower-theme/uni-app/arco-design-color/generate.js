import {colorPalette} from './palette.js';
import {colorPaletteDark} from './palette-dark.js';

/**
 * 获取基础色对应的调色板，可以直接获取 0-9 10个色阶的调色板集合，也可以根据索引值单独获取调色板的某个颜色
 * @param color  基础色
 * @param dark 是否暗黑模式
 */
export function generate(
	color = "#296BEF",
	dark = false
) {
	const colorList = [];

	for (let i = 1; i <= 10; i++) {
		if (!dark) {
			colorList.push(colorPalette(color, i));
		} else {
			colorList.push(colorPaletteDark(color, i));
		};
	};

	return colorList;
};