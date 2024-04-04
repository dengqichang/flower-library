<template>
	<fr-svg :uuid="`fr-icon-share-sys-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3654 41.6322C6.44902 37.9812 4 32.7766 4 27C4 15.9543 12.9543 7 24 7C35.0457 7 44 15.9543 44 27C44 32.7766 41.551 37.9812 37.6346 41.6322" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M15.1375 36.5109C12.5919 34.1378 11 30.7548 11 27C11 19.8203 16.8203 14 24 14C31.1797 14 37 19.8203 37 27C37 30.7548 35.4081 34.1378 32.8625 36.5109" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M19.9096 31.3897C18.7347 30.2944 18 28.733 18 27C18 23.6863 20.6863 21 24 21C27.3137 21 30 23.6863 30 27C30 28.733 29.2653 30.2944 28.0904 31.3897" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>