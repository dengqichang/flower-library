<!-- 文本 -->
<template>
	<view :style="styles" :class="[customClass]">
		<slot />
	</view>
</template>

<script setup>
	import {
		computed
	} from "vue";
	import {
		getColors,
		unitConversion,
		uiTextProps,
		uniMargin,
		uniPadding
	} from "@/uni_modules/flower-config";

	const props = defineProps({
		size: {
			type: [Number, String],
			default: uiTextProps.size
		},
		color: {
			type: String,
			default: uiTextProps.color
		},
		lineHeight: {
			type: [Number, String],
			default: uiTextProps.lineHeight
		},
		width: {
			type: [Number, String],
			default: uiTextProps.width
		},
		ellipsis: {
			type: [Number, String],
			default: uiTextProps.ellipsis
		},
		margin: {
			type: String,
			default: uiTextProps.margin
		},
		padding: {
			type: String,
			default: uiTextProps.padding
		},
		isIndent: {
			type: Boolean,
			default: uiTextProps.isIndent
		},
		customStyle: {
			type: Object,
			default: () => {
				return uiTextProps.customStyle
			}
		},
		customClass: {
			type: Object,
			default: () => {
				return uiTextProps.customClass
			}
		}
	});

	const styles = computed(() => {
		let style = {
			fontSize: unitConversion(props.size),
			...props.customStyle
		};
		if (!!props.color) {
			style.color = getColors(props.color)
		};
		if (!!props.lineHeight) {
			style.lineHeight = unitConversion(props.lineHeight)
		};
		if (!!props.width) {
			style.width = unitConversion(props.width)
		};
		if (!!props.ellipsis) {
			style = Object.assign(style, {
				'overflow': 'hidden',
				'text-overflow': 'ellipsis',
				'-webkit-line-clamp': props.ellipsis,
				'display': '-webkit-box',
				'-webkit-box-orient': 'vertical'
			});
		};
		if (!!props.margin) {
			style = Object.assign(style, uniMargin(props.margin))
		};
		if (!!props.padding) {
			style = Object.assign(style, uniPadding(props.padding))
		};
		if (props.isIndent) {
			style.textIndent = '2em';
		};
		return style;
	})
</script>

<style scoped>

</style>