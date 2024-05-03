import { hsvToHex, hexToHsv } from "./color.js";

/**
 * 动态梯度算法，参考 [Arco Design色彩算法](https://arco.design/palette/list)
 * @param primaryColor 基础色，仅支持hex十六进制格式
 * @returns string
 */
export function colorPalette(originColor, i) {
	const color = hexToHsv(originColor);

	const h = color.h;
	const s = color.s * 100;
	const v = color.v * 100;

	const hueStep = 2;
	const maxSaturationStep = 100;
	const minSaturationStep = 9;

	const maxValue = 100;
	const minValue = 30;

	function getNewHue(isLight, i) {
		let hue;
		if (h >= 60 && h <= 240) {
			hue = isLight ? h - hueStep * i : h + hueStep * i;
		} else {
			hue = isLight ? h + hueStep * i : h - hueStep * i;
		}
		if (hue < 0) {
			hue += 360;
		} else if (hue >= 360) {
			hue -= 360;
		}
		return Math.round(hue) == 360 ? 0 : Math.round(hue);
	}

	function getNewSaturation(isLight, i) {
		let newSaturation;

		if (isLight) {
			newSaturation = s <= minSaturationStep ? s : s - ((s - minSaturationStep) / 5) * i;
		} else {
			newSaturation = s + ((maxSaturationStep - s) / 4) * i;
		}
		return newSaturation;
	}

	function getNewValue(isLight, i) {
		return isLight ? v + ((maxValue - v) / 5) * i : (v <= minValue ? v : v - ((v - minValue) / 4) * i);
	}

	const isLight = i < 6;
	const index = isLight ? 6 - i : i - 6;

	return i == 6 ? originColor : hsvToHex(getNewHue(isLight, index), getNewSaturation(isLight, index) / 100,
		getNewValue(isLight, index) / 100);
};