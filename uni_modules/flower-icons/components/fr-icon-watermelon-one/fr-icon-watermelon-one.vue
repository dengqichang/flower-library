<template>
	<fr-svg :uuid="`fr-icon-watermelon-one-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4L41 33.92C41 33.92 36.0457 38 24 38C11.9543 38 7 33.92 7 33.92L24 4Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="24" cy="17" r="2" fill="${this.colors(2)}"/><circle cx="27" cy="23" r="2" fill="${this.colors(2)}"/><circle cx="21" cy="23" r="2" fill="${this.colors(2)}"/><path d="M41 39.9199C41 39.9199 36.0457 43.9999 24 43.9999C11.9543 43.9999 7 39.9199 7 39.9199" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}"/></svg>`
			}
		}
	}
</script>