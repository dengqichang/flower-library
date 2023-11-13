<template>
	<text :class="['fr-icon-align-text-right-one',`fr-icon__${type}`]" :style="[iconStyle]">{{showIcon}}</text>
</template>

<script lang="uts">
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', { 'fontFamily': 'icon-align-text-right-one', 'src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-align-text-right-one.ttf")}')` });
	// #endif
	export default {
		data() {return {}},
		props: {
			isFill: { type: Boolean, default: false },
			type: { type: String, default: "" },
			color: { type: String, default: "" },
			size: { type: Number, default: 28 },
			isWeight: { type: Boolean, default: false }
		},
		computed: {
			iconStyle() : UTSJSONObject {
				let style : UTSJSONObject = JSON.parse<UTSJSONObject>(`{"fontSize":"${this.size}rpx"}`)!;
				if (this.color != "") { style['color'] = `${this.color}`; };
				if (this.isWeight) { style['fontWeight'] = `bold`; };
				return style;
			},
			showIcon() : string {
				if (this.isFill) {return '\ue9b4' } else {return '\ue8ad'};
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/var.scss";
	/* #ifndef APP-PLUS-NVUE */
	@font-face {font-family: "icon-align-text-right-one";src: url('/static/iconfont/icon-align-text-right-one.ttf');}
	/* #endif */
	.fr-icon-align-text-right-one {font-family: icon-align-text-right-one;}
</style>