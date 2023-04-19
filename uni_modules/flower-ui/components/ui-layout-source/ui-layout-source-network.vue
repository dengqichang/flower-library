<template>
	<view class="_ui-network" :style="{backgroundColor:getColors('danger-3')}">
		<icon-attention :color="getColors('danger')" :size="38" is-fill />
		<text class="_ui-network__text" :style="{color:getColors('danger')}">{{network.networkText}}</text>
	</view>
</template>

<script setup>
	import {getColors} from "@/uni_modules/flower-config";
	import {getNetwork} from "@/uni_modules/flower-api";
	const network = getNetwork();
</script>

<style scoped>
._ui-network {display: flex;justify-content: center;align-items: center;padding: 24rpx;}
._ui-network__text{margin-left: 16rpx;font-size: 28rpx;line-height: 28rpx;}
</style>