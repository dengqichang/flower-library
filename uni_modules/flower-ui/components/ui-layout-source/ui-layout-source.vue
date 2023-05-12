<!-- 页面布局 -->
<template>
	<view class="_ui-layout" :style="getCurrentPageBackground()">
		<!-- 背景图 -->
		<image v-if="props.backdrop" class="_ui-layout__backdrop" mode="scaleToFill" :src="props.backdrop" />
		<!-- 顶栏容器 -->
		<view class="_ui-layout__header">
			<!-- 导航容器 -->
			<slot name="nav" />
			<!-- 顶部容器 -->
			<slot name="header" />
		</view>
		<!-- 内容容器 -->
		<view class="_ui-layout__main">
			<!-- 不存在数据时网络状态 -->
			<ui-empty-network offsetTop="20vh" offsetBottom="20vh" v-if="networkPage">
				<!-- 跳转解决网络问题页面，待实现 -->

			</ui-empty-network>
			<!-- 页面加载中 -->
			<ui-loading-logo offsetTop="30vh" v-else-if="loadingState" />
			<!-- 内容容器 -->
			<view v-else>
				<slot />
				<!-- 为空状态页面 -->
				<view v-if="emptyState">
					<ui-empty-data offsetTop="20vh" offsetBottom="20vh" v-if="slotEmpty" />
					<slot v-else name="empty" />
				</view>
				<ui-load-more v-else-if="loadmore && network.networkConnected" :status="sourceWorkers.loadMoreStatus" />
			</view>
		</view>
		<!-- 自定义标识牌 -->
		<slot name="signboard" />
		<!-- 默认标识牌 -->
		<image v-if="slotSignboard && props.signboard" class="_ui-layout__signboard" mode="widthFix"
			:src="props.signboard" />
		<!-- 其它容器 -->
		<slot name="other" />
		<!-- 底部容器 -->
		<view class="_ui-layout__footer">
			<!-- 存在数据时网络状态 -->
			<ui-network v-if="rowNetworkState" />
			<slot name="footer" />
		</view>
	</view>
</template>

<script setup>
	import {
		useSlots,
		ref,
		computed,
		watch
	} from "vue";
	import {
		onReachBottom,
		onPullDownRefresh
	} from "@dcloudio/uni-app";
	import {
		uiLayout,
		getColors,
		getIsCustomNav,
		getCurrentPageBackground,
		getIsPullDownRefresh
	} from "@/uni_modules/flower-config";
	import {
		network
	} from "@/uni_modules/flower-api";
	// 判断插槽是否存在内容
	const slotSignboard = !useSlots().signboard;
	const slotEmpty = !useSlots().empty;
	// 处理H5端兼容nav、header的slot内容高度
	const isNavTop = getIsCustomNav() ? '44px' : '0px';
	// 属性
	const props = defineProps({
		backdrop: {
			type: String,
			default: uiLayout.backdrop
		},
		signboard: {
			type: String,
			default: uiLayout.signboard
		},
		loading: {
			type: Boolean,
			default: uiLayout.loading
		},
		loadmore: {
			type: Boolean,
			default: uiLayout.loadmore
		},
		source: {
			type: [Array, Object, String],
			default: () => {
				return uiLayout.source
			}
		}
	});

	const emits = defineEmits(['sourceMethod']);

	// 数据状态
	const sourceWorkers = ref({
		isLoaded: false,
		isData: false,
		loading: props.source.length ? false : true,
		loadMoreStatus: "none",
		loadmorePage: 1,
		isRefresh: false
	});
	
	// 组件加载即执行
	emits("sourceMethod", {"onPullDownRefresh": true,"onReachBottom": false,"loadmorePage": sourceWorkers.value.loadmorePage});
	
	// 验证是否开启下拉刷新
	const isPullDownRefresh = getIsPullDownRefresh();

	watch(() => props.source, (newVal, oldVal) => {
		// 是否已加载
		sourceWorkers.value.isLoaded = true;
		// true ：存在数据，false：无数据
		sourceWorkers.value.isData = newVal.length ? true : false;
		// 已请求完成，关闭全屏加载
		sourceWorkers.value.loading = false;
		// 上拉加载更多
		if (sourceWorkers.value.loadMoreStatus != "none") {
			if (newVal.length >= oldVal.length) {
				sourceWorkers.value.loadMoreStatus = "nomore"
			} else {
				sourceWorkers.value.loadMoreStatus = "loadmore"
			};
		};
		// 上拉加载页数
		if (newVal.length > oldVal.length) {
			sourceWorkers.value.loadmorePage += 1;
		};
		// 拉下刷新重置页数
		if(sourceWorkers.value.isRefresh){
			sourceWorkers.value.loadmorePage += 1;
			sourceWorkers.value.isRefresh = !sourceWorkers.value.isRefresh;
		};
		// 关闭下拉刷新
		if (isPullDownRefresh) {
			uni.stopPullDownRefresh();
		};
	});
	// 全屏加载状态
	const loadingState = computed(() => {
		return sourceWorkers.value.loading && props.loading
	});
	// 当不存在数据时显示页面网络状态
	const networkPage = computed(() => {
		return !sourceWorkers.value.isData && !network.networkConnected
	});
	watch(() => networkPage.value, (newVal) => {
		if (!newVal) {
			sourceWorkers.value.loading = true;
			sourceWorkers.value.loadmorePage = 1;
			emits("sourceMethod", {"onPullDownRefresh": true,"onReachBottom": false,"loadmorePage": sourceWorkers.value.loadmorePage});
		};
	});
	// 存在已渲染数据时显示行网络状态
	const rowNetworkState = computed(() => {
		return sourceWorkers.value.isData && !network.networkConnected
	});
	// 为空页面
	const emptyState = computed(() => {
		return !sourceWorkers.value.isData && sourceWorkers.value.isLoaded
	});
	// 触发上拉加载
	onReachBottom(() => {
		sourceWorkers.value.loadMoreStatus = "loading";
		emits("sourceMethod", {"onPullDownRefresh": false,"onReachBottom": true,"loadmorePage": sourceWorkers.value.loadmorePage});
	});
	// 下拉刷新
	onPullDownRefresh(() => {
		sourceWorkers.value.isRefresh = true;
		sourceWorkers.value.loadmorePage = 1;
		emits("sourceMethod", {"onPullDownRefresh": true,"onReachBottom": false,"loadmorePage": sourceWorkers.value.loadmorePage});
	});
</script>

<style scoped>
	._ui-layout__backdrop {position: fixed;width: 100vw;height: 100vh;}
	._ui-layout__main {flex: 1;z-index: 1;position: relative;}
	._ui-layout__signboard {width: 100vw;}
	._ui-layout__footer {position: sticky;bottom: 0;z-index: 2;}
	._ui-layout {
		/* #ifndef H5 */
		min-height: 100vh;
		/* #endif */
		/* #ifdef H5 */
		min-height: calc(100vh - 44px);
		/* #endif */
		display: flex;
		flex-direction: column;
		position: relative;
	}

	._ui-layout__header {
		position: sticky;
		z-index: 2;
		/* #ifndef H5 */
		top: 0px;
		/* #endif */
		/* #ifdef H5 */
		top: v-bind(isNavTop);
		/* #endif */
	}
</style>