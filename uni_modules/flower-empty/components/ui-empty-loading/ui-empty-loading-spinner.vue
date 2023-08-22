<template>
	<view :style="styles" class="_ui-empty-loading-spinner" />
</template>

<script setup lang="ts">
	import { getColors } from "@/uni_modules/flower-config";
	import { computed } from "vue";

	const props = defineProps({
		color: {
			type: String,
			default: "primary"
		}
	});
	const styles = computed(() => {
		let style = {
			borderTopColor: getColors(props.color)
		};
		return style;
	});
</script>

<style scoped>
	._ui-empty-loading-spinner {
		width: 24rpx;
		height: 24rpx;
		border-width: 4rpx;
		border-style: solid;
		border-bottom-color: rgba(0, 0, 0, 0.1);
		border-right-color: rgba(0, 0, 0, 0.1);
		border-left-color: rgba(0, 0, 0, 0.1);
		border-radius: 100%;
		animation: _ui-empty-loading-spinner__circle 1s linear infinite;
	}

	@keyframes _ui-empty-loading-spinner__circle {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>