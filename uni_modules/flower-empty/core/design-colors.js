/**
 * 主题色渐变混色
 * @param c1 混色1
 * @param c2 混色2
 * @param weight 权重 0~1 之间
 * @returns hex规定颜色值为十六进制值颜色
 */
const generateMixedColor = (c1, c2, weight) => {
	weight = Math.max(Math.min(weight, 1), 0);
	const r1 = parseInt(c1.substring(1, 3), 16);
	const g1 = parseInt(c1.substring(3, 5), 16);
	const b1 = parseInt(c1.substring(5, 7), 16);
	const r2 = parseInt(c2.substring(1, 3), 16);
	const g2 = parseInt(c2.substring(3, 5), 16);
	const b2 = parseInt(c2.substring(5, 7), 16);
	let r = Math.round(r1 * (1 - weight) + r2 * weight);
	let g = Math.round(g1 * (1 - weight) + g2 * weight);
	let b = Math.round(b1 * (1 - weight) + b2 * weight);
	r = ('0' + (r || 0).toString(16)).slice(-2);
	g = ('0' + (g || 0).toString(16)).slice(-2);
	b = ('0' + (b || 0).toString(16)).slice(-2);
	return '#' + r + g + b;
};

const weightAssemble = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

const generate = (color) => {
	let colorsAssemble = [];
	for (let i in weightAssemble) {
		colorsAssemble.push(generateMixedColor('#ffffff', color, weightAssemble[i]))
	};
	return colorsAssemble;
};

const svgToUrl = (svgData, primaryColor = "#296BEF", clothingColor = "#EDA20C", otherColor = "#141414") => {
	const primary = generate(primaryColor);
	const clothing = generate(clothingColor);
	const encoded = svgData
		.replace(/<!--(.*)-->/g, "")
		.replace(/[\r\n]/g, " ")
		.replace(/#5792f0/g, primary[9])
		.replace(/#8ab4f7/g, primary[6])
		.replace(/#bfd4fa/g, primary[4])
		.replace(/#cfdffa/g, primary[4])
		.replace(/#ccdcf6/g, primary[3])
		.replace(/#eaf0fc/g, primary[2])
		.replace(/#f9ab21/g, clothing[9])
		.replace(/#fee127/g, clothing[6])
		.replace(/#483029/g, otherColor)
		.replace(/"/g, `'`)
		.replace(/%/g, "%25")
		.replace(/&/g, "%26")
		.replace(/#/g, "%23")
		.replace(/{/g, "%7B")
		.replace(/}/g, "%7D")
		.replace(/</g, "%3C")
		.replace(/>/g, "%3E");
	return '"' + `data:image/svg+xml,${encoded}` + '"';
};

export {
	generate,
	svgToUrl
}