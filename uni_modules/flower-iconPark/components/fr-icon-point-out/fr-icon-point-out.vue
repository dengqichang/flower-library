<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-point-out-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《指出》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37 44H17.476C17.3873 44 17.3049 43.9541 17.2581 43.8788L7.86011 28.7273C6.79115 27.0039 7.14475 24.7577 8.69148 23.446C10.6306 21.8016 13.584 22.3036 14.871 24.4963L17.3333 28.6914V7.94203C17.3333 5.76491 19.0982 4 21.2754 4C23.4525 4 25.2174 5.76491 25.2174 7.94203V17.2709C25.2174 17.8564 25.6817 18.3365 26.2669 18.356L37.8882 18.7443C39.0658 18.7836 40 19.7496 40 20.9278V41C40 42.6569 38.6569 44 37 44Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>