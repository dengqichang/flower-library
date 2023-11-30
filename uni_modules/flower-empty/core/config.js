let emptyValue = {
	// 主题颜色
	themeColor: "#296BEF",
	// 头发颜色
	hairColor: '#483029',
	// 衣服颜色
	clothesColor: "#EDA20C",
	// 裤子颜色
	trousersColor: "#296BEF",
	// 鞋子颜色
	shoesColor: "#296BEF",
	// 物品颜色
	itemColor: "#483029",
	// 人物肤色
	skinColor: "#ffcda5",
	// 元素颜色
	elementColor: "#ffffff"
};

/**
 * 参数合并
 */
function initEmptyConfig(config) {
	// 当主题色不为空时，将裤子和鞋子的颜色同步
	if(config.themeColor !== undefined){
		// 当裤子颜色为空时，默认主题色
		if(config.trousersColor == undefined){config.trousersColor = config.themeColor};
		// 当鞋子颜色为空时，默认主题色
		if(config.shoesColor == undefined){config.shoesColor = config.themeColor};
	};
	emptyValue = Object.assign(emptyValue, config);
	return emptyValue;
};

/**
 * 颜色解析
 */
/**
 * 主题色渐变混色
 * @param c1 混色1
 * @param c2 混色2
 * @param weight 权重 0~1 之间
 * @returns hex规定颜色值为十六进制值颜色
 */
function generateMixedColor(c1, c2, weight) {
	weight = Math.max(Math.min(weight, 1), 0);
	const r1 = parseInt(c1.substring(1, 3), 16);
	const g1 = parseInt(c1.substring(3, 5), 16);
	const b1 = parseInt(c1.substring(5, 7), 16);
	const r2 = parseInt(c2.substring(1, 3), 16);
	const g2 = parseInt(c2.substring(3, 5), 16);
	const b2 = parseInt(c2.substring(5, 7), 16);
	const r = Math.round(r1 * (1 - weight) + r2 * weight);
	const g = Math.round(g1 * (1 - weight) + g2 * weight);
	const b = Math.round(b1 * (1 - weight) + b2 * weight);
	return `rgb(${r}, ${g}, ${b})`;
};

/**
 * 主题颜色
 */
function funThemeColor(coefficient = 1) {
	return generateMixedColor("#ffffff", `${emptyValue.themeColor}`, coefficient);
};

/**
 * 头发颜色
 */
function funHairColor() {
	return `${emptyValue.hairColor}`;
};

/**
 * 衣服颜色
 */
function funClothesColor(coefficient = 1) {
	return generateMixedColor("#ffffff", `${emptyValue.clothesColor}`, coefficient);
};

/**
 * 裤子颜色
 */
function funTrousersColor(coefficient = 1) {
	return generateMixedColor("#ffffff", `${emptyValue.trousersColor}`, coefficient);
};

/**
 * 鞋子颜色
 */
function funShoesColor(coefficient = 1) {
	return generateMixedColor("#ffffff", `${emptyValue.shoesColor}`, coefficient);
};

/**
 * 人物肤色
 */
function funSkinColor(coefficient = 1) {
	return generateMixedColor("#ffffff", `${emptyValue.skinColor}`, coefficient);
};

/**
 * 元素颜色
 */
function funElementColor() {
	return `${emptyValue.elementColor}`;
};

/**
 * 元素颜色
 */
function funItemColor() {
	return `${emptyValue.itemColor}`;
};

export {
	funThemeColor,
	funHairColor,
	funClothesColor,
	funTrousersColor,
	funShoesColor,
	funSkinColor,
	funItemColor,
	funElementColor,
	initEmptyConfig
}