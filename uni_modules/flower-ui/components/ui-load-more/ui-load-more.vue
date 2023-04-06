<!-- 加载更多 -->
<template>
	<view>
		<view :style="{borderTopColor:getColor('primary')}" class="_ui-load-more__icon" />
		<view>加载中...</view>
	</view>
</template>

<script setup>
	import {getColor} from "@/uni_modules/flower-config";
</script>

<style scoped>
	._ui-load-more__icon {
		width: 28rpx;
		height: 28rpx;
		border-style: solid;
		border-width: 2px;
		border-bottom-color: rgba(0, 0, 0, 0.1);
		border-right-color: rgba(0, 0, 0, 0.1);
		border-left-color: rgba(0, 0, 0, 0.1);
		border-radius: 100%;
		animation: _ui-load-more__circle 1s linear infinite;
		margin-right: 12rpx;
	}

	@keyframes _ui-load-more__circle {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>