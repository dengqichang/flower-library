<template>
	<text :class="['fr-icon-great-wall',`fr-icon__${type}`]" :style="[iconStyle]">{{showIcon}}</text>
</template>
<!-- #ifdef VUE3 -->
<script lang="uts">
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', { 'fontFamily': 'icon-great-wall', 'src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-great-wall.ttf")}')` });
	// #endif
	export default {data() { return {} },props: {isFill: { type: Boolean, default: false },type: { type: String, default: "" },color: { type: String, default: "" },size: { type: Number, default: 28 },isWeight: { type: Boolean, default: false }},computed: {iconStyle() : UTSJSONObject {let style : UTSJSONObject = JSON.parse<UTSJSONObject>(`{"fontSize":"${this.size}rpx"}`)!;if (this.color != "") { style['color'] = `${this.color}`; };if (this.isWeight) { style['fontWeight'] = `bold`; };return style;},showIcon() : string {if (this.isFill) { return '\ue70f' } else { return '\ue70f' };}}}
</script>
<!-- #endif -->
<!-- #ifdef VUE2 -->
<script>
	// #ifdef APP-PLUS-NVUE
	const domModule = weex.requireModule('dom');domModule.addRule('fontFace', {'fontFamily': 'icon-great-wall','src': `url('file:/${plus.io.convertLocalFileSystemURL("/static/iconfont/icon-great-wall.ttf")}')`});
	// #endif
	export default {data() {return {}},props: {isFill: {type: Boolean,default: false},type: {type: String,default: ""},color: {type: String,default: ""},size: {type: Number,default: 28},isWeight: {type: Boolean,default: false}},computed: {iconStyle() {let style = {fontSize: `${this.size}rpx`};if (this.color != "") {style['color'] = `${this.color}`;};if (this.isWeight) {style['fontWeight'] = `bold`;};return style;},showIcon() {if (this.isFill) {return '\ue70f'} else {return '\ue70f'};}}}
</script>
<!-- #endif -->
<style lang="scss">
	@import "../../scss/var.scss";
	/* #ifndef APP-PLUS-NVUE */
	@font-face {font-family: "icon-great-wall";src: url('/static/iconfont/icon-great-wall.ttf');}
	/* #endif */
	.fr-icon-great-wall {font-family: icon-great-wall;}
</style>