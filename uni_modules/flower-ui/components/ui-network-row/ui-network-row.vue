<!-- 网络状态 -->
<template>
	<view v-if="!network.networkConnected" class="_ui-network-state"
		:style="{backgroundColor:getColor('danger-3')}">
		<icon-attention :color="getColor('danger')" :size="38" is-fill />
		<ui-text :customStyle="{marginLeft:'16rpx'}" :size="28" :lineHeight="28" color="danger" :text="network.networkText" />
	</view>
</template>

<script setup>
	import {getNetworkType} from "@/uni_modules/flower-api";
	import {getColor} from "@/uni_modules/flower-config";
	const network = getNetworkType();
</script>

<style scoped>
	._ui-network-state {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 18rpx;
	}
</style>