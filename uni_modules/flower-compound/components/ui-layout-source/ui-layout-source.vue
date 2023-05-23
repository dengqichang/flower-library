<template>
	<ui-layout :backdrop="props.backdrop" :signboard="props.signboard">
		<!-- 导航容器 -->
		<template #nav>
			<slot name="nav" />
		</template>
		<!-- 顶部容器 -->
		<template #header>
			<slot name="header" />
		</template>
		<!-- 无网络状态 -->
		<ui-empty-network v-if="pageNetworkStatus" :offset="emptyOffset">
			<!-- 跳转解决网络问题页面，待实现 -->
			<view class="_ui-layout-sourec_network">当前网络不可用,请检查<text @tap="navigateTo"
					:style="{color:getColors('primary')}">网络设置</text></view>
		</ui-empty-network>
		<view v-else>
			<!-- 缺省页状态 -->
			<ui-empty-loading v-if="!sourceWorkers.isReady" :offset="emptyOffset" />
			<view v-else-if="!sourceWorkers.isData && sourceWorkers.isReady">
				<view v-if="status== 200">
					<ui-empty-data v-if="slotEmpty" :offset="emptyOffset" />
					<view v-else :style="emptyStyle">
						<slot name="empty" />
					</view>
				</view>
				<!-- 403 -->
				<ui-empty-permission v-else-if="status == 403" :offset="emptyOffset" />
				<!-- 404 -->
				<ui-empty-html v-else-if="status == 404" :offset="emptyOffset" />
				<!-- 500 -->
				<ui-empty-fail v-else-if="status == 500" :offset="emptyOffset" />
			</view>
			<!-- 正常数据渲染 -->
			<view v-else>
				<slot />
				<ui-load-more v-if="isLoadmore && network.networkConnected" :status="sourceWorkers.loadMoreStatus" />
			</view>
		</view>
		<!-- 其它容器 -->
		<template #other>
			<slot name="other" />
		</template>
		<!-- 底部容器 -->
		<template #footer>
			<ui-network :router="props.networkRouter" v-if="rowNetworkState" />
			<slot name="footer" />
		</template>
	</ui-layout>
</template>

<script setup>
	import {
		useSlots,
		reactive,
		computed,
		ref,
		watch
	} from "vue";
	import {
		onReachBottom,
		onPullDownRefresh,
		onShow,
		onLoad
	} from "@dcloudio/uni-app";
	import {
		getIsPullDownRefresh,
		unitConversion,
		getColors,
		uiLayoutSourceProps,
		uiNetworkProps,
		uiLayoutProps
	} from "@/uni_modules/flower-config";
	import {
		network
	} from "@/uni_modules/flower-api";

	// 判断插槽是否存在内容
	const slotEmpty = !useSlots().empty;
	// 属性
	const props = defineProps({
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
		emptyOffset: {
			type: [String, Number],
			default: uiLayoutSourceProps.emptyOffset
		},
		networkRouter: {
			type: String,
			default: uiLayoutSourceProps.networkRouter || uiNetworkProps.router
		},
		period: {
			type: String,
			default: uiLayoutSourceProps.period
		},
		status: {
			type: [String, Number],
			default: 200
		},
		source: {
			type: [Array, Object],
			default: () => {
				return []
			}
		}
	});

	const emits = defineEmits(['change']);
	// 数据状态
	const sourceWorkers = reactive({
		isReady: false,
		isData: false,
		loadMoreStatus: "none",
		loadmorePage: 1,
		isRefresh: false,
		isReachBottom: true,
		onLoadValue: {}
	});

	// 验证是否开启下拉刷新
	const isPullDownRefresh = getIsPullDownRefresh();
	// 存在已渲染数据时显示行网络状态
	const rowNetworkState = computed(() => {
		return sourceWorkers.isData && !network.networkConnected
	});
	// 当不存在数据时显示页面网络状态
	const pageNetworkStatus = computed(() => {
		return !sourceWorkers.isData && !network.networkConnected
	});
	// 监听函数状态
	watch(() => props.status, () => {
		uni.stopPullDownRefresh();
	});
	watch(() => pageNetworkStatus.value, (newVal) => {
		if (!newVal) {
			refresh();
		};
	});
	// 自定义为空
	const emptyStyle = computed(() => {
		return {
			marginTop: unitConversion(props.emptyOffset),
			marginBottom: unitConversion(props.emptyOffset)
		}
	});
	// 网络设置跳转路由
	const navigateTo = () => {
		if (!!props.networkRouter) {
			uni.navigateTo({
				url: props.networkRouter
			})
		} else {
			console.error("未配置检查网络设置跳转路由");
		}
	}

	watch(() => props.source, (newVal, oldVal) => {
		// 是否已加载
		sourceWorkers.isReady = true;
		// true ：存在数据，false：无数据
		sourceWorkers.isData = newVal.length ? true : false;
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
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 300
			});
		};
		// 解锁上拉加载
		sourceWorkers.isReachBottom = true;
		// 关闭下拉刷新
		if (isPullDownRefresh) {
			uni.stopPullDownRefresh();
		};
	});

	const refresh = () => {
		sourceWorkers.isReady = false;
		sourceWorkers.isRefresh = true;
		sourceWorkers.loadmorePage = 1;
		emits("change", {
			"onPullDownRefresh": true,
			"onReachBottom": false,
			"loadmorePage": sourceWorkers.loadmorePage,
			"onLoadValue": sourceWorkers.onLoadValue
		});
	};

	// 触发上拉加载
	onReachBottom(() => {
		sourceWorkers.loadMoreStatus = "loading";
		if(sourceWorkers.isReachBottom){
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
	._ui-layout-sourec_network {
		font-size: 28rpx;
		color: #8c8c8c;
	}
</style>