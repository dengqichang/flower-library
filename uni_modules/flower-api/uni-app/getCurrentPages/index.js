/**
 * 获取当前页面路由
 */
export function getCurrentPagesRoute() {
	const _pages = getCurrentPages();
	return _pages[_pages.length - 1].route;
}