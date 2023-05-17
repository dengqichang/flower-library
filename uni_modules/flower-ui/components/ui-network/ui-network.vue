<template>
	<view v-if="!network.networkConnected" class="_ui-network" :style="{backgroundColor:getColors('danger-3')}"
		@tap="navigateTo">
		<view :style="{color:getColors('danger')}" class="flower-icons-network icon-attention-fill"></view>
		<view :style="{color:getColors('danger')}" class="_ui-network__text">{{props.tips || network.networkText}}
		</view>
		<view :style="{color:getColors('danger')}" class="flower-icons-network icon-right"></view>
	</view>
</template>

<script setup>
	import {getColors,uiNetworkProps} from "@/uni_modules/flower-config";
	import {network} from "@/uni_modules/flower-api";
	const props = defineProps({router: {type: String,default: uiNetworkProps.router},tips: {type: String,default: uiNetworkProps.tips}});
	const navigateTo = () => {if (!!props.router) {uni.navigateTo({url: props.router})} else {console.error("未配置检查网络设置跳转路由");}}
</script>

<style scoped>
	@import "iconfont.css";
	._ui-network {display: flex;justify-content: center;align-items: center;}
	._ui-network__text {font-size: 28rpx;line-height: 28rpx;flex: 1;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
</style>