<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-multilayer-sphere-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《多层圆球》图标
	 * @tutorial https://www.flowerui.com/documents/flower-icons/icons.html
	 * @property {Number} size 图标大小
	 * @property {Number} strokeWidth 线段粗细
	 * @property {String} theme 图标大小
	 * @property {Array} fill 图标颜色，["外部描边颜色","外部填充颜色","内部描边颜色","内部填充颜色"]
	 * @property {String} strokeLinecap 图标大小
	 * @property {String} strokeLinejoin 图标大小
	 * @event {Function} click 图标点击事件
	 */
	export default {
		mixins: [icons],
		computed: {
			// #ifdef UNI-APP-X
			iconSvg(): string {
			// #endif
			// #ifndef UNI-APP-X
			iconSvg() {
			// #endif
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M4.3999 20C6.25298 29.129 14.324 36 23.9998 36C33.6756 36 41.7466 29.129 43.5997 20" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M5.66406 16C8.75028 23.0636 15.7986 28 23.9999 28C32.2012 28 39.2495 23.0636 42.3357 16" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M7.99854 12C11.6474 16.8578 17.4567 20 24 20C30.5433 20 36.3526 16.8578 40.015 12" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M11.998 8C15.341 10.5116 19.4967 12 24 12C28.5033 12 32.659 10.5116 36.0019 8" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>