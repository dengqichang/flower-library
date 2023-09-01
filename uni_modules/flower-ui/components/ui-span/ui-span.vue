<!-- 文本 -->
<template>
	<text class="__ui-span" :style="styles">
		<slot />
	</text>
</template>

<script setup lang="ts">
	/**
	 * ui-text 文本
	 * @description 此组件集成了文本类在项目中的常用功能，包括状态，超出行省略，首行缩进...等功能。几乎涵盖使用的大部分场景。
	 * @tutorial 
	 * @property {String,Number} size 字号
	 * @property {String} color 颜色
	 * @property {String,Number} lineHeight 行高
	 * @property {String,Number} weight = [100|200|300|400|500|600|700|800|900] 字重
	 * @property {String,Number} width 文本宽度
	 * @property {String,Number} lines = [1|2|3|4|5|6|7|8|9|10] 超出行省略
	 * @property {Boolean} isIndent = [true|false] 是否首行缩进2个字符
	 * @property {Boolean} isAuto = [true|false] 是否文本自增长
	 * @property {Object} customStyle 自定义css样式
	 * @property {Object} customClass 自定义class样式
	 */
	import { computed } from "vue";
	import { getColors, unitConversion, uiSpanProps } from "@/uni_modules/flower-config";

	const props = defineProps({
		size: { type: [Number, String], default: uiSpanProps.size },
		color: { type: [String, Array], default: () => { return uiSpanProps.color } },
		lineHeight: { type: [Number, String], default: uiSpanProps.lineHeight },
		weight: { type: String, default: uiSpanProps.weight },
		width: { type: [Number, String], default: uiSpanProps.width },
		lines: { type: [Number, String], default: uiSpanProps.lines },
		isIndent: { type: Boolean, default: uiSpanProps.isIndent },
		isAuto: { type: Boolean, default: true },
		offsetLeft: { type: [Number, String], default: uiSpanProps.offsetLeft },
		offsetRight: { type: [Number, String], default: uiSpanProps.offsetRight },
		customStyle: { type: Object, default: () => { return uiSpanProps.customStyle } }
	});

	const styles = computed(() => {
		let style : any = {
			fontSize: unitConversion(props.size, props.isAuto),
			color: getColors(props.color),
			...props.customStyle
		};

		if (!!props.lineHeight) {
			style.lineHeight = unitConversion(props.lineHeight, props.isAuto)
		};
		if (!!props.weight) {
			style.fontWeight = props.weight;
		};
		if (!!props.width) {
			style.width = unitConversion(props.width);
		};
		if (!!props.lines) {
			style = Object.assign(style, { 'overflow': 'hidden', 'text-overflow': 'ellipsis', '-webkit-line-clamp': props.lines, 'display': '-webkit-box', '-webkit-box-orient': 'vertical' });
		};
		if (props.isIndent) {
			style.textIndent = '2em';
		};
		if (!!props.offsetLeft) {
			style.marginLeft = unitConversion(props.offsetLeft)
		};
		if (!!props.offsetRight) {
			style.marginLeft = unitConversion(props.offsetRight)
		};
		return style;
	})
</script>

<style scoped>
	.__ui-span {
		font-family: PingFang SC;
	}
</style>