<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-hotel-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《酒店》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><rect x="8" y="4" width="32" height="40" rx="2" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M20 32H28V44H20V32Z" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M15 12L17 12" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M15 18L17 18" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M23 12L25 12" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M23 18L25 18" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M31 12L33 12" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M31 18L33 18" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M4 44H44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M28 32H30C30.5523 32 31.0098 31.548 30.9044 31.0058C30.3517 28.1653 27.4709 26 24 26C20.5291 26 17.6483 28.1653 17.0956 31.0058C16.9902 31.548 17.4477 32 18 32H20" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>