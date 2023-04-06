<!-- 全屏加载 -->
<template>
	<view class="_ui-full-screen-loading" :style="getCurrentPageBackground()" @touchmove.stop.prevent>
		<view class="_ui-layout__main-loading">
			<!-- 彩色 -->
			<view class="_ui-layout__main-loading-light">
				<image class="_ui-layout__main-loading-image" :src="props.logo" />
				<view>{{props.title}}</view>
			</view>
			<!-- 灰色 -->
			<view class="_ui-layout__main-loading-color">
				<image class="_ui-layout__main-loading-image" :src="props.logo" />
				<view>{{props.title}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		getCurrentPageBackground
	} from "@/uni_modules/flower-config";
	const props = defineProps({
		logo: {
			type: String,
			default: '/uni_modules/flower-ui/static/flower-logo.png'
		},
		title: {
			type: String,
			default: uni.getSystemInfoSync().appName
		},
		offsetTop: {
			type: String,
			default: '25'
		},
	})
</script>

<style scoped>
	._ui-full-screen-loading {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		padding-top: 25vh;
		z-index: 99999;
	}

	._ui-layout__main-loading {
		position: relative;
		display: flex;
		justify-content: center;
		height: 300rpx;
	}

	._ui-layout__main-loading-image {
		width: 200rpx;
		height: 200rpx;
	}

	._ui-layout__main-loading-light {
		position: absolute;
		font-size: 36rpx;
		letter-spacing: 2px;
		text-align: center;
		filter: contrast(0);
		opacity: 0.25;
	}

	._ui-layout__main-loading-color {
		position: absolute;
		font-size: 36rpx;
		letter-spacing: 2px;
		text-align: center;
		overflow: hidden;
		animation-name: loaderHeight;
		animation-duration: 5s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}

	@keyframes loaderHeight {
		0% {
			height: 0%;
		}

		100% {
			height: 100%;
		}
	}
</style>