<template>
	<view :style="styles" class="_ui-load-more__icon" />
</template>

<script setup lang="ts">
	/**
	 * ui-spinner 加载动画
	 * @description 
	 * @tutorial 
	 * @property {String,Number} size 圆圈大小，同字号大小
	 * @property {String} color 颜色
	 * @property {String,Number} lineHeight 行高
	 * @property {String,Number} thick 圆圈粗细
	 * @property {String,Number} margin 外边距，同 css margin 样式
	 */
	import { getColors, unitConversion, uiSpinnerProps, uniMargin } from "@/uni_modules/flower-config";
	import { computed } from "vue";

	const props = defineProps({
		size: { type: [Number, String], default: uiSpinnerProps.size },
		color: { type: String, default: uiSpinnerProps.color },
		thick: { type: [String, Number], default: uiSpinnerProps.thick },
		margin: { type: String, default: uiSpinnerProps.margin },
	});

	const styles = computed(() => {
		let style = {
			width: unitConversion(props.size, true),
			height: unitConversion(props.size, true),
			borderTopColor: getColors(props.color),
			borderWidth: unitConversion(props.thick)
		};
		if (!!props.margin) {
			style = Object.assign(style, uniMargin(props.margin));
		};
		return style;
	});
</script>

<style scoped>
	._ui-load-more__icon {
		border-style: solid;
		border-bottom-color: rgba(0, 0, 0, 0.1);
		border-right-color: rgba(0, 0, 0, 0.1);
		border-left-color: rgba(0, 0, 0, 0.1);
		border-radius: 100%;
		animation: _ui-load-more__circle 1s linear infinite;
		box-sizing: border-box;
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