const pageJson = import.meta.globEager('/pages.json')['/pages.json'].default;

// 全局配置
const globalStyle = pageJson.globalStyle;

// 页面配置
let pages = {};

// 未分包
for (let i in pageJson.pages) {
	pages[pageJson.pages[i].path] = pageJson.pages[i].style;
}
// 分包
for (let i in pageJson.subPackages) {
	for (let ii in pageJson.subPackages[i].pages) {
		pages[`${pageJson.subPackages[i].root}/${pageJson.subPackages[i].pages[ii].path}`] = pageJson.subPackages[i].pages[ii].style;
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
	return pages[getCurrentPageRoute()].navigationBarTitleText;
}

/**
 * 获取当前页面背景色
 */
const getCurrentPageBackground = () => {
	return {backgroundColor:pages[getCurrentPageRoute()].backgroundColor || globalStyle.backgroundColor || "#f8f8f8"}
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

export {
	getCurrentPageRoute,
	getCurrentPageTitle,
	getIsCustomNav,
	globalStyle,
	getCurrentPageBackground
}