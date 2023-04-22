import pagesJson from "@/pages.json";
const pagesJs = import.meta.globEager('@/pages.js')['/pages.js'];

if (!!pagesJs) {
	Object.assign(pagesJson, pagesJs.default)
};
// 全局配置
const globalStyle = pagesJson.globalStyle;
// 页面配置
let pages = {};
// 未分包
for (let i in pagesJson.pages) {
	pages[pagesJson.pages[i].path] = pagesJson.pages[i].style;
}
// 分包
for (let i in pagesJson.subPackages) {
	for (let ii in pagesJson.subPackages[i].pages) {
		pages[`${pagesJson.subPackages[i].root}/${pagesJson.subPackages[i].pages[ii].path}`] = pagesJson.subPackages[i]
			.pages[ii].style;
	}
};
/**
 * 获取当前页面路由
 */
const getCurrentPageRoute = () => {
	let routes = getCurrentPages();
	let curRoute = routes[routes.length - 1].route;
	return curRoute;
}

/**
 * 获取当前页面标题
 */
const getCurrentPageTitle = () => {
	return pages[getCurrentPageRoute()].navigationBarTitleText || globalStyle.navigationBarTitleText || uni
		.getSystemInfoSync().appName;
}

/**
 * 获取当前页面背景色
 */
const getCurrentPageBackground = () => {
	return {
		backgroundColor: pages[getCurrentPageRoute()].backgroundColor || globalStyle.backgroundColor || "#f8f8f8"
	}
}

/**
 * 判断是否为自定义导航
 */
const getIsCustomNav = () => {
	if (pages[getCurrentPageRoute()].navigationStyle == 'custom') {
		return true;
	} else if (globalStyle.navigationStyle == 'custom') {
		return true;
	} else {
		return false;
	}
}

/**
 * 判断是否为开启了下拉刷新
 */
const getIsPullDownRefresh = () => {
	return pages[getCurrentPageRoute()].enablePullDownRefresh ? true : false
}

export {
	getCurrentPageRoute,
	getCurrentPageTitle,
	getIsCustomNav,
	globalStyle,
	getCurrentPageBackground,
	getIsPullDownRefresh
}