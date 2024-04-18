<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-quadrilateral-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.038 8H7C5.34315 8 4 9.34315 4 11V37C4 38.6569 5.34315 40 7 40H39.413C41.5764 40 43.0286 37.7796 42.1614 35.7975L30.7864 9.79754C30.3087 8.70558 29.2298 8 28.038 8Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>