import { colorPalette } from './palette.js';
import { hexToRgb, hsvToHex, rgbToHsv } from '@/uni_modules/flower-api/uni-app/color.js';

/**
 * 暗黑模式动态梯度算法，参考 [Arco Design色彩算法](https://arco.design/palette/list)
 * @param primaryColor 基础色，仅支持hex十六进制格式
 * @returns string
 */
export const colorPaletteDark = (primaryColor, i) => {
	const lightColor = colorPalette(primaryColor, 10 - i + 1);
	const colorRGB = hexToRgb(lightColor);
	const colorHSV = rgbToHsv(colorRGB.r, colorRGB.g, colorRGB.b);
	
	const baseHue = colorHSV.h;
	const baseSaturation = colorHSV.s * 100;
	const baseValue = colorHSV.v * 100;
	const step = Math.ceil((baseSaturation - 9) / 4);
	const step1to5 = Math.ceil((100 - baseSaturation) / 5);
	
	function getNewSaturation (_index) {
		if (_index < 6) {
			const saturation = baseSaturation + (6 - _index) * step1to5;
			return Math.max(0, Math.min(saturation, 100));
		}
		if (_index == 6) {
			if (baseHue >= 0 && baseHue < 50) {
				return Math.max(0, Math.min(baseSaturation - 15, 100));
			}
			if (baseHue >= 50 && baseHue < 191) {
				return Math.max(0, Math.min(baseSaturation - 20, 100));
			}
			if (baseHue >= 191 && baseHue <= 360) {
				return Math.max(0, Math.min(baseSaturation - 15, 100));
			}
		}
		
		return Math.max(0, Math.min(baseSaturation - step * (_index - 6), 100));
	}
	
	const retColor = hsvToHex(
		baseHue,
		getNewSaturation(i) / 100,
		baseValue / 100
	);
	
	return retColor;
};