<template>
	<fr-svg :id="`fr-icon-clothes-gloves-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg" />
</template>
<script>
	// #ifdef UNI-APP-X
	import icons from "../../mixins/icons.uts";
	// #endif
	// #ifndef UNI-APP-X
	import icons from "../../mixins/icons.js";
	// #endif
	export default {
		mixins: [icons],
		computed: {
			// #ifdef UNI-APP-X
			iconSvg(): string {
			// #endif
			// #ifndef UNI-APP-X
			iconSvg() {
			// #endif
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 4H15C11.2288 4 9.34315 4 8.17157 5.17157C7 6.34315 7 8.22876 7 12V44H35V37C35 37 42 37 42 31V23C42 17 35 17 35 17V12C35 8.22876 35 6.34315 33.8284 5.17157C32.6569 4 30.7712 4 27 4Z" fill="${this.colors(1)}"/><path d="M35 27V17M35 17V12C35 8.22876 35 6.34315 33.8284 5.17157C32.6569 4 30.7712 4 27 4H15C11.2288 4 9.34315 4 8.17157 5.17157C7 6.34315 7 8.22876 7 12V44H35V37C35 37 42 37 42 31C42 29 42 26 42 23C42 17 35 17 35 17Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M14 22V4" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M21 22V4" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M28 22V4" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M12 4H30" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>