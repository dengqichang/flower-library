// 页面
let pageStoreMap = {};
// webviewContext
let webviewContextStoreMap = {};
// 临时存储
let tempStoreMap = {};

function uuid(length) {
	let uuid = "";
	let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	for (let i = 0; i < length; i++) {
		uuid += chars[Math.floor(Math.random() * chars.length)];
	};
	return uuid
};

function getCurrentPagesRoute() {
	const _pages = getCurrentPages();
	return _pages[_pages.length - 1].route;
}

export {
	pageStoreMap,
	tempStoreMap,
	webviewContextStoreMap,
	uuid,
	getCurrentPagesRoute
}