<template>
	<fr-svg :uuid="`fr-icon-rowing-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.0195 16C32.781 16 35.0195 13.7614 35.0195 11C35.0195 8.23858 32.781 6 30.0195 6C27.2581 6 25.0195 8.23858 25.0195 11C25.0195 13.7614 27.2581 16 30.0195 16Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-miterlimit="2"/><path d="M42 31L35 44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M32.01 40L26 29L9 40L21 20L44 25" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M4 40H44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>