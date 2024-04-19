<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-scan-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《扫描》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 24L41 24" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M24 7L24 41" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><rect x="5" y="5" width="4" height="4" fill="${this.colors(0)}"/><rect x="14" y="5" width="4" height="4" fill="${this.colors(0)}"/><rect x="30" y="5" width="4" height="4" fill="${this.colors(0)}"/><rect x="39" y="5" width="4" height="4" fill="${this.colors(0)}"/><rect x="39" y="14" width="4" height="4" fill="${this.colors(0)}"/><rect x="5" y="14" width="4" height="4" fill="${this.colors(0)}"/><rect x="5" y="39" width="4" height="4" fill="${this.colors(0)}"/><rect x="14" y="39" width="4" height="4" fill="${this.colors(0)}"/><rect x="30" y="39" width="4" height="4" fill="${this.colors(0)}"/><rect x="39" y="39" width="4" height="4" fill="${this.colors(0)}"/><rect x="39" y="30" width="4" height="4" fill="${this.colors(0)}"/><rect x="5" y="30" width="4" height="4" fill="${this.colors(0)}"/></svg>`
			}
		}
	}
</script>