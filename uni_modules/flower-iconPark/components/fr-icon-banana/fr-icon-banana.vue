<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-banana-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《香蕉》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-2f4dbe78601bb0d7)"><path d="M15.9993 32C13.1998 31.0668 9.96483 28.8274 8.52376 26.5745C8.32636 26.2659 8.25521 25.8975 8.27911 25.5319L8.52427 21.7819C8.57721 20.9722 9.53405 20.5412 10.1952 21.0115C12.3289 22.5293 16.2279 25 18.9993 25C25.9993 25 31.9993 22.5 34.9993 17" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M25.9994 43C35.9993 40.9999 45.2422 30.5149 42.867 19.9413L41.9993 16L41.9993 7.99998L35.9993 6.99997C35.9993 19.9413 32.9995 30 19.9994 32C14.0231 32.9194 8.29412 31.6136 3.87018 29.0781L4.99939 36C6.99933 41 15.9995 45 25.9994 43Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></g><defs><clipPath id="icon-2f4dbe78601bb0d7"><rect width="48" height="48" fill="${this.colors(2)}"/></clipPath></defs></svg>`
			}
		}
	}
</script>