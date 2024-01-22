import {colorPalette} from './palette.js';
import {hexToRgb,hsvToHex,rgbToHsv} from '@/uni_modules/flower-api/uni-app/color.js';

/**
 * 暗黑模式动态梯度算法，参考 [Arco Design色彩算法](https://arco.design/palette/list)
 * @param primaryColor 基础色，仅支持hex十六进制格式
 * @returns string
 */
export const colorPaletteDark = (primaryColor, i) => {
	const lightColor = colorPalette(primaryColor, 10 - i + 1);
	const lightColorRGB = hexToRgb(lightColor);
	const lightColorHSV = rgbToHsv(lightColorRGB.r, lightColorRGB.g, lightColorRGB.b);

	const colorRGB = hexToRgb(primaryColor);
	const colorHSV = rgbToHsv(colorRGB.r, colorRGB.g, colorRGB.b);
	const originBaseHue = colorHSV.h;
	const originBaseSaturation = colorHSV.s * 100;

	function getNewSaturationIndexSix() {
		if (originBaseHue >= 50 && originBaseHue < 191) {
			return originBaseSaturation - 20;
		} else {
			return originBaseSaturation - 15;
		}
	};

	const baseSaturation = getNewSaturationIndexSix();

	const step = Math.ceil((baseSaturation - 9) / 4);
	const step1to5 = Math.ceil((100 - baseSaturation) / 5);

	function getNewSaturation(_index) {
		if (_index < 6) {
			return baseSaturation + (6 - _index) * step1to5;
		}
		if (_index == 6) {
			if (originBaseHue >= 50 && originBaseHue < 191) {
				return originBaseSaturation - 20;
			} else {
				return originBaseSaturation - 15;
			}
		}
		return baseSaturation - step * (_index - 6);
	};

	const newSaturation = getNewSaturation(i) / 100;

	const retColor = hsvToHex(
		lightColorHSV.h,
		newSaturation > 1 ? 1 : newSaturation,
		lightColorHSV.v
	);




	return retColor;
};