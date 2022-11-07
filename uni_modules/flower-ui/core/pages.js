const globEagerPagesJson =
	import.meta.globEager('/pages.json');
const pageJson = globEagerPagesJson['/pages.json'];

// 全局配置
const globalStyle = pageJson.globalStyle
// 页面配置
let pages = {};
// 未分包
for (let i in pageJson.pages) {
	pages[pageJson.pages[i].path] = pageJson.pages[i].style;
}
// 分包
for (let i in pageJson.subPackages) {
	for (let ii in pageJson.subPackages[i].pages) {
		pages[`${pageJson.subPackages[i].root}/${pageJson.subPackages[i].pages[ii].path}`] = pageJson.subPackages[i]
			.pages[ii].style
	}
}

/**
 * 获取当前页面路由
 */
const getCurrentPageRoute = () => {
	let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
	let curRoute = routes[routes.length - 1].route //获取当前页面路由
	return curRoute
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
	getIsCustomNav,
	globalStyle
}
