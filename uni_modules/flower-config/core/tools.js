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
	return uniDistanceConfig(uniDistanceType(e), 'margin');
};

const uniPadding = (e) => {
	return uniDistanceConfig(uniDistanceType(e), 'padding');
};

export {
	unitConversion,
	uniMargin,
	uniPadding
}