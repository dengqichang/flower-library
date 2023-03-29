import index_1 from "./index";
const tinycolor = index_1.tinycolor;

import names from "./css-color-names";
import conversion from "./conversion";
const rgbToRgb = conversion.rgbToRgb;
const rgbToHsl = conversion.rgbToHsl;
const hslToRgb = conversion.hslToRgb;
const rgbToHsv = conversion.rgbToHsv;
const hsvToRgb = conversion.hsvToRgb;
const rgbToHex = conversion.rgbToHex;
const rgbaToArgbHex = conversion.rgbaToArgbHex;
const rgbaToHex = conversion.rgbaToHex;
const convertDecimalToHex = conversion.convertDecimalToHex;
const convertHexToDecimal = conversion.convertHexToDecimal;
const parseIntFromHex = conversion.parseIntFromHex;
const numberInputToObject = conversion.numberInputToObject;
import format_input from "./format-input";
const inputToRGB = format_input.inputToRGB;
const stringInputToObject = format_input.stringInputToObject;
const isValidCSSUnit = format_input.isValidCSSUnit;
export default {
	tinycolor,
	names,
	rgbToRgb,
	rgbToHsl,
	hslToRgb,
	rgbToHsv,
	hsvToRgb,
	rgbToHex,
	rgbaToArgbHex,
	rgbaToHex,
	convertDecimalToHex,
	convertHexToDecimal,
	parseIntFromHex,
	numberInputToObject,
	inputToRGB,
	stringInputToObject,
	isValidCSSUnit
};
