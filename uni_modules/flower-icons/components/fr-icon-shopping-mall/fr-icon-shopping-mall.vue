<template>
	<fr-svg :id="`fr-icon-shopping-mall-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44" fill="${this.colors(1)}"/><path d="M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M30 15L40 20.9993V44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M4 44H44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/></svg>`
			}
		}
	}
</script>