<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-diamond-three-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《菱形3》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41421 22.5858L22.5858 5.41421C23.3668 4.63317 24.6332 4.63316 25.4142 5.41421L42.5858 22.5858C43.3668 23.3668 43.3668 24.6332 42.5858 25.4142L25.4142 42.5858C24.6332 43.3668 23.3668 43.3668 22.5858 42.5858L5.41421 25.4142C4.63317 24.6332 4.63316 23.3668 5.41421 22.5858Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>