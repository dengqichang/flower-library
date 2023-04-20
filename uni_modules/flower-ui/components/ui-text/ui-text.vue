<!-- 文本 -->
<template>
	<view :style="styles" :class="[customClass]">{{props.text}}
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
		uiText
	} from "@/uni_modules/flower-config";

	const props = defineProps({
		text: {
			type: String,
			default: uiText.text
		},
		size: {
			type: [Number, String],
			default: uiText.size
		},
		color: {
			type: String,
			default: uiText.color
		},
		lineHeight: {
			type: [Number, String],
			default: uiText.lineHeight
		},
		customStyle: {
			type: Object,
			default: () => {
				return uiText.customStyle
			}
		},
		customClass: {
			type: Object,
			default: () => {
				return uiText.customClass
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
		return style;
	})
</script>

<style scoped>

</style>