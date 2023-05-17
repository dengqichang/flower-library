/**
 * 为了解决HBuilder X 编译微信小程序时报 "​Generated an empty chunk"问题
 * 这里先暂时调用系统api处理此问题，后续有更佳方案再做调整
 */
uni.getSystemInfoSync();