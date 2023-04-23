import {
	reactive
} from "vue";


if (!uni.flowerApiStore) {
	uni.flowerApiStore = {};
};

let store = reactive(uni.flowerApiStore);

/**
 * 获取当前页面路由
 */
const getCurrentPageRoute = (pages = 1) => {
	let routes = getCurrentPages();
	let curRoute = routes[routes.length - pages].route;
	return curRoute;
}

// 当前页面获取获取参数
const getCurrentPageParams = () => {
	return store[getCurrentPageRoute()];
};
// 传递参数至上一页
const setPreviousPageParams = (params) => {
	store[getCurrentPageRoute(2)] = Object.assign(params, store[getCurrentPageRoute(2)]);
};
// 清空当前页面参数
const cleanCurrentPageParams = () => {
	store[getCurrentPageRoute()] = {};
};
// 临时存储参数
const setTempStorage = (name, params) => {
	store[name] = params;
};
// 获取临时存储参数
const getTempStorage = (name) => {
	return store[name];
};

export {
	getCurrentPageParams,
	setPreviousPageParams,
	cleanCurrentPageParams,
	setTempStorage,
	getTempStorage
}