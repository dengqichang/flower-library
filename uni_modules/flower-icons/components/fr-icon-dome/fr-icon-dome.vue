<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-dome-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 43H44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M5 24C5 24 14 23 24 23C34 23 43 24 43 24" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M6 18C6 18 15.0526 14 24 14C32.9474 14 42 18 42 18" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M5 30C5 30 14 32 24 32C34 32 43 30 43 30" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M24 6C12.9543 6 4 14.9543 4 26C4 33.8085 7.47484 39.7064 14 43H34C40.5252 39.7064 44 33.8085 44 26C44 14.9543 35.0457 6 24 6Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M24 6C20.134 6 17 14.9543 17 26C17 33.1773 18.0125 39.4716 20 43H28C29.9875 39.4716 31 33.1773 31 26C31 14.9543 27.866 6 24 6Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>