<!-- 页面加载 -->
<template>
	<view class="_ui-layout__main-loading" :style="styles">
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
</template>

<script setup>
	import {unitConversion,uiLoadingLogoProps} from "@/uni_modules/flower-config";
	import {computed} from "vue";
	const props = defineProps({
		logo: {
			type: String,
			default: uiLoadingLogoProps.logo
		},
		title: {
			type: String,
			default: uiLoadingLogoProps.title
		},
		offsetTop: {
			type: String,
			default: 0
		},
	});
	const styles = computed(()=>{
		return {
			marginTop:unitConversion(props.offsetTop)
		}
	});
</script>

<style scoped>
._ui-layout__main-loading {position: relative;display: flex;justify-content: center;height: 250rpx;}
._ui-layout__main-loading-image {width: 180rpx;height: 180rpx;}
._ui-layout__main-loading-light {position: absolute;font-size: 36rpx;letter-spacing: 2px;text-align: center;filter: contrast(0);opacity: 0.25;}
._ui-layout__main-loading-color {position: absolute;font-size: 36rpx;letter-spacing: 2px;text-align: center;overflow: hidden;animation-name: loaderHeight;animation-duration: 5s;animation-timing-function: linear;animation-iteration-count: infinite;animation-direction: alternate;}
@keyframes loaderHeight {0% {height: 0%;}100% {height: 100%;}}
</style>