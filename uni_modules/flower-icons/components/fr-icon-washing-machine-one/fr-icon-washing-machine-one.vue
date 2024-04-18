<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-washing-machine-one-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="4" width="32" height="40" rx="2" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M8 12C8 13.1046 8.89543 14 10 14H38C39.1046 14 40 13.1046 40 12V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V12Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><circle cx="14" cy="9" r="2" fill="${this.colors(2)}"/><circle cx="20" cy="9" r="2" fill="${this.colors(2)}"/><circle cx="24" cy="29" r="7" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>