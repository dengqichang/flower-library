<template>
	<text :class="['fr-icon-redo',`fr-icon__${type}`]" :style="[iconStyle]">{{showIcon}}</text>
</template>

<script lang="uts">
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', { 'fontFamily': 'icon-redo', 'src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-redo.ttf")}')` });
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
				if (this.isFill) {return '\ue773' } else {return '\ue773'};
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/var.scss";
	/* #ifndef APP-PLUS-NVUE */
	@font-face {font-family: "icon-redo";src: url('/static/iconfont/icon-redo.ttf');}
	/* #endif */
	.fr-icon-redo {font-family: icon-redo;}
</style>