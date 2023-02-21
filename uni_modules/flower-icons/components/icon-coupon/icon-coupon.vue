<template><text :class="['flower-icons',customClass]" :style="[iconStyle]">{{showIcon}}</text></template>
<script>
	// #ifdef APP-NVUE
	import iconUrl from './iconfont.ttf';const domModule = weex.requireModule('dom');domModule.addRule('fontFace', {'fontFamily': "flower-icon-coupon",'src': "url('" + iconUrl + "')"});
	// #endif
	export default {
		props: {isFill: Boolean,color: String,isBold: Boolean,size: [String, Number],lineHeight: [String, Number],customStyle: Object,customClass: Object},
		computed:{
			iconStyle(){let style = {...this.customStyle};if (!!this.size) {style.fontSize = this.typeUnit(this.size);};if (!!this.color) {style.color = this.color;};if (this.isBold) {style.fontWeight = 'bold';};if (!!this.lineHeight) {style.lineHeight = this.typeUnit(this.lineHeight);};return style;},
			showIcon(){if (this.isFill) {return '\ue72b'} else {return '\ue6ec'};}
		},
		methods:{
			typeUnit(e){if (typeof e == "number") {return `${e}rpx`} else if (typeof e == "string") {if (e.indexOf('px') != -1) {return `${e}`} else {return `${e}rpx`};};}
		}
	}
</script>
<style scoped>
	/* #ifndef APP-NVUE */
	@font-face {font-family: flower-icons;src: url('iconfont.ttf') format('truetype');}.flower-icons {font-family: flower-icons;font-size: 28rpx;}
	/* #endif */
	/* #ifdef APP-NVUE */
	.flower-icons {font-family: flower-icon-coupon;font-size: 28rpx;}
	/* #endif */
</style>
