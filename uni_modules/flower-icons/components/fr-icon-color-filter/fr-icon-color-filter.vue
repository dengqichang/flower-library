<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-color-filter-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 40.9444C26.123 42.8446 28.9266 44 32 44C38.6274 44 44 38.6274 44 32C44 26.4085 40.1757 21.7102 35 20.3781" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M13 20.3781C7.82432 21.7102 4 26.4085 4 32C4 38.6274 9.37258 44 16 44C22.6274 44 28 38.6274 28 32C28 30.4506 27.7063 28.9697 27.1716 27.6101" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M24 28C30.6274 28 36 22.6274 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 22.6274 17.3726 28 24 28Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>