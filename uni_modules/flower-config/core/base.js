/**
 * 单位转化
 */
const unitConversion = (e) => {
	if (typeof e == "number") {return `${e}rpx`} else if (typeof e == "string") {if (e.indexOf('px') != -1) {return `${e}`} else {return `${e}rpx`};};
}
export {
	unitConversion
}