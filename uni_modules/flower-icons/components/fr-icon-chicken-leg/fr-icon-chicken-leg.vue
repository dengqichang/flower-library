<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-chicken-leg-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-978cbc5818cc704)"><path d="M33.3748 33.8744C37.6175 29.6318 34.7891 15.4897 28.4251 9.12572C25.5966 6.29723 17.465 0.286877 8.62606 9.12565C-0.212837 17.9644 5.7977 26.0963 8.62606 28.9246C14.9901 35.2887 29.1322 38.1171 33.3748 33.8744Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M41 41C40.2533 40.2533 36.0222 36.0222 33.9999 33.9999" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><circle cx="42.193" cy="40.0713" r="2.5" transform="rotate(135 42.193 40.0713)" fill="${this.colors(0)}"/><circle cx="40.0719" cy="42.1924" r="2.5" transform="rotate(135 40.0719 42.1924)" fill="${this.colors(0)}"/><circle cx="17" cy="18" r="2" fill="${this.colors(2)}"/><circle cx="12" cy="21" r="2" fill="${this.colors(2)}"/><circle cx="17" cy="24" r="2" fill="${this.colors(2)}"/></g><defs><clipPath id="icon-978cbc5818cc704"><rect width="48" height="48" fill="${this.colors(2)}"/></clipPath></defs></svg>`
			}
		}
	}
</script>