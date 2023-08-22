/**
 * 作者：邓琪昌
 * 创建日期：2023年8月10日
 * 描述：flower-library 国际化
 */
import { defaultLanguage } from "./mergeConfiguration";
// 简体中文
import zh_Hans from "../language/zh_Hans";
// 繁体中文
import zh_Hant from "../language/zh_Hant";
//英文
import en from "../language/en";

/**
 * 设置语言包
 */
const componentLanguagePackage = {
	"zh_Hans": zh_Hans,
	"zh_Hant": zh_Hant,
	"en": en
};

/**
 * 设置语言包
 */
const setLanguage = (languageCode : "zh_Hans" | "zh_Hant" | "en" = uni.getStorageSync("flower-library-language") || defaultLanguage.languageCode || "zh_Hans") : void => {
	// 内部组件国际化
	if (componentLanguagePackage[languageCode]) {
		defaultLanguage.currentComponentLanguagePackage = componentLanguagePackage[languageCode];
		uni.setStorageSync("flower-library-language", languageCode);
	};
	// 外部自定义国际化
	if (defaultLanguage.languagePackage[languageCode]) {
		defaultLanguage.currentLanguagePackage = defaultLanguage.languagePackage[languageCode];
	};
};
/**
 * 获取自定义语言包
 */
const getLanguage = (param : string) : string => {
	return defaultLanguage.currentLanguagePackage[param]
};
/**
 * 获取组件语言包
 */
const getComponentLanguage = (param : string) : string => {
	return defaultLanguage.currentComponentLanguagePackage[param]
};
/**
 * 获取已设置的语言
 */
const getLanguageCode = () : string => {
	return uni.getStorageSync("flower-library-language") || defaultLanguage.languageCode || "zh_Hans";
}

export {
	getLanguage,
	setLanguage,
	getComponentLanguage,
	getLanguageCode
}