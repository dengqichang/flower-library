/**
 * 单位转化
 */
const uniUnitConversion = (e) => {
	if (typeof e == "number") {return `${e}rpx`} else if (typeof e == "string") {if (e.indexOf('px') != -1) {return `${e}`} else {return `${e}rpx`};};
}
export {
	uniUnitConversion
}