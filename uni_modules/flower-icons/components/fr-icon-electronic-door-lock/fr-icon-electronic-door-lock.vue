<template>
	<fr-svg :uuid="`fr-icon-electronic-door-lock-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg || ''" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="26" height="40" rx="2" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><rect x="20" y="30" width="${this.size}" height="8" rx="4" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="12" cy="12" r="2" fill="${this.colors(0)}"/><circle cx="12" cy="18" r="2" fill="${this.colors(0)}"/><circle cx="12" cy="24" r="2" fill="${this.colors(0)}"/><circle cx="19" cy="12" r="2" fill="${this.colors(0)}"/><circle cx="19" cy="18" r="2" fill="${this.colors(0)}"/><circle cx="19" cy="24" r="2" fill="${this.colors(0)}"/><circle cx="26" cy="12" r="2" fill="${this.colors(0)}"/><circle cx="26" cy="18" r="2" fill="${this.colors(0)}"/><circle cx="26" cy="24" r="2" fill="${this.colors(0)}"/></svg>`
			}
		}
	}
</script>