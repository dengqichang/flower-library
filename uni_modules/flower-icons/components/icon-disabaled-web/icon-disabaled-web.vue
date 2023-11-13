<template>
	<text :class="['fr-icon-disabaled-web',`fr-icon__${type}`]" :style="[iconStyle]">{{showIcon}}</text>
</template>

<script lang="uts">
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', { 'fontFamily': 'icon-disabaled-web', 'src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-disabaled-web.ttf")}')` });
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
				if (this.isFill) {return '\ue785' } else {return '\ue6eb'};
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/var.scss";
	/* #ifndef APP-PLUS-NVUE */
	@font-face {font-family: "icon-disabaled-web";src: url('/static/iconfont/icon-disabaled-web.ttf');}
	/* #endif */
	.fr-icon-disabaled-web {font-family: icon-disabaled-web;}
</style>