<template>
	<view class="_ui-default">
		<view class="_ui-default__svg" :style="{'backgroundImage':'url('+ svg +')'}" />
		<view class="_ui-default__description" :style="{color:getColor(props.descriptionColor)}">{{props.description}}</view>
		<slot />
	</view>
</template>

<script setup>
	import {svgToUrl} from "../../core";
	import {getColor,defaultColors,uiDefault} from "@/uni_modules/flower-config";
	import {watch,ref} from "vue";
	const svg = ref("");
	const props = defineProps({
		svg: {type: String,default: ""},
		description: {type: String,default: ""},
		descriptionColor: {type: String,default: ""},
		primaryColor: {type: String,default: ""},
		clothingColor: {type: String,default: ""},
		otherColor: {type: String,default: ""}
	});
	watch(() => defaultColors, () => {
		svg.value = svgToUrl(props.svg, props.primaryColor || getColor('primary'), props.clothingColor || getColor('warning'), props.otherColor || getColor('gray-12'));
	}, {deep: true,immediate: true});
</script>

<style scoped>
._ui-default{display: flex;justify-content: center;align-items: center;flex-direction: column;}
._ui-default__svg {background-size: cover;height: 500rpx;width: 500rpx;}
._ui-default__description{font-size: 30rpx;max-width: 456rpx;margin-bottom: 24rpx;}
</style>