<template>
	<view :style="styles" class="_ui-load-more__icon" />
</template>

<script setup>
	import {getColors,unitConversion} from "@/uni_modules/flower-config";
	import {computed} from "vue";
	const props = defineProps({
		size: {type: [Number, String],default: 24},
		color: {type: String,default: 'primary'},
		thickness: {type: [String, Number],default: 4}
	});
	const styles = computed(() => {
		let style = {width: unitConversion(props.size),height: unitConversion(props.size),borderTopColor: getColors(props.color),borderWidth: unitConversion(props.thickness)};
		return style;
	});
</script>

<style scoped>
._ui-load-more__icon {border-style: solid;border-bottom-color: rgba(0, 0, 0, 0.1);border-right-color: rgba(0, 0, 0, 0.1);border-left-color: rgba(0, 0, 0, 0.1);border-radius: 100%;animation: _ui-load-more__circle 1s linear infinite;}
@keyframes _ui-load-more__circle {0% {transform: rotate(0);}100% {transform: rotate(360deg);}}
</style>