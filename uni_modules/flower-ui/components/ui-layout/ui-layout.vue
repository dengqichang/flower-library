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
			<slot />
		</view>
		<!-- 自定义标识牌 -->
		<slot name="signboard" />
		<!-- 默认标识牌 -->
		<image v-if="slotSignboard && props.signboard" class="_ui-layout__signboard" mode="widthFix"
			:src="props.signboard" />
		<!-- 弹出层容器 -->
		<slot name="popup" />
		<!-- 底部容器 -->
		<view class="_ui-layout__footer">
			<slot name="footer" />
		</view>
	</view>
</template>

<script setup>
	import {
		useSlots
	} from "vue";
	import {
		uiLayout,
		getIsCustomNav,
		getCurrentPageBackground
	} from "@/uni_modules/flower-config";
	// 判断插槽是否存在内容
	const slotSignboard = !useSlots().signboard;
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
		}
	});
</script>

<style scoped>
	._ui-layout__backdrop {
		position: fixed;
		width: 100vw;
		height: 100vh;
	}

	._ui-layout__main {
		flex: 1;
		z-index: 1;
		position: relative;
	}

	._ui-layout__signboard {
		width: 100vw;
	}

	._ui-layout__footer {
		position: sticky;
		bottom: 0;
		z-index: 2;
	}

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