<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-hippo-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《河马》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="25" width="34" height="18" rx="6" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="17" cy="34" r="3" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><circle cx="31" cy="34" r="3" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M11 19C11 15.6863 13.6863 13 17 13H31C34.3137 13 37 15.6863 37 19V25H11V19Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="20" cy="19" r="2" fill="${this.colors(2)}"/><circle cx="28" cy="19" r="2" fill="${this.colors(2)}"/><path d="M18 5C19.6569 5 21 6.34315 21 8L21 13L15 13L15 8C15 6.34315 16.3431 5 18 5Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M30 5C31.6569 5 33 6.34315 33 8L33 13L27 13L27 8C27 6.34315 28.3431 5 30 5Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>