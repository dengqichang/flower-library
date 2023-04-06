import {
	generate
} from "@/uni_modules/flower-config";
const svgToUrl = (svgData, primaryColor, clothingColor, otherColor) => {
	const primary = generate(primaryColor)
	const clothing = generate(clothingColor)

	var encoded = svgData
		.replace(/<!--(.*)-->/g, "")
		.replace(/[\r\n]/g, " ")
		.replace(/#5792f0/g, primary[5])
		.replace(/#8ab4f7/g, primary[4])
		.replace(/#bfd4fa/g, primary[2])
		.replace(/#cfdffa/g, primary[2])
		.replace(/#ccdcf6/g, primary[1])
		.replace(/#eaf0fc/g, primary[0])
		.replace(/#f9ab21/g, clothing[5])
		.replace(/#fee127/g, clothing[2])
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
}

export {
	svgToUrl
}