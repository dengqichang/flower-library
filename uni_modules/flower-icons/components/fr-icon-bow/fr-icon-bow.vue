<template>
	<fr-svg :uuid="`fr-icon-bow-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :isCache="true" :src="iconSvg" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.54363 14.2624C11.403 15.2288 16.603 18.7538 20 23C20 33.6307 12.6443 36.2369 7.22885 36.8338C5.75104 36.9966 4.77796 35.4327 5.37604 34.0715C6.82523 30.7732 8 27.2992 8 25C8 22.6087 6.09391 19.5821 4.81396 16.4265C4.3249 15.2208 5.26748 14.0087 6.54363 14.2624Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><path d="M41.4564 14.2624C36.597 15.2288 31.397 18.7538 28 23C28 33.6307 35.3557 36.2369 40.7711 36.8338C42.249 36.9966 43.222 35.4327 42.624 34.0715C41.1748 30.7732 40 27.2992 40 25C40 22.6087 41.9061 19.5821 43.186 16.4265C43.6751 15.2208 42.7325 14.0087 41.4564 14.2624Z" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/><rect x="20" y="21" width="8" height="8" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}" stroke-linecap="${this.strokeLinecap}" stroke-linejoin="${this.strokeLinejoin}"/></svg>`
			}
		}
	}
</script>