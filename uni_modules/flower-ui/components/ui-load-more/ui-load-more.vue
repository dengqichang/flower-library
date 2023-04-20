<!-- 加载更多 -->
<template>
	<view class="_ui-load-more">
		<view class="_ui-load-more__content" v-if="props.status != 'none'">
			<view v-if="props.status != 'loading'" class="_ui-load-more__line" />
			<ui-spinner v-if="props.status == 'loading'" />
			<text class="_ui-load-more__text">{{props[props.status]}}</text>
			<view v-if="props.status != 'loading'" class="_ui-load-more__line" />
		</view>
	</view>
</template>

<script setup>
	import {
		getColors,
		uiLoadMore
	} from "@/uni_modules/flower-config";
	const props = defineProps({
		status: {
			type: String,
			default: uiLoadMore.status
		},
		loadmore: {
			type: String,
			default: uiLoadMore.loadmore
		},
		loading: {
			type: String,
			default: uiLoadMore.loading
		},
		nomore: {
			type: String,
			default: uiLoadMore.nomore
		}
	});
</script>

<style scoped>
	._ui-load-more {
		height: 96rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	._ui-load-more__content {
		display: flex;
		align-items: center;
	}

	._ui-load-more__line {
		width: 96rpx;
		border-top: 1px solid #d9d9d9;
		margin: 0rpx 24rpx;
	}

	._ui-load-more__text {
		color: #8c8c8c;
		font-size: 28rpx;
		line-height: 28rpx;
		margin-left: 16rpx;
	}
</style>