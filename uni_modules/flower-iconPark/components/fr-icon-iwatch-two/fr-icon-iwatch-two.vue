<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-iwatch-two-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《苹果智能手表》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4167 10.5C18.2373 7.69936 21.9423 6 26 6C34.8366 6 42 14.0589 42 24C42 33.9411 34.8366 42 26 42C21.9423 42 18.2373 40.3006 15.4167 37.5" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><rect x="6" y="10" width="10" height="28" rx="2" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><rect x="13" y="18" width="4" height="4" rx="2" transform="rotate(90 13 18)" fill="${this.colors(2)}"/><rect x="13" y="25" width="4" height="4" rx="2" transform="rotate(90 13 25)" fill="${this.colors(2)}"/></svg>`
			}
		}
	}
</script>