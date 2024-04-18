<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-split-cells-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 14V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V43C20 43.5523 19.5523 44 19 44H5C4.44772 44 4 43.5523 4 43V34" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M44 34V43C44 43.5523 43.5523 44 43 44H29C28.4477 44 28 43.5523 28 43V5C28 4.44772 28.4477 4 29 4H43C43.5523 4 44 4.44772 44 5V14" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M28 24L44 24.0132" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M4 24.0132L20 24" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/><path d="M39.2275 28.7778L40.8185 27.1868L44.0005 24.0049L40.8185 20.8229L39.2275 19.2319" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M8.75537 28.7861L7.16438 27.1951L3.9824 24.0132L7.16438 20.8312L8.75537 19.2402" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>