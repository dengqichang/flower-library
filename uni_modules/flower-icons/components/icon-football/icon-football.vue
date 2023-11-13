<template>
	<text :class="['fr-icon-football',`fr-icon__${type}`]" :style="[iconStyle]">{{showIcon}}</text>
</template>

<script lang="uts">
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', { 'fontFamily': 'icon-football', 'src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-football.ttf")}')` });
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
				if (this.isFill) {return '\ue7b2' } else {return '\ue7b2'};
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/var.scss";
	/* #ifndef APP-PLUS-NVUE */
	@font-face {font-family: "icon-football";src: url('/static/iconfont/icon-football.ttf');}
	/* #endif */
	.fr-icon-football {font-family: icon-football;}
</style>