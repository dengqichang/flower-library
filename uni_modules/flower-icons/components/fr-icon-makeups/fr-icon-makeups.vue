<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-makeups-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M37.6098 9.47214L37.8652 10.2582H38.6917L38.023 10.744L38.2784 11.5301L37.6098 11.0443L36.9411 11.5301L37.1965 10.744L36.5278 10.2582H37.3543L37.6098 9.47214Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M16 31C16 31 18 35 24 35C30 35 32 31 32 31" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="17" cy="22" r="3" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><circle cx="31" cy="22" r="3" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>