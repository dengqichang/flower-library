<template>
	<fr-svg :uuid="`fr-icon-octagon-${size}${strokeWidth}${theme}${fill}${strokeLinecap}${strokeLinejoin}`" :width="size" :height="size" :src="iconSvg || ''" />
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
				return `<?xml version="1.0" encoding="UTF-8"?><svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4102 42.3887L5.56076 32.1812C5.20103 31.8083 5 31.3105 5 30.7924V17.2076C5 16.6895 5.20103 16.1917 5.56076 15.8188L15.4102 5.61126C15.7871 5.22064 16.3066 5 16.8494 5H31.1506C31.6934 5 32.2129 5.22064 32.5898 5.61126L42.4392 15.8188C42.799 16.1917 43 16.6895 43 17.2076V30.7924C43 31.3105 42.799 31.8083 42.4392 32.1812L32.5898 42.3887C32.2129 42.7794 31.6934 43 31.1506 43H16.8494C16.3066 43 15.7871 42.7794 15.4102 42.3887Z" fill="${this.colors(1)}" stroke="${this.colors(0)}" stroke-width="${this.strokeWidth}"/></svg>`
			}
		}
	}
</script>