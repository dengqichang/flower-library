/**
 * 当数值大于1时为1，小于0时为0，1与0之间原值
 */
function isThresholdValue(num) {
	if (num > 1) {
		return 1;
	} else if (num < 0) {
		return 0;
	} else {
		return num;
	}
};

/**
 * RGB颜色值转HSL颜色值
 * @param r 红色
 * @param g 绿色
 * @param b 蓝色
 * @param slAutoPercent 最后输出时s和l是否自动转换为百分比，默认`true`
 * @returns HSL
 * @example
 * const rgbColor: RGBColor = { r: 255, g: 0, b: 0 };
 * const hslColor: HSLColor = rgbToHsl(rgbColor);
 * console.log(hslColor); // 输出：{ h: 0, s: 1, l: 0.5 }
 */
export function rgbToHsl(r, g, b) {
	const hsl = {
		h: 0,
		s: 0,
		l: 0
	};

	// 计算rgb基数
	r = r / 255;
	g = g / 255;
	b = b / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const delta = max - min;

	// 计算hue
	let hue = hsl.h;
	if (delta != 0) {
		if (max === r) {
			hue = ((g - b) / delta) % 6;
		} else if (max === g) {
			hue = (b - r) / delta + 2;
		} else {
			hue = (r - g) / delta + 4;
		}
	}

	// 计算lightness
	let lightness = (max + min) / 2;

	// 计算saturation
	let saturation = hsl.s;
	if (delta != 0) {
		saturation = delta / (1 - Math.abs(2 * lightness - 1));
	}

	// 返回 HSL 颜色值
	hsl.h = hue * 60;
	hsl.s = saturation;
	hsl.l = lightness;

	return hsl;
};

/**
 * RGB颜色值转HSV颜色值
 * @param r 红色
 * @param g 绿色
 * @param b 蓝色
 * @returns HSV
 * @example
 * const rgbColor: RGBColor = { r: 0, g: 188, b: 121 };
 * const hsvColor: HSVColor = rgbToHsv(rgbColor);
 * console.log(hsvColor); // 输出：{ h: 159, s: 1.0, v: 0.74 }
 */
export function rgbToHsv(r, g, b) {
	const r1 = r / 255;
	const g1 = g / 255;
	const b1 = b / 255;

	const max = Math.max(r1, g1, b1);
	const min = Math.min(r1, g1, b1);
	const delta = max - min;

	let h = 0;
	if (delta != 0) {
		if (max === r1) {
			h = ((g1 - b1) / delta) % 6;
		} else if (max === g1) {
			h = (b1 - r1) / delta + 2;
		} else if (max === b1) {
			h = (r1 - g1) / delta + 4;
		}
	}

	const saturation = max == 0 ? 0 : delta / max;
	const value = max;
	let hue = h * 60;

	// 处理负数情况
	if (hue < 0) {
		hue += 360
	};

	const hsv = {
		h: hue,
		s: saturation,
		v: value
	};

	return hsv;
};
/**
 * HSV颜色值转RGB颜色值
 * @param h [0, 360]
 * @param s [0, 1]
 * @param v [0, 1]
 * @returns RGB
 * @example
 * const hsvColor: HSVColor = { h: 159, s: 1.0, v: 0.74 };
 * const rgbColor: RGBColor = hsvToRgb(hsvColor);
 * console.log(rgbColor); // 输出：{ r: 0, g: 189, b: 123 }
 */
export function hsvToRgb(h, s, v) {
	const hue = h / 60;
	const saturation = isThresholdValue(s);
	const value = isThresholdValue(v);

	const chroma = value * saturation;
	const x = chroma * (1 - Math.abs((hue % 2) - 1));
	const m = value - chroma;

	let r = 0;
	let g = 0;
	let b = 0;

	if (hue >= 0 && hue < 1) {
		r = chroma;
		g = x;
		b = 0;
	} else if (hue >= 1 && hue < 2) {
		r = x;
		g = chroma;
		b = 0;
	} else if (hue >= 2 && hue < 3) {
		r = 0;
		g = chroma;
		b = x;
	} else if (hue >= 3 && hue < 4) {
		r = 0;
		g = x;
		b = chroma;
	} else if (hue >= 4 && hue < 5) {
		r = x;
		g = 0;
		b = chroma;
	} else if (hue >= 5 && hue < 6) {
		r = chroma;
		g = 0;
		b = x;
	}

	return {
		r: Math.round((r + m) * 255),
		g: Math.round((g + m) * 255),
		b: Math.round((b + m) * 255),
	};
};

/**
 * HSL颜色值转换为RGB颜色值
 * @param h [0, 360]
 * @param s [0, 1]
 * @param l [0, 1]
 * @returns RGB
 * @example
 * const hslColor: HSLColor = { h: 0, s: 1, l: 0.5 };
 * const rgbColor: RGBColor = hslToRgb(hslColor);
 * console.log(rgbColor); // 输出：{ r: 255, g: 0, b: 0 }
 */
export function hslToRgb(h, s, l) {
	let rgb = { r: 0, g: 0, b: 0 };

	const hue = h / 360;
	const saturation = isThresholdValue(s);
	const lightness = isThresholdValue(l);

	// 计算相关值
	const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
	const huePrime = hue * 6;
	const x = chroma * (1 - Math.abs((huePrime % 2) - 1));
	const m = lightness - chroma / 2;

	// 初始化 RGB 值
	let r = 0;
	let g = 0;
	let b = 0;

	// 根据 huePrime 计算 RGB 值
	if (huePrime >= 0 && huePrime < 1) {
		r = chroma;
		g = x;
	} else if (huePrime >= 1 && huePrime < 2) {
		r = x;
		g = chroma;
	} else if (huePrime >= 2 && huePrime < 3) {
		g = chroma;
		b = x;
	} else if (huePrime >= 3 && huePrime < 4) {
		g = x;
		b = chroma;
	} else if (huePrime >= 4 && huePrime < 5) {
		r = x;
		b = chroma;
	} else if (huePrime >= 5 && huePrime < 6) {
		r = chroma;
		b = x;
	}

	// 将 RGB 值转换为 0 到 255 的范围值
	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	rgb.r = r;
	rgb.g = g;
	rgb.b = b;

	// 返回 RGB 颜色值
	return rgb;
};

/**
 * HEX 十六进制颜色值转换为 RGB 颜色值
 * @param hex HEX十六进制颜色值
 * @returns RGB
 * @example
 * const hexColor = '#ff5733';
 * const rgbColor = hexToRgb(hexColor);
 * console.log(rgbColor); // 输出：{ r: 255, g: 87, b: 51 }
 */
export function hexToRgb(hex) {
	// 检查输入的十六进制颜色值是否有效
	const hexRegex = /^#?([a-fA-F0-9]{6})$/;
	if (!hexRegex.test(hex)) {
		throw new Error('【color:hexToRgb】hex颜色值格式错误');
	}

	// 去除 '#' 字符
	const cleanHex = hex.replace('#', '');

	// 将十六进制颜色值转换为十进制
	const r = parseInt(cleanHex.slice(0, 2), 16);
	const g = parseInt(cleanHex.slice(2, 4), 16);
	const b = parseInt(cleanHex.slice(4, 6), 16);

	const rgb = {
		r: r,
		g: g,
		b: b
	};

	return rgb;
};

/**
 * 获取 RGB 中单个值中对应的 HEX 颜色值
 * @param value RGB中的单个值，即r/g/b中的某个值
 * @returns string
 */
function rgbToHexValue(value) {
	return value.toString(16).padStart(2, '0');
};

/**
 * RGB 颜色值转为 HEX 十六进制颜色值
 * @param r 红色
 * @param g 绿色
 * @param b 蓝色
 * @returns string
 * @example 
 * const rgbColor = { r: 255, g: 87, b: 51 };
 * const hexColor = rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b);
 * console.log(hexColor); // 输出：#ff5733
 */
export function rgbToHex(r, g, b) {
	// 将 RGB 值转换为 HEX 十六进制颜色值
	const hexR = rgbToHexValue(r);
	const hexG = rgbToHexValue(g);
	const hexB = rgbToHexValue(b);

	const hexColor = `#${hexR}${hexG}${hexB}`;

	return hexColor.toUpperCase();
};

/**
 * HSL 颜色值转为 HEX 十六进制颜色值
 * @param h hue色相，0-360范围之间
 * @param s saturation饱和度，0-1之间
 * @param l lightness亮度，0-1之间
 * @returns string
 * @example
 * const hslColor = { h: 251, s: 0.5, l: 0.3 };
 * const hexColor = hslToHex(hslColor.h, hslColor.s, hslColor.l);
 * console.log(hexColor); // 输出：#342673
 */
export function hslToHex(h, s, l) {
	const { r, g, b } = hslToRgb(h, s, l);

	return rgbToHex(r, g, b).toUpperCase();
};

/**
 * HSV 颜色值转为 HEX 十六进制颜色值
 * @param h hue色相，0-360范围之间
 * @param s saturation饱和度，0-1之间
 * @param v value亮度，0-1之间
 * @returns string
 * @example
 * const hsvColor = { h: 159, s: 1.0, v: 0.74 };
 * const hexColor = hsvToHex(hsvColor.h, hsvColor.s, hsvColor.v);
 * console.log(hexColor); // 输出 #0ac785
 */
export function hsvToHex(h, s, v) {
	const { r, g, b } = hsvToRgb(h, s, v);
	return rgbToHex(r, g, b).toUpperCase();
};

/**
 * HEX 颜色值转为 HSV 十六进制颜色值
 * @param hex hex颜色值
 * @returns HSV
 * @example
 * const hexColor = '#F76965';
 * const hsvColor = hexToHsv(hexColor);
 * console.log(hsvColor); // 输出：{h: 1.6438356164383563, s: 0.5910931174089068, v: 0.9686274509803922}
 */
export function hexToHsv(hex) {
	const { r, g, b } = hexToRgb(hex);
	return rgbToHsv(r, g, b);
};