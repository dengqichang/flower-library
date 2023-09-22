/**
 * false 开发环境
 * true 正式环境
 */

let env = false;

/**
 * APP-PLUS 、H5、未测试兼容平台
 */
// #ifndef MP-WEIXIN | MP-ALIPAY | MP-QQ
if (process.env.NODE_ENV === 'development') {
	env = false;
} else {
	env = true;
};
// #endif
/**
 * 微信小程序、支付宝小程序、QQ小程序
 */
// #ifdef MP-WEIXIN | MP-ALIPAY | MP-QQ
const envVersion = uni.getAccountInfoSync().miniProgram.envVersion;
/* 'develop'开发环境，'trial'体验环境，'release'正式环境 */
if (envVersion !== 'release') {
	env = false;
} else {
	env = true;
};
// #endif

export default env;