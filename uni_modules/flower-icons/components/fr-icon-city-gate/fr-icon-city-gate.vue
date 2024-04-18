<template>
	<fr-svg @click="onClick" :uuid="`fr-icon-city-gate-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 11H32C32 11 37.0476 13.9664 39 15C40.0914 15.5778 44 16 44 16C44 16 42.1839 16.6487 41 17C39.4563 17.458 37 18 37 18H24H11C11 18 8.54366 17.458 7 17C5.81607 16.6487 4 16 4 16C4 16 7.90857 15.5778 9 15C10.9524 13.9664 15 11 15 11Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M17 11L24 4L30 11H17Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M35 18V24" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M12 18V24" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/><path d="M4 44L6 24H42L44 44H4Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M20 38C20 35.7909 21.7909 34 24 34V34C26.2091 34 28 35.7909 28 38V44H20V38Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>