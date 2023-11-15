<template>
	<text :class="['fr-icon-videocamera',`fr-icon__${type}`]" :style="[iconStyle]">{{showIcon}}</text>
</template>
<!-- #ifdef VUE3 -->
<script lang="uts">
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', { 'fontFamily': 'icon-videocamera', 'src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-videocamera.ttf")}')` });
	// #endif
	export default {data() { return {} },props: {isFill: { type: Boolean, default: false },type: { type: String, default: "" },color: { type: String, default: "" },size: { type: Number, default: 28 },isWeight: { type: Boolean, default: false }},computed: {iconStyle() : UTSJSONObject {let style : UTSJSONObject = JSON.parse<UTSJSONObject>(`{"fontSize":"${this.size}rpx"}`)!;if (this.color != "") { style['color'] = `${this.color}`; };if (this.isWeight) { style['fontWeight'] = `bold`; };return style;},showIcon() : string {if (this.isFill) { return '\ue91c' } else { return '\ue878' };}}}
</script>
<!-- #endif -->
<!-- #ifdef VUE2 -->
<script>
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');domModule.addRule('fontFace', {'fontFamily': 'icon-videocamera','src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-videocamera.ttf")}')`});
	// #endif
	export default {data() {return {}},props: {isFill: {type: Boolean,default: false},type: {type: String,default: ""},color: {type: String,default: ""},size: {type: Number,default: 28},isWeight: {type: Boolean,default: false}},computed: {iconStyle() {let style = {fontSize: `${this.size}rpx`};if (this.color != "") {style['color'] = `${this.color}`;};if (this.isWeight) {style['fontWeight'] = `bold`;};return style;},showIcon() {if (this.isFill) {return '\ue91c'} else {return '\ue878'};}}}
</script>
<!-- #endif -->
<style lang="scss">
	@import "../../scss/var.scss";
	/* #ifndef APP-PLUS-NVUE */
	@font-face {font-family: "icon-videocamera";src: url('/static/iconfont/icon-videocamera.ttf');}
	/* #endif */
	.fr-icon-videocamera {font-family: icon-videocamera;}
</style>