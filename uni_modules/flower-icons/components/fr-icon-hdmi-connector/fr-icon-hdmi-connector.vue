<template>
	<fr-svg :id="`fr-icon-hdmi-connector-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M29 43C29 40.2386 26.7614 38 24 38C21.2386 38 19 40.2386 19 43" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M15.5 42.1091C18.0797 43.3221 20.9607 44 24 44C27.0393 44 29.9203 43.3221 32.5 42.1091" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="15" cy="15" r="3" fill="${this.colors(2)}"/><circle cx="11" cy="23" r="3" fill="${this.colors(2)}"/><circle cx="24" cy="11" r="3" fill="${this.colors(2)}"/><circle cx="33" cy="15" r="3" fill="${this.colors(2)}"/><circle cx="37" cy="23" r="3" fill="${this.colors(2)}"/></svg>`
			}
		}
	}
</script>