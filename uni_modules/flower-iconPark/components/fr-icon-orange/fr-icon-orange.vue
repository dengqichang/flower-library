<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-orange-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《橙子》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41 25.9999C41 35.9411 35 43.9999 24 43.9999C13 43.9999 7 35.9411 7 25.9999C7 22.3197 8.10446 18.8975 10 16.0465C13.2248 11.1965 17.7391 12.9999 24 12.9999C30.2609 12.9999 34.7752 11.1965 38 16.0465C39.8955 18.8975 41 22.3197 41 25.9999Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M26 13L29 9H26L24 7L22 9H19L22 13" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="18" cy="20" r="2" fill="${this.colors(2)}"/><circle cx="15" cy="27" r="2" fill="${this.colors(2)}"/><circle cx="21" cy="25" r="2" fill="${this.colors(2)}"/><circle cx="18" cy="32" r="2" fill="${this.colors(2)}"/></svg>`
			}
		}
	}
</script>