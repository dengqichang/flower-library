/**
 * 作者：邓琪昌
 * 创建日期：2023年8月10日
 * 描述：flower-library 单位转化
 */
import { defaultInternalSetup } from "./mergeConfiguration"
/**
 * 单位转化，number时为rpx，string自带单位
 * @param {*} parameter  转化值
 * @param {Boolean} isIncrease 是否动态增长
 */
const unitConversion = (parameter : any, isIncrease : boolean = false) => {
	if (isNaN(parameter)) {
		return `${parameter}`;
	} else {
		if (isIncrease) {
			return `${Number(parameter) + Number(defaultInternalSetup.increase)}rpx`;
		} else {
			return `${Number(parameter)}rpx`;
		};
	};
};
/**
 * 距离参数分割转化
 * @param {String,Array} params 需要分割的内外边距参数
 */
const uniDistanceType = (params : string | any[]) => {
	let distanceArray : any[];
	switch (typeof params) {
		case "string":
			if (params.indexOf(',') != -1) {
				distanceArray = params.split(",");
			} else {
				distanceArray = params.split(" ");
			};
			break;
		case "object":
			distanceArray = params;
			break;
		default:
			break;
	};
	return distanceArray;
};

/**
 * 距离样式转化
 * @param {String,Array} s1 内外边距参数分割重组的数组
 * @param {String} s2 [padding|margin] 内外边距名
 */
const uniDistanceConfig = (s1 : any[], s2 : string = 'margin') => {
	let style = {};
	switch (s1.length) {
		case 1:
			style[`${s2}`] = unitConversion(s1[0]);
			break;
		case 2:
			style[`${s2}Top`] = unitConversion(s1[0]);style[`${s2}Right`] = unitConversion(s1[1]);style[`${s2}Bottom`] = unitConversion(s1[0]);style[`${s2}Left`] = unitConversion(s1[1]);
			break;
		case 3:
			style[`${s2}Top`] = unitConversion(s1[0]);style[`${s2}Right`] = unitConversion(s1[1]);style[`${s2}Bottom`] = unitConversion(s1[2]);style[`${s2}Left`] = unitConversion(s1[1]);
			break;
		case 4:
			style[`${s2}Top`] = unitConversion(s1[0]);style[`${s2}Right`] = unitConversion(s1[1]);style[`${s2}Bottom`] = unitConversion(s1[2]);style[`${s2}Left`] = unitConversion(s1[3]);
			break;
		default:
			break;
	};
	return style;
};

/**
 * 圆角样式转化
 * @param {String,Array} s1 内外边距参数分割重组的数组
 * @param {String} s2 [padding|margin] 内外边距名
 */
const uniBorderRadiusConfig = (s1 : any[]) => {
	let style = {};
	switch (s1.length) {
		case 1:
			style[`borderRadius`] = unitConversion(s1[0]);
			break;
		case 2:
			style[`borderTopLeftRadius`] = unitConversion(s1[0]);style[`borderTopRightRadius`] = unitConversion(s1[1]);style[`borderBottomRightRadius`] = unitConversion(s1[0]);style[`borderBottomLeftRadius`] = unitConversion(s1[1]);
			break;
		case 3:
			style[`borderTopLeftRadius`] = unitConversion(s1[0]);style[`borderTopRightRadius`] = unitConversion(s1[1]);style[`borderBottomRightRadius`] = unitConversion(s1[2]);style[`borderBottomLeftRadius`] = unitConversion(s1[1]);
			break;
		case 4:
			style[`borderTopLeftRadius`] = unitConversion(s1[0]);style[`borderTopRightRadius`] = unitConversion(s1[1]);style[`borderBottomRightRadius`] = unitConversion(s1[2]);style[`borderBottomLeftRadius`] = unitConversion(s1[3]);
			break;
		default:
			break;
	};
	return style;
};

/**
 * 外边距
 * @param {String,Array} margin 外边距
 */
const uniMargin = (marginParams : string | any[]) => {
	if (!!marginParams) {
		return uniDistanceConfig(uniDistanceType(marginParams), 'margin');
	} else {
		return {
			margin: '0rpx'
		}
	}
};

/**
 * 内边距
 * @param {String,Array} padding 内边距
 */
const uniPadding = (paddingParams : string | any[]) => {
	if (!!paddingParams) {
		return uniDistanceConfig(uniDistanceType(paddingParams), 'padding');
	} else {
		return {
			padding: '0rpx'
		}
	}
};

/**
 * 圆角
 * @param {String,Array} padding 内边距
 */
const uniBorderRadius = (borderRadiusParams : string | any[]) => {
	if (!!borderRadiusParams) {
		return uniBorderRadiusConfig(uniDistanceType(borderRadiusParams));
	} else {
		return {
			borderRadius: '0rpx'
		}
	}
};

export {
	uniMargin,
	uniPadding,
	uniBorderRadius,
	unitConversion
}