<template>
	<view class="_ui-empty" :style="styles">
		<view class="_ui-empty__svg" :style="{'backgroundImage':'url('+ svg +')'}" />
		<view class="_ui-empty__description">{{props.description}}</view>
		<slot />
	</view>
</template>

<script setup>
	import {svgToUrl} from "../../core";
	import {getColors,defaultColors,unitConversion} from "@/uni_modules/flower-config";
	import {watch,ref,computed} from "vue";
	const svg = ref("");
	const props = defineProps({
		svg: {type: String,default: ""},
		description: {type: String,default: ""},
		primaryColor: {type: String,default: ""},
		clothingColor: {type: String,default: ""},
		otherColor: {type: String,default: ""},
		offsetTop: {type: [String,Number],default: 0},
		offsetBottom: {type: [String,Number],default: 0}
	});
	watch(() => defaultColors, () => {
		svg.value = svgToUrl(props.svg, getColors(props.primaryColor),  getColors(props.clothingColor), getColors(props.otherColor));
	}, {deep: true,immediate: true});
	
	const styles = computed(()=>{
		return {
			marginTop:unitConversion(props.offsetTop),
			marginBottom:unitConversion(props.offsetBottom)
		}
	});
</script>

<style scoped>
._ui-empty{display: flex;justify-content: center;align-items: center;flex-direction: column;}
._ui-empty__svg {background-size: cover;height: 500rpx;width: 500rpx;}
._ui-empty__description{font-size: 28rpx;max-width: 456rpx;margin-bottom: 24rpx;color: #8c8c8c;}
</style>