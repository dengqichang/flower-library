<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-monkey-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《猴》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2 21C12.4312 19.531 12 17.8817 12 16.1389C12 9.98704 17.3726 5 24 5C30.6274 5 36 9.98704 36 16.1389C36 17.8817 35.5688 19.531 34.8 21" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><ellipse cx="24" cy="31" rx="15" ry="12" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M30.5177 33.8742C26.8486 37.5433 20.7965 37.44 17 33.6435" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M12 23C8.68629 23 6 20.7614 6 18C6 15.2386 8.68629 13 12 13" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M36 23C39.3137 23 42 20.7614 42 18C42 15.2386 39.3137 13 36 13" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><circle cx="20" cy="14" r="2" fill="${this.colors(0)}"/><circle cx="28" cy="14" r="2" fill="${this.colors(0)}"/></svg>`
			}
		}
	}
</script>