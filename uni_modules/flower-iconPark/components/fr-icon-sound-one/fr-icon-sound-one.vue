<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-sound-one-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《音响》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7C9 5.34315 10.3431 4 12 4H36C37.6569 4 39 5.34315 39 7V41C39 42.6569 37.6569 44 36 44H12C10.3431 44 9 42.6569 9 41L9 7Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M24 29C27.866 29 31 25.866 31 22C31 18.134 27.866 15 24 15C20.134 15 17 18.134 17 22C17 25.866 20.134 29 24 29Z" fill="${this.colors(3)}" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><rect x="30" y="8" width="4" height="4" rx="2" fill="${this.colors(2)}"/><path d="M27 36H29" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M19 36H21" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>