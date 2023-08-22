<template>
	<view class="__flower-icons" :style="iconConStyle">
		<text :class="['flower-icons']" :style="iconStyle">{{showIcon}}</text>
	</view>
</template>
<script setup lang="ts">
	/**
	 * flower-icons 图标组件
	 * @description 多平台 uni-app 生态字体图标库 ，5000+ 统一化高质量的图标资源
	 * @tutorial https://www.flowerui.com/documents/flower-icons/guide/sketch.html
	 * @property {Boolean} isFill = [true|false] 是否为填充图标，默认 false 线性图标
	 *  @value true 填充图标
	 *  @value false 线性图标
	 * @property {String,Number} size 图标字号
	 * @property {String} color 颜色
	 * @property {String,Number} lineHeight 行高
	 * @property {Boolean} isWeight = [true|false] 是否加粗字重，默认 fasle
	 *  @value true 加粗字重
	 *  @value false 正常字重
	 * @property {String} margin 外边距，参数同css margin一样，示例：16 24 或者 16,24
	 * @property {String} padding 内边距，参数同css padding一样，示例：16 24 或者 16,24
	 */
	import { unitConversion, getColors, uiIconsProps, uniMargin, uniPadding } from "@/uni_modules/flower-config";
	import { computed } from "vue";

	// #ifdef APP-NVUE
	import iconUrl from './iconfont.ttf';
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', { 'fontFamily': "flower-icon-graphic-stitching", 'src': "url('" + iconUrl + "')" });
	// #endif

	const props = defineProps({
		isFill: { type: Boolean, default: uiIconsProps.isFill },
		size: { type: [Number, String], default: uiIconsProps.size },
		color: { type: String, default: uiIconsProps.color },
		lineHeight: { type: [Number, String], default: uiIconsProps.lineHeight },
		isWeight: { type: Boolean, default: uiIconsProps.isWeight },
		margin: { type: String, default: uiIconsProps.margin },
		padding: { type: String, default: uiIconsProps.padding }
	});

	const iconStyle = computed(() => {
		let style : any = {fontSize: unitConversion(props.size,true),color: getColors(props.color)};
		if (!!props.lineHeight) {style.lineHeight = unitConversion(props.lineHeight,true)};
		if (props.isWeight) {style.fontWeight = "bold";};
		return style;
	});

	const iconConStyle = computed(() => {
		let style : any = {};
		if (!!props.margin) {style = Object.assign(style, uniMargin(props.margin));};
		if (!!props.padding) {style = Object.assign(style, uniPadding(props.padding));};
		return style;
	});
	
	const showIcon = computed(() => {
		if (props.isFill) {return '\ue6ec'} else {return '\ue6ec'};
	});
</script>
<style scoped>
	/* #ifndef APP-NVUE */
	.__flower-icons {display: flex;}
	@font-face {font-family: flower-icon-graphic-stitching;src: url('iconfont.ttf') format('truetype');}
	.flower-icons {font-family: flower-icon-graphic-stitching;}
	/* #endif */
	/* #ifdef APP-NVUE */
	.flower-icons {font-family: flower-icon-graphic-stitching;}
	/* #endif */
</style>
