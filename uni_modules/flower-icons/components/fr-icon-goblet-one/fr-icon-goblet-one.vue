<template>
	<fr-svg :id="`fr-icon-goblet-one-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-1b9ae7b045e04bcb)"><path d="M5.73633 24.1211L10.6861 29.0709C15.7629 34.1477 23.9941 34.1477 29.0709 29.0709V29.0709C34.1477 23.994 34.1477 15.7629 29.0709 10.6861L24.1211 5.73632" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M30 29.9998L35.9998 35.9998" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><ellipse cx="13.9996" cy="13.9998" rx="13" ry="7" transform="rotate(-45 13.9996 13.9998)" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><ellipse cx="37.9997" cy="37.9998" rx="6" ry="3" transform="rotate(-45 37.9997 37.9998)" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></g><defs><clipPath id="icon-1b9ae7b045e04bcb"><rect width="48" height="48" fill="${this.colors(2)}"/></clipPath></defs></svg>`
			}
		}
	}
</script>