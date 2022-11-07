<template>
	<view class="_fui-layout">
		<!-- 顶栏容器 -->
		<view class="_fui-layout__header">
			<!-- 导航容器 -->
			<slot name="nav" />
			<!-- 头部容器 -->
			<slot name="header" />
		</view>
		<!-- 主要区域容器 -->
		<view class="_fui-layout__main">
			<slot />
		</view>
		<!-- 底部logo容器 -->
		<image v-if="layoutBottomLogo" class="_fui-layout__image" mode="widthFix" :src="layoutBottomLogo" />
		<!-- 弹出层容器 -->
		<slot name="popup" />
		<!-- 底栏容器 -->
		<view class="_fui-layout__footer">
			<slot name="footer" />
		</view>
	</view>
</template>

<script setup>
	import {layoutBottomLogo,getIsCustomNav} from "@/uni_modules/flower-ui";
	// 处理H5端兼容nav、header的slot内容高度
	const isNavTop = getIsCustomNav() ? '44px' :'0px';
</script>

<style scoped>
._fui-layout {min-height: 100vh;display: flex;flex-direction: column;}
._fui-layout__header {
	position: sticky;z-index: 2;
	/* #ifndef H5 */
	top: 0px;
	/* #endif */
	/* #ifdef H5 */
	top: v-bind(isNavTop);
	/* #endif */
}
._fui-layout__main {flex: 1;}
._fui-layout__image {width: 750rpx;}
._fui-layout__footer {position: sticky;bottom: 0;z-index: 2;}
</style>
