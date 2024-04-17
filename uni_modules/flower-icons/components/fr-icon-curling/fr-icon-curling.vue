<template>
	<fr-svg :uuid="`fr-icon-curling-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38 42H10C6.69 42 4 39.32 4 36V28C4 24.69 6.68 22 10 22H38C41.31 22 44 24.68 44 28V36C44 39.32 41.32 42 38 42Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-miterlimit="2" stroke-linejoin="${this.strokeLinejoin}"/><path d="M4 32H44" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M10 22L16.48 7.2C16.79 6.47 17.51 6 18.31 6H35.5C37.43 6 39 7.57 39 9.5C39 11.43 37.43 13 35.5 13H22V22H10Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>