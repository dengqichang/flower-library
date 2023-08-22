import luchRequest from "../plug-in/luch-request";

// 读取开发者配置文件
let developerConfigHttp : {
	development : string,
	production : string
};
try { developerConfigHttp = import.meta.globEager('/flower.config.js')['/flower.config.js'].default.http; } catch (e) { };
try { developerConfigHttp = import.meta.globEager('/flower.config.ts')['/flower.config.ts'].default.http; } catch (e) { };

const http = new luchRequest();

http.setConfig((config) => {
	/* config 为默认全局配置*/
	/**
	 * APP-PLUS 、H5、未测试兼容平台
	 */
	// #ifndef MP-WEIXIN | MP-ALIPAY | MP-QQ
	if (process.env.NODE_ENV === 'development') {
		config.baseURL = developerConfigHttp.development;
	} else {
		config.baseURL = developerConfigHttp.production;
	};
	// #endif
	/**
	 * 微信小程序、支付宝小程序、QQ小程序
	 */
	// #ifdef MP-WEIXIN | MP-ALIPAY | MP-QQ
	const envVersion = uni.getAccountInfoSync().miniProgram.envVersion;
	/* 'develop'开发环境，'trial'体验环境，'release'正式环境 */
	if (envVersion !== 'release') {
		config.baseURL = developerConfigHttp.development;
	} else {
		config.baseURL = developerConfigHttp.production;
	};
	// #endif
	return config
});

export default http;