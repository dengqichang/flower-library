<template>
	<fr-svg :uuid="`fr-icon-diamond-two-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg || ''" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92349 22.7879L22.4091 5.08801C23.2096 4.03746 24.7904 4.03746 25.5909 5.08801L39.0765 22.7879C39.622 23.5039 39.622 24.4961 39.0765 25.2121L25.5909 42.912C24.7904 43.9625 23.2096 43.9625 22.4091 42.912L8.92349 25.2121C8.37798 24.4961 8.37798 23.5039 8.92349 22.7879Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>