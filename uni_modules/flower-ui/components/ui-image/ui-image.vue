<template>
	<view class="__ui-image" :style="imageStyles">
		<image v-show="!isLoadImage" @load="onLoad" :style="imageStyles" :src="src" :draggable="props.draggable"
			:mode="props.mode" :lazy-load="props.lazyLoad" :show-menu-by-longpress="props.showMenuByLongpress" />
		<image v-if="isLoadImage && !!props.placeholder" :style="imageStyles" :draggable="false" :src="placeholder" />
	</view>
</template>

<script setup lang="ts">
	import { computed, ref } from "vue";
	import { unitConversion, uniBorderRadius, uniMargin } from "@/uni_modules/flower-config";

	const props = defineProps({
		src: String,
		placeholder: String,
		mode: {
			type: String,
			default: "scaleToFill"
		},
		lazyLoad: Boolean,
		showMenuByLongpress: Boolean,
		draggable: Boolean,
		width: {
			type: [String, Number],
			default: 200
		},
		height: {
			type: [String, Number],
			default: 200
		},
		margin: [String, Array],
		borderRadius: [String, Array],
		isWHAuto: {
			type: Boolean,
			default: false
		},
		background: String
	});

	const isLoadImage = ref(true);

	const onLoad = () => {
		isLoadImage.value = false;
	}

	const imageStyles = computed(() => {
		let style : any = {
			width: unitConversion(props.width, props.isWHAuto),
			height: unitConversion(props.height, props.isWHAuto),
		};
		if (!!props.borderRadius) {
			style = Object.assign(style, uniBorderRadius(props.borderRadius));
		};
		if (!!props.margin) {
			style = Object.assign(style, uniMargin(props.margin));
		};
		if (!!props.background && isLoadImage.value) {
			style.background = props.background
		};
		return style;
	});
</script>

<style>
	.__ui-image {
		display: flex;
	}
</style>