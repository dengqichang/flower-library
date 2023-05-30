<template><text :class="['flower-icons',customClass]" :style="[iconStyle]">{{showIcon}}</text></template>
<script setup>
	// #ifdef APP-NVUE
	import iconUrl from './iconfont.ttf';const domModule = weex.requireModule('dom');domModule.addRule('fontFace', {'fontFamily': "flower-icon-inner-shadow-left",'src': "url('" + iconUrl + "')"});
	// #endif
	import {unitConversion,getColors} from "@/uni_modules/flower-config";
	import {computed} from "vue";
	const props = defineProps({isFill: Boolean,color: String,isBold: Boolean,size: [String, Number],lineHeight: [String, Number],customStyle: Object,customClass: Object});
	const iconStyle = computed(() => {let style = {...props.customStyle};if (!!props.size) {style.fontSize = unitConversion(props.size);};if (!!props.color) {style.color = getColors(props.color);};if (props.isBold) {style.fontWeight = 'bold';};if (!!props.lineHeight) {style.lineHeight = unitConversion(props.lineHeight);};return style;});
	const showIcon = computed(() => {if (props.isFill) {return '\ue97e'} else {return '\ue871'};});
</script>
<style scoped>
	/* #ifndef APP-NVUE */
	@font-face {font-family: flower-icon-inner-shadow-left;src: url('iconfont.ttf') format('truetype');}.flower-icons {font-family: flower-icon-inner-shadow-left;font-size: 28rpx;}
	/* #endif */
	/* #ifdef APP-NVUE */
	.flower-icons {font-family: flower-icon-inner-shadow-left;font-size: 28rpx;}
	/* #endif */
</style>
