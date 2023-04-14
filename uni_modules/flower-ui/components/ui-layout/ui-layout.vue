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
			<ui-empty-network v-if="networkPage">
				<!-- 重新加载按钮，待实现 -->
				
				<!-- 跳转解决网络问题页面，待实现 -->
				
			</ui-empty-network>
			<!-- 页面加载中 -->
			<ui-loading v-else-if="loadingState" />
			<!-- 内容容器 -->
			<view v-else>
				<slot />
				<!-- 为空状态页面 -->
				<view v-if="emptyState">
					<ui-empty-data v-if="slotEmpty" />
					<slot v-else name="empty" />
				</view>
				<ui-load-more v-if="loadmore" :status="sourceWorkers.loadMoreStatus" />
			</view>
		</view>
		<!-- 自定义标识牌 -->
		<slot name="signboard" />
		<!-- 默认标识牌 -->
		<image v-if="slotSignboard && props.signboard" class="_ui-layout__signboard" mode="widthFix" :src="props.signboard" />
		<!-- 弹出层容器 -->
		<slot name="popup" />
		<!-- 底部容器 -->
		<view class="_ui-layout__footer">
			<!-- 存在数据时网络状态 -->
			<ui-layout-network v-if="rowNetworkState" />
			<slot name="footer" />
		</view>
	</view>
</template>

<script setup>
	import {useSlots,ref,computed,watch} from "vue";
	import {onReachBottom} from "@dcloudio/uni-app";
	import {getColors,getIsCustomNav,getCurrentPageBackground} from "@/uni_modules/flower-config";
	import {getNetwork} from "@/uni_modules/flower-api";
	import uiLayoutNetwork from "./ui-layout-network.vue";
	// 判断插槽是否存在内容
	const slotSignboard = !useSlots().signboard;
	const slotEmpty = !useSlots().empty;
	// 处理H5端兼容nav、header的slot内容高度
	const isNavTop = getIsCustomNav() ? '44px' : '0px';
	// 属性
	const props = defineProps({
		backdrop: {
			type: String,
			default: ''
		},
		signboard: {
			type: String,
			default: ''
		},
		loadmore: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		source: {
			type: [Array,Object,String],
			default: () => {
				return []
			}
		}
	});
	// 数据状态
	const sourceWorkers = ref({
		isLoaded: false,
		isData: false,
		loading: props.source.length ? false : true,
		loadMoreStatus: "none"
	});
	watch(() => props.source, (newVal,oldVal) => {
		// 是否已加载
		sourceWorkers.value.isLoaded = true;
		// true ：存在数据，false：无数据
		sourceWorkers.value.isData = newVal.length ? true : false;
		// 已请求完成，关闭全屏加载
		sourceWorkers.value.loading = false;
		// 上拉加载更多
		if (sourceWorkers.value.loadMoreStatus != "none"){if(newVal.length >= oldVal.length){sourceWorkers.value.loadMoreStatus = "nomore"}else{sourceWorkers.value.loadMoreStatus = "loadmore"};};
	});
	// 全屏加载状态
	const loadingState = computed(() => {return sourceWorkers.value.loading && props.loading});
	// 网络状态
	const network = getNetwork();
	// 当不存在数据时显示页面网络状态
	const networkPage = !sourceWorkers.value.isData && !network.networkConnected;
	// 存在已渲染数据时显示行网络状态
	const rowNetworkState = computed(() => {return sourceWorkers.value.isData && !network.networkConnected});
	// 为空页面
	const emptyState = computed(() => {return !sourceWorkers.value.isData && sourceWorkers.value.isLoaded});
	// 触发上拉加载
	onReachBottom(() => {sourceWorkers.value.loadMoreStatus = "loading";})
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