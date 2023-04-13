import pagesJson from "/pages.json";
	
// 全局配置
const globalStyle = __uniConfig.globalStyle;
const uniRoutes = __uniRoutes;
// 页面配置
let pages = {};

for (let i in __uniRoutes) {
	pages[__uniRoutes[i].meta.route] = __uniRoutes[i];
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
	return pages[getCurrentPageRoute()].meta.navigationBar.titleText || globalStyle.navigationBar.titleText || uni.getSystemInfoSync().appName;
}

/**
 * 获取当前页面背景色
 */
const getCurrentPageBackground = () => {
	return {backgroundColor:pages[getCurrentPageRoute()].meta.backgroundColor || globalStyle.backgroundColor || "#f8f8f8"}
}

/**
 * 判断是否为自定义导航
 */
const getIsCustomNav = () => {
	if (pages[getCurrentPageRoute()].meta.navigationBar.style == 'custom') {
		return true;
	} else if (globalStyle.navigationBar.style == 'custom') {
		return true;
	} else {
		return false;
	}
}

export {
	getCurrentPageRoute,
	getCurrentPageTitle,
	getIsCustomNav,
	globalStyle,
	getCurrentPageBackground
}
