<!-- 文本 -->
<template>
	<view class="__ui-text" :style="styles">
		<slot />
	</view>
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
	 * @property {String} margin 外边距，参数同css margin一样，示例：16 24 或者 16,24
	 * @property {String} padding 内边距，参数同css padding一样，示例：16 24 或者 16,24
	 * @property {Boolean} isIndent = [true|false] 是否首行缩进2个字符
	 * @property {Object} customStyle 自定义css样式
	 */
	import { computed } from "vue";
	import { getColors, unitConversion, uiTextProps, uniMargin, uniPadding } from "@/uni_modules/flower-config";

	const props = defineProps({
		size: { type: [Number, String], default: uiTextProps.size },
		color: { type: String, default: uiTextProps.color },
		lineHeight: { type: [Number, String], default: uiTextProps.lineHeight },
		weight: { type: String, default: uiTextProps.weight },
		width: { type: [Number, String], default: uiTextProps.width },
		lines: { type: [Number, String], default: uiTextProps.lines },
		margin: { type: String, default: uiTextProps.margin },
		padding: { type: String, default: uiTextProps.padding },
		isIndent: { type: Boolean, default: uiTextProps.isIndent },
		customStyle: { type: Object, default: () => { return uiTextProps.customStyle } }
	});

	const styles = computed(() => {
		let style : any = {
			fontSize: unitConversion(props.size, true),
			color: getColors(props.color),
			...props.customStyle
		};

		if (!!props.lineHeight) {
			style.lineHeight = unitConversion(props.lineHeight, true)
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
		if (!!props.margin) {
			style = Object.assign(style, uniMargin(props.margin));
		};
		if (!!props.padding) {
			style = Object.assign(style, uniPadding(props.padding));
		};
		if (props.isIndent) {
			style.textIndent = '2em';
		};

		return style;
	})
</script>

<style scoped>
	.__ui-text {
		font-family: PingFang SC;
	}
</style>