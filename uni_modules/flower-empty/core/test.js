
/**
 * @param {Object} svg svg数据参数
 * 
 * 手动修改颜色配置
 * 裤子： funTrousersColor
 * 鞋子： funShoesColor
 * 物品： funHairColor => funItemColor
 * 压缩svg网址：http://tool.mkblog.cn/svgo/
 */

function test(svg) {
	const encoded = svg
		.replace(/#5792f0/g, "${funThemeColor(1)}")
		.replace(/#8ab4f7/g, "${funThemeColor(0.6)}")
		.replace(/#bfd4fa/g, "${funThemeColor(0.5)}")
		.replace(/#ccdcf6/g, "${funThemeColor(0.4)}")
		.replace(/#cfdffa/g, "${funThemeColor(0.3)}")
		.replace(/#eaf0fc/g, "${funThemeColor(0.2)}")
		.replace(/#f9ab21/g, "${funClothesColor(1)}")
		.replace(/#fee127/g, "${funClothesColor(0.6)}")
		.replace(/#483029/g, "${funHairColor()}")
		.replace(/#fee0bc/g, "${funSkinColor(0.8)}")
		.replace(/#fff2df/g, "${funSkinColor(0.3)}")
		.replace(/#ffdec4/g, "${funSkinColor(0.7)}")
		.replace(/#ffcda5/g, "${funSkinColor(1)}")
		.replace(/#ffe8d1/g, "${funSkinColor(0.6)}")
		.replace(/#ffffff/g, "${funElementColor()}")
		.replace(/#fafafa/g, "${funThemeColor(0.3)}");
	console.log(encoded)
};


export {
	test
}