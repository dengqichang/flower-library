<!-- 文本 -->
<template>
	<view :style="styles">{{props.text}}</view>
</template>

<script setup>
	import {
		computed
	} from "vue";
	import {
		getColor,
		unitConversion
	} from "@/uni_modules/flower-config";

	const props = defineProps({
		text: {
			type: String,
			default: ''
		},
		size: {
			type: [Number, String],
			default: 28
		},
		color: {
			type: String,
			default: ''
		},
		lineHeight: {
			type: [Number, String],
			default: ''
		},
		customStyle: Object
	});

	const styles = computed(() => {
		let style = {
			fontSize: unitConversion(props.size),
			...props.customStyle
		};
		if (!!props.color) {
			style.color = getColor(props.color)
		};
		if (!!props.lineHeight) {
			style.lineHeight = unitConversion(props.lineHeight)
		};
		return style;
	})
</script>

<style scoped>

</style>