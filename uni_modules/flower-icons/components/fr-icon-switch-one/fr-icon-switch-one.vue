<template>
	<fr-svg :uuid="`fr-icon-switch-one-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg || ''" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="19" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><rect x="36.0063" y="19.3335" width="10.5189" height="24.0125" rx="5.25944" transform="rotate(90 36.0063 19.3335)" fill="${this.colors(3)}" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}"/><rect x="36.0063" y="29.8525" width="10" height="10" rx="5" transform="rotate(-180 36.0063 29.8525)" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>