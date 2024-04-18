<template>
	<view class="__flower-svg" :style="{width:`${width}rpx`,height:`${height}rpx`}">
		<!-- #ifdef APP-PLUS-NVUE -->
		<fr-wvjs type="svg" :isCache="isCache" :resourceId="uuid" :resource="src" />
		<image  @click="onClick" @longpress="onLongpress" :src="getStoreState(uuid,isCache)" :style="{width:`${width}rpx`,height:`${height}rpx`}" :mode="mode" :fade-show="fadeShow" :lazy-load="lazyLoad" :show-menu-by-longpress="showMenuByLongpress" :draggable="draggable" @error="changeError" @load="changeLoad" />
		<!-- #endif -->
		<!-- #ifndef APP-PLUS-NVUE -->
		<image  @click="onClick" @longpress="onLongpress" :src="`data:image/svg+xml;charset=utf-8,${encodeURIComponent(src)}`" :style="{width:`${width}rpx`,height:`${height}rpx`}" :mode="mode" :fade-show="fadeShow" :lazy-load="lazyLoad" :show-menu-by-longpress="showMenuByLongpress" :draggable="draggable" @error="changeError" @load="changeLoad" />
		<!-- #endif -->
	</view>
</template>

<script>
	import { mixinStore } from "@/uni_modules/flower-store/uni-app";
	/**
	 * flower-svg svg组件
	 * @description 一款适用于 uni-app / uni-app-x 的 SVG 组件。全端全版本适配。
	 * @tutorial 
	 * @property {String} uuid 唯一标识uuid，必填
	 * @property {String} src svg资源参数
	 * @property {Number} width 宽度
	 * @property {Number} height 高度
	 * @property {String} mode 图片裁剪、缩放的模式，默认值：scaleToFill
	 * @property {Boolean} fadeShow 图片显示动画效果，默认值：false，App-nvue 2.3.4+ Android有效、uni-app-x
	 * @property {Boolean} lazyLoad 图片懒加载。只针对page与scroll-view下的image有效，默认值：false，微信小程序、百度小程序、抖音小程序、飞书小程序
	 * @property {Boolean} showMenuByLongpress 开启长按图片显示识别小程序码菜单，默认值：false，微信小程序2.7.0
	 * @property {Boolean} draggable 是否能拖动图片，默认值：false，H5 3.1.1+、App（iOS15+）
	 * @property {Boolean} isCache 是否图片缓存，默认值：false，nvue-app、uvue-app
	 */
	export default {
		mixins: [mixinStore],
		props: {
			uuid: { // 唯一标识
				type: String,
				default: ""
			},
			src: {
				type: String,
				default: ""
			},
			width: {
				type: Number,
				default: 48
			},
			height: {
				type: Number,
				default: 48
			},
			mode: {
				type: String,
				default: "scaleToFill"
			},
			fadeShow: {
				type: Boolean,
				default: false
			},
			lazyLoad: {
				type: Boolean,
				default: false
			},
			showMenuByLongpress: {
				type: Boolean,
				default: false
			},
			draggable: {
				type: Boolean,
				default: false
			},
			isCache: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick(){
				this.$emit("click");
			},
			onLongpress(){
				this.$emit("longpress");
			},
			changeError(event) {
				this.$emit("error", event)
			},
			changeLoad(event) {
				this.$emit("load", event)
			}
		}
	}
</script>

<style scoped>
	.__flower-svg {
		display: flex;
	}
</style>