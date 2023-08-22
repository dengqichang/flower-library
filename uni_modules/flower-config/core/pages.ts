/**
 * 作者：邓琪昌
 * 创建日期：2023年8月10日
 * 描述：flower-library 获取pages.json进行处理
 */
import pagesJson from "@/pages.json";
import { globalStyle, pages } from "./pagesType";
import { getColors } from "./theme"

// pages.json 拆分
let pagesJs : pages;
try { pagesJs = import.meta.globEager('/pages.js')['/pages.js'].default; } catch (e) { };
try { pagesJs = import.meta.globEager('/pages.ts')['/pages.ts'].default; } catch (e) { };
// 最新 pages.json
const pagesMerge : pages = Object.assign(pagesJson, pagesJs);
// 全局配置
const globalStyle : globalStyle = pagesMerge.globalStyle || {};
// 页面配置
let pagesCombination : object = {};
// 未分包
for (let i in pagesMerge.pages) { pagesCombination[pagesMerge.pages[i].path] = pagesMerge.pages[i].style; };
// 分包
for (let i in pagesMerge.subPackages) { for (let ii in pagesMerge.subPackages[i].pages) { pagesCombination[`${pagesMerge.subPackages[i].root}/${pagesMerge.subPackages[i].pages[ii].path}`] = pagesMerge.subPackages[i].pages[ii].style; } };

/**
 * 获取当前页面路由
 * @param {number} pages 获取页面路由，当前页面为1，上一个页面为2，以此类推
 */
const getCurrentPageRoute = (pages : number = 1) : string => {
	let routes = getCurrentPages();
	let curRoute = routes[routes.length - pages].route;
	return curRoute;
};

/**
 * 获取当前页面标题
 */
const getCurrentPageTitle = () : string => {
	return pagesCombination[getCurrentPageRoute()].navigationBarTitleText || globalStyle.navigationBarTitleText || uni.getSystemInfoSync().appName;
};

/**
 * 获取当前页面背景色
 * @param {string} color 颜色值
 */
const getCurrentPageBackground = (color ?: string) : object => {
	if (!!color) {
		return { backgroundColor: getColors(color) };
	} else {
		return { backgroundColor: pagesCombination[getCurrentPageRoute()].backgroundColor || globalStyle.backgroundColor || "#f8f8f8" }
	}
};

/**
 * 判断是否为自定义导航
 */
const getIsCustomNav = () : boolean => {
	if (pagesCombination[getCurrentPageRoute()].navigationStyle == 'custom') {
		return true;
	} else if (globalStyle.navigationStyle == 'custom') {
		return true;
	} else {
		return false;
	}
};

/**
 * 判断是否为开启了下拉刷新
 */
const getIsPullDownRefresh = () : boolean => {
	return pagesCombination[getCurrentPageRoute()].enablePullDownRefresh ? true : false
};

export {
	getCurrentPageRoute,
	getCurrentPageTitle,
	getIsCustomNav,
	globalStyle,
	getCurrentPageBackground,
	getIsPullDownRefresh
};