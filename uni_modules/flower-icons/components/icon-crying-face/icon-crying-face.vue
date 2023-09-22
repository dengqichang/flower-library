<template>
	<text :class="['flower-icons']" :style="iconStyle">{{showIcon}}</text>
</template>
<script>
	// #ifdef APP-NVUE
	import iconUrl from './iconfont.ttf';
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {'fontFamily': "flower-icon-crying-face",'src': "url('" + iconUrl + "')"});
	// #endif
	export default {
		props: {
			isFill: {type: Boolean,default: false},
			color: {type: String,default: "#000000"},
			size: {type: [String, Number],default: 28},
			isWeight: {type: Boolean,default: false}
		},
		computed: {
			iconStyle() {
				let style = {fontSize:`${this.size}rpx`,color:this.color};
				if (this.isWeight) {style.fontWeight = 'bold';};
				return style;
			},
			showIcon() {
				if (this.isFill) {return '\ue6cc'} else {return '\ue6a8'};
			}
		}
	}
</script>
<style scoped>
	/* #ifndef APP-NVUE */
	@font-face {font-family: flower-icon-crying-face;src: url('iconfont.ttf') format('truetype');}
	.flower-icons {font-family: flower-icon-crying-face;}
	/* #endif */
	/* #ifdef APP-NVUE */
	.flower-icons {font-family: flower-icon-crying-face;}
	/* #endif */
</style>
