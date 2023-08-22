/**
 * 保留当前页面，跳转到应用内的某个页面
 * @param {String} url 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。
 * @param {String} animationType 窗口显示的动画效果
 * @param {Number} animationDuration 窗口动画持续时间，单位为 ms
 */
const navigateTo = (url : string, animationType : 'slide-in-right' | 'slide-in-left' | 'slide-in-top' | 'slide-in-bottom' | 'pop-in' | 'fade-in' | 'zoom-out' | 'zoom-fade-out' | 'none' = 'pop-in', animationDuration:number = 300) => {
	if (!!url) {
		uni.navigateTo({
			url: url,
			animationType: animationType,
			animationDuration: animationDuration
		})
	}
};
/**
 * 关闭当前页面，跳转到应用内的某个页面
 * @param {String} url 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。
 */
const redirectTo = (url : string) => {
	if (!!url) {
		uni.redirectTo({
			url: url
		})
	}
};
/**
 * 关闭所有页面，打开到应用内的某个页面
 * @param {String} url 需要跳转的应用内页面路径 , 路径后可以带参数。如果跳转的页面路径是 tabBar 页面则不能带参数。
 */
const reLaunch = (url : string) => {
	if (!!url) {
		uni.reLaunch({
			url: url
		})
	}
};
/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
 * @param {String} url 需要跳转的 tabBar 页面的路径（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数
 */
const switchTab = (url : string) => {
	if (!!url) {
		uni.switchTab({
			url: url
		})
	}
};
/**
 * 关闭当前页面，返回上一页面或多级页面。
 * @param {Number} delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 * @param {String} animationType 窗口关闭的动画效果
 * @param {Number} animationDuration 窗口关闭动画的持续时间，单位为 ms
 */

const navigateBack = (delta : number = 1, animationType : 'slide-out-right' | 'slide-out-left' | 'slide-out-top' | 'slide-out-bottom' | 'pop-out' | 'fade-out' | 'zoom-in' | 'zoom-fade-in' | 'none' = 'pop-out', animationDuration : number = 300) => {
	uni.navigateBack({
		delta: delta,
		animationType: animationType,
		animationDuration: animationDuration
	})
};

export {
	navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack
}