<template>
	<fr-svg :uuid="`fr-icon-folder-one-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6C5 5.44772 5.44772 5 6 5L16 5C16.5523 5 17 5.44772 17 6L17 42C17 42.5523 16.5523 43 16 43H6C5.44772 43 5 42.5523 5 42L5 6Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="11" cy="34.9999" r="2" fill="${this.colors(2)}"/><path d="M11 10.9999V24.9999" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M23.9775 9.75562L34.0372 7.24071C34.5701 7.10747 35.1107 7.42907 35.248 7.96097L42.7482 37.0244C42.887 37.562 42.5611 38.1097 42.0225 38.2444L31.9628 40.7593C31.4299 40.8925 30.8893 40.5709 30.752 40.039L23.2518 10.9756C23.113 10.438 23.4389 9.89029 23.9775 9.75562Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><circle cx="35" cy="32" r="2" fill="${this.colors(2)}"/><path d="M31 16L33.5 26" stroke="${this.colors(2)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>