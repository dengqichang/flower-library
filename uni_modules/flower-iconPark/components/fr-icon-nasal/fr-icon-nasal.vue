<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-nasal-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《鼻腔》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9875 4C17.108 10.25 16.7846 14.5864 16.0172 17.0092C14.8662 20.6433 6.08203 30.7628 6.08203 36.102C6.08203 41.4412 12.3865 44.3892 15.7908 42.3787" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M32.002 4C31.7773 10.25 32.0486 14.5864 32.8159 17.0092C33.9669 20.6433 42.959 29.4496 42.959 35.2924C42.959 41.1352 36.4466 44.3892 33.0423 42.3787" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M13.0059 34.8337C14.7153 33.8614 16.2019 33.8614 17.4657 34.8337C19.3614 36.292 19.9562 40 24.0084 40C28.0607 40 30.0472 35.8426 32.0001 34.8337C33.3021 34.161 34.6354 34.161 36.0001 34.8337" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M20.2852 22.1455C19.4914 23.0001 18.6514 23.9531 18.0381 25.6138C17.5732 26.8726 17.4803 27.6026 17.416 28.4239" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/></svg>`
			}
		}
	}
</script>