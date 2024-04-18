<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-selfie-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-32156bcde746d3d5)"><path d="M29.2336 6.97919C32.9477 5.4122 40.5099 4.51028 43.0279 12.8715C45.5458 21.2327 34.7205 27.4827 35.0016 20.9696C35.2827 14.4564 42.9968 19.8176 42.8317 24.5317C42.6666 29.2458 37.7695 29.7638 37.7695 29.7638" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><rect x="4.24121" y="15.7776" width="26" height="12" rx="2" transform="rotate(-30 4.24121 15.7776)" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M21.5 19.6699L29 32.6603" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><rect x="26.4014" y="34.1602" width="6" height="10" rx="3" transform="rotate(-30 26.4014 34.1602)" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M11.4014 8.1795L16.5975 5.1795" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M21.9014 26.366L27.0975 23.366" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></g><defs><clipPath id="icon-32156bcde746d3d5"><rect width="48" height="48" fill="${this.colors(2)}"/></clipPath></defs></svg>`
			}
		}
	}
</script>