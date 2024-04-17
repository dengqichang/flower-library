<template>
	<fr-svg :uuid="`fr-icon-tool-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 16C44 22.6274 38.6274 28 32 28C29.9733 28 28.0639 27.4975 26.3896 26.6104L9 44L4 39L21.3896 21.6104C20.5025 19.9361 20 18.0267 20 16C20 9.37258 25.3726 4 32 4C34.0267 4 35.9361 4.50245 37.6104 5.38959L30 13L35 18L42.6104 10.3896C43.4975 12.0639 44 13.9733 44 16Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>