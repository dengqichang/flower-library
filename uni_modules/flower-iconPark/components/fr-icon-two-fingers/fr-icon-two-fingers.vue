<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-two-fingers-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	/**
	 * @description 《两个手指》图标
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5658 27.1824C10.8553 28.3542 10 30.2935 10 33.0002C10 37.0603 14.9753 44.0002 19.4618 44.0002C23.9483 44.0002 26.5502 44.0002 30.9415 44.0002C35.3328 44.0002 38 40.1496 38 37.0603C38 32.7099 38 28.3596 38 24.0093C38 22.3524 36.6569 21.0093 35 21.0093H34.9909C33.3391 21.0093 32 22.3484 32 24.0002" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M13.981 29.4452V11.0059C13.981 9.35036 15.323 8.0083 16.9785 8.0083C16.9813 8.0083 16.9841 8.0083 16.9868 8.00831C18.6482 8.01291 19.9927 9.36106 19.9927 11.0225V24.592" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M19.9927 24.0083V7.01549C19.9927 5.35008 21.3428 4 23.0082 4C24.6736 4 26.0236 5.35008 26.0236 7.01549V24.0083" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M26 23.7158V21.0034C26 19.3466 27.3431 18.0034 29 18.0034C30.6569 18.0034 32 19.3466 32 21.0034V24.0034" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>