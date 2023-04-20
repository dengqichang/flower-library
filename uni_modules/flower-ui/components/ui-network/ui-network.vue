<template>
	<view v-if="!network.networkConnected" class="_ui-network" :style="{backgroundColor:getColors('danger-3')}">
		<icon-attention :color="getColors('danger')" :size="38" is-fill />
		<text class="_ui-network__text"
			:style="{color:getColors('danger')}">{{props.tips || network.networkText}}</text>
	</view>
</template>

<script setup>
	import {
		getColors,
		uiNetwork
	} from "@/uni_modules/flower-config";
	import {
		network
	} from "@/uni_modules/flower-api";

	const props = defineProps({
		tips: {
			type: String,
			default: uiNetwork.tips
		}
	})
</script>

<style scoped>
	._ui-network {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24rpx;
	}

	._ui-network__text {
		margin-left: 16rpx;
		font-size: 28rpx;
		line-height: 28rpx;
	}
</style>