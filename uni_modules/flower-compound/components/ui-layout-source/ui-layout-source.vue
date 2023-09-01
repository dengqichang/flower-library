<template>
	<ui-layout :backdrop="props.backdrop" :signboard="props.signboard">
		<!-- 导航容器 -->
		<template #nav>
			<slot name="nav" />
		</template>
		<!-- 顶部容器 -->
		<template #header>
			<view v-if="getCurrentNetwork()">
				<slot name="header" />
			</view>
		</template>
		<!-- 无网络状态 -->
		<ui-no-network mode="page" :router="uiNoNetworkProps.router" />
		<view v-if="getCurrentNetwork()">
			<!-- 缺省页状态 -->
			<ui-empty-status :statusCode="sourceWorkers.emptyStatusCode" :source="sourceWorkers.data" :mode="emptyMode" :offsetTop="emptyOffsetTop" :offsetBottom="emptyOffsetBottom" @change="onChangeUIEmptyStatus" />
			<!-- 正常数据渲染 -->
			<view v-if="sourceWorkers.uiEmptyStatusShow">
				<slot />
				<ui-load-more v-if="props.isLoadmore && getCurrentNetwork()" :status="sourceWorkers.loadMoreStatus" />
			</view>
		</view>
		<!-- 其它容器 -->
		<template #other>
			<slot name="other" />
		</template>
		<!-- 底部容器 -->
		<template #footer>
			<view v-if="getCurrentNetwork()">
				<slot name="footer" />
			</view>
		</template>
	</ui-layout>
</template>

<script setup lang="ts">
	import { reactive, watch } from "vue";
	import { onReachBottom, onPullDownRefresh, onShow, onLoad } from "@dcloudio/uni-app";
	import { getIsPullDownRefresh, uiLayoutSourceProps, uiNoNetworkProps, uiLayoutProps, getCurrentNetwork } from "@/uni_modules/flower-config";

	// 属性
	const props = defineProps({
		source: {
			type: [Array, Object],
			default: () => {
				return []
			}
		},
		statusCode: {
			type: Number,
			default: 0
		},
		period: {
			type: String,
			default: uiLayoutSourceProps.period
		},
		emptyMode: {
			type: String,
			default: "data"
		},
		backdrop: {
			type: String,
			default: uiLayoutSourceProps.backdrop || uiLayoutProps.backdrop
		},
		signboard: {
			type: String,
			default: uiLayoutSourceProps.signboard || uiLayoutProps.signboard
		},
		isLoadmore: {
			type: Boolean,
			default: uiLayoutSourceProps.isLoadmore
		},
		emptyOffsetTop: {
			type: [String, Number],
			default: uiLayoutSourceProps.emptyOffsetTop
		},
		emptyOffsetBottom: {
			type: [String, Number],
			default: uiLayoutSourceProps.emptyOffsetBottom
		}
	});

	const emits = defineEmits(['change']);
	// 数据状态
	const sourceWorkers = reactive({
		emptyStatusCode: 0,
		data: [],
		loadMoreStatus: "none",
		loadmorePage: 1,
		isRefresh: false,
		isReachBottom: true,
		onLoadValue: {},
		networkStatus: true,
		uiEmptyStatusShow: false
	});

	// 验证是否开启下拉刷新
	const isPullDownRefresh = getIsPullDownRefresh();

	// 监听网络状态
	watch(() => getCurrentNetwork(), (newVal) => {
		if (newVal) { refresh(); };
	});

	// 监听函数状态
	watch(() => props.statusCode, (newVal) => {
		if (newVal != 200 && isPullDownRefresh) {
			uni.stopPullDownRefresh();
		};
	});

	watch(() => props.source, (newVal : any[], oldVal : any[]) => {
		// 是否已加载
		sourceWorkers.emptyStatusCode = Number(props.statusCode);
		// true ：存在数据，false：无数据
		sourceWorkers.data = newVal;
		// 上拉加载更多
		if (sourceWorkers.loadMoreStatus != "none") {
			if (newVal.length >= oldVal.length) {
				sourceWorkers.loadMoreStatus = "nomore"
			} else {
				sourceWorkers.loadMoreStatus = "loadmore"
			};
		};
		// 上拉加载页数
		if (newVal.length > oldVal.length && !sourceWorkers.isRefresh) {
			sourceWorkers.loadmorePage += 1;
		};
		// 拉下刷新重置页数
		if (sourceWorkers.isRefresh) {
			sourceWorkers.loadmorePage += 1;
			sourceWorkers.isRefresh = false;
			uni.pageScrollTo({ scrollTop: 0, duration: 300 });
			// 关闭下拉刷新
			if (isPullDownRefresh) { uni.stopPullDownRefresh(); };
		};
		// 解锁上拉加载
		sourceWorkers.isReachBottom = true;

	});

	const refresh = () => {
		sourceWorkers.emptyStatusCode = 0;
		sourceWorkers.isRefresh = true;
		sourceWorkers.loadmorePage = 1;
		emits("change", {
			"onPullDownRefresh": true,
			"onReachBottom": false,
			"loadmorePage": sourceWorkers.loadmorePage,
			"onLoadValue": sourceWorkers.onLoadValue
		});
	};

	const onChangeUIEmptyStatus = (e : any) => {
		sourceWorkers.uiEmptyStatusShow = e.isEmpty;
	};

	if (props.isLoadmore) {
		// 触发上拉加载
		onReachBottom(() => {
			sourceWorkers.loadMoreStatus = "loading";
			if (sourceWorkers.isReachBottom) {
				emits("change", {
					"onPullDownRefresh": false,
					"onReachBottom": true,
					"loadmorePage": sourceWorkers.loadmorePage,
					"onLoadValue": sourceWorkers.onLoadValue
				});
			};
			// 锁定上拉加载
			sourceWorkers.isReachBottom = false;
		});
	};

	// 下拉刷新
	onPullDownRefresh(() => {
		refresh();
	});

	// 页面加载调用
	if (props.period == "onReady") {
		refresh();
	};
	// 页面显示即调用
	onShow(() => {
		if (props.period == "onShow") {
			refresh();
		};
	});
	onLoad((e) => {
		sourceWorkers.onLoadValue = e;
		if (props.period == "onLoad") {
			refresh();
		};
	});
	// 暴露方法
	defineExpose({
		refresh
	})
</script>

<style scoped>
	
</style>