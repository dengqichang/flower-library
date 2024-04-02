<template>
	<fr-svg :uuid="`fr-icon-swallow-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg || ''" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99902 33.3135L24.0339 6.94269C24.958 4.9809 26.6267 4 29.0402 4C32.6603 4 35.0172 8.98626 35.0172 8.98626C35.0172 8.98626 36.3445 9.18401 38.999 9.57953C34.9888 9.64514 32.6699 10.452 32.0424 12C31.1012 14.3221 34.4983 16.7308 35.0172 20.0039C35.5361 23.2769 33.4663 28.8051 28.4882 31.567C25.1694 33.4083 21.0262 33.8859 16.0583 33L9.95844 44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9424 27.978C21.5213 23.3284 23.2169 20.3429 24.0293 19.0215C25.2478 17.0394 30.2745 17.637 28.4685 22.5843C27.2645 25.8824 24.0891 27.6803 18.9424 27.978Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>