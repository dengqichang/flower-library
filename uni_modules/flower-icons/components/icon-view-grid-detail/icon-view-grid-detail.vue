<template>
	<text :class="['fr-icon-view-grid-detail',`fr-icon__${type}`]" :style="[iconStyle]">{{showIcon}}</text>
</template>
<!-- #ifdef VUE3 -->
<script lang="uts">
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', { 'fontFamily': 'icon-view-grid-detail', 'src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-view-grid-detail.ttf")}')` });
	// #endif
	export default {props: {isFill: { type: Boolean, default: false },type: { type: String, default: "" },color: { type: String, default: "" },size: { type: Number, default: 28 },isWeight: { type: Boolean, default: false }},computed: {iconStyle() : UTSJSONObject {let style : UTSJSONObject = JSON.parse<UTSJSONObject>(`{"fontSize":"${this.size}rpx"}`)!;if (this.color != "") { style['color'] = `${this.color}`; };if (this.isWeight) { style['fontWeight'] = `bold`; };return style;},showIcon() : string {if (this.isFill) { return '\ue9b9' } else { return '\ue8da' };}}}
</script>
<!-- #endif -->
<!-- #ifdef VUE2 -->
<script>
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');domModule.addRule('fontFace', {'fontFamily': 'icon-view-grid-detail','src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-view-grid-detail.ttf")}')`});
	// #endif
	export default {props: {isFill: {type: Boolean,default: false},type: {type: String,default: ""},color: {type: String,default: ""},size: {type: Number,default: 28},isWeight: {type: Boolean,default: false}},computed: {iconStyle() {let style = {fontSize: `${this.size}rpx`};if (this.color != "") {style['color'] = `${this.color}`;};if (this.isWeight) {style['fontWeight'] = `bold`;};return style;},showIcon() {if (this.isFill) {return '\ue9b9'} else {return '\ue8da'};}}}
</script>
<!-- #endif -->
<style lang="scss">
	@import "../../scss/var.scss";
	/* #ifndef APP-PLUS-NVUE */
	@font-face {font-family: "icon-view-grid-detail";src: url('/static/iconfont/icon-view-grid-detail.ttf');}
	/* #endif */
	.fr-icon-view-grid-detail {font-family: icon-view-grid-detail;}
</style>