<!-- 加载更多 -->
<template>
	<view class="_ui-load-more">
		<view class="_ui-load-more__content" :style="{opacity:props.status == 'none'?0:1}">
			<view v-if="props.status != 'loading'" :style="lineStyles" />
			<ui-spinner margin="0 16" :size="Number(props.size)+4" v-if="props.status == 'loading'" />
			<ui-text :size="props.size" :color="props.color">{{props[props.status]}}</ui-text>
			<view v-if="props.status != 'loading'" :style="lineStyles" />
		</view>
	</view>
</template>

<script setup lang="ts">
	import { uiLoadMoreProps, unitConversion, getColors } from "@/uni_modules/flower-config";
	import { computed } from "vue";

	const props = defineProps({
		status: { type: String, default: uiLoadMoreProps.status },
		loadmore: { type: String, default: uiLoadMoreProps.loadmore },
		loading: { type: String, default: uiLoadMoreProps.loading },
		nomore: { type: String, default: uiLoadMoreProps.nomore },
		size: { type: [String, Number], default: uiLoadMoreProps.size },
		color: { type: String, default: uiLoadMoreProps.color },
		lineLength: { type: [String, Number], default: uiLoadMoreProps.lineLength },
		lineColor: { type: String, default: uiLoadMoreProps.lineColor },
		lineOffset: { type: [String, Number], default: uiLoadMoreProps.lineOffset },
	});

	const lineStyles = computed(() => {
		let style = {
			width: unitConversion(props.lineLength),
			borderTop: `1px solid ${getColors(props.lineColor)}`,
			marginLeft: unitConversion(props.lineOffset),
			marginRight: unitConversion(props.lineOffset)
		};
		return style;
	});
</script>

<style scoped>
	._ui-load-more {
		padding: 24rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	._ui-load-more__content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>