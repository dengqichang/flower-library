<template>
	<fr-svg :id="`fr-icon-chart-ring-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.7756 20.9938C42.4735 12.3555 35.6463 5.5277 27.0084 4.22461M20.9757 4.22702C11.3651 5.68478 4 13.9822 4 23.9998C4 34.0212 11.3705 42.321 20.9863 43.7743C21.9692 43.9228 22.9756 43.9998 24 43.9998C25.0209 43.9998 26.024 43.9233 27.0038 43.7758C35.6458 42.4741 42.4762 35.6427 43.7764 27.0003" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>