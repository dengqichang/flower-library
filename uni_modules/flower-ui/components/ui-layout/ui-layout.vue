<!-- 页面布局 -->
<template>
	<view class="_ui-layout" :style="getCurrentPageBackground(props.backgroundColor)">
		<!-- 背景图 -->
		<image v-if="props.backdrop" class="_ui-layout__backdrop" :mode="props.backdropMode" :src="backdrop" />
		<!-- 顶栏容器 -->
		<view class="_ui-layout__header">
			<!-- 导航容器 -->
			<view>
				<slot name="nav" />
			</view>
			<!-- 顶部容器 -->
			<view>
				<slot name="header" />
			</view>
		</view>
		<!-- 内容容器 -->
		<view class="_ui-layout__main" :style="{paddingBottom:`${fixedFooterHeight}px`}">
			<view class="_ui-layout__main-content">
				<slot />
			</view>
			<!-- 标识牌 -->
			<image v-if="props.signboard" class="_ui-layout__signboard" mode="widthFix" :src="props.signboard" />
		</view>
		<!-- 其它容器 -->
		<slot name="other" />
		<!-- sticky 底部容器 -->
		<view v-if="props.footerMode == 'sticky'" class="_ui-layout__footer-sticky">
			<slot name="footer" />
		</view>
		<!-- fixed 底部容器 -->
		<view v-if="props.footerMode == 'fixed'" class="_ui-layout__footer-fixed" id="footer">
			<slot name="footer" />
		</view>
	</view>
</template>

<script setup lang="ts">
	/**
	 * ui-layout 页面布局
	 * @description 页面布局组件，为了解决页面划分模块的问题
	 * @tutorial 
	 * @property {String} backgroundColor 背景颜色
	 * @property {String} backdrop 页面背景幕布，图片地址
	 * @property {String} backdropMode = [scaleToFill|aspectFit|aspectFill|widthFix|heightFix|top|bottom|center|left|right] 页面背景幕布图片裁剪、缩放的模式
	 *  @value scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
	 *  @value aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
	 *  @value aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
	 *  @value widthFix 宽度不变，高度自动变化，保持原图宽高比不变
	 *  @value heightFix 高度不变，宽度自动变化，保持原图宽高比不变 App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3
	 *  @value top 不缩放图片，只显示图片的顶部区域
	 *  @value bottom 不缩放图片，只显示图片的底部区域
	 *  @value center 不缩放图片，只显示图片的中间区域
	 *  @value left 不缩放图片，只显示图片的左边区域
	 *  @value right 不缩放图片，只显示图片的右边区域
	 *  @value top left 不缩放图片，只显示图片的左上边区域
	 *  @value top right 不缩放图片，只显示图片的右上边区域
	 *  @value bottom left 不缩放图片，只显示图片的左下边区域
	 *  @value bottom right 不缩放图片，只显示图片的右下边区域
	 * @property {String} signboard 页面底部标识牌，图片地址
	 * @property {String} footerMode = [sticky|fixed] 页面底部 footer 插槽显示模式
	 *  @value sticky 粘性定位
	 *  @value fixed 固定定位
	 */
	import { uiLayoutProps, getIsCustomNav, getCurrentPageBackground, defaultInternalSetup } from "@/uni_modules/flower-config";
	import { ref, onMounted, getCurrentInstance, watch, useSlots } from "vue";

	// 处理H5端兼容nav、header的slot内容高度
	// #ifdef H5
	const isNavTop = getIsCustomNav() ? '0px' : '44px';
	// #endif

	// 属性
	const props = defineProps({
		backgroundColor: {
			type: String,
			default: uiLayoutProps.backgroundColor
		},
		backdrop: {
			type: String,
			default: uiLayoutProps.backdrop
		},
		backdropMode: {
			type: String,
			default: uiLayoutProps.backdropMode
		},
		signboard: {
			type: String,
			default: uiLayoutProps.signboard
		},
		footerMode: {
			type: String,
			default: uiLayoutProps.footerMode
		}
	});

	// footer插槽高度
	const fixedFooterHeight = ref(0);
	// 判断footer插槽是否存在内容
	const fixedFooterSlot = useSlots().footer;
	// 访问内部组件实例
	const _this = getCurrentInstance();
	// 当footer插槽存在内容，则获取高度
	if (!!fixedFooterSlot && props.footerMode == "fixed") {
		// 查询节点信息
		const createSelectorQuery = () => { uni.createSelectorQuery().in(_this).select('#footer').boundingClientRect(res => { fixedFooterHeight.value = res.height; }).exec(); };
		onMounted(() => { createSelectorQuery(); });
		watch(() => defaultInternalSetup.increase, () => { createSelectorQuery(); }, { deep: true });
	};
</script>

<style scoped>
	._ui-layout__backdrop {
		position: fixed;
		width: 100vw;
		height: 100vh;
	}

	._ui-layout__main {
		flex: 1;
		z-index: 1;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	._ui-layout__main-content {
		flex: 1;
	}

	._ui-layout__signboard {
		width: 100vw;
	}

	._ui-layout__footer-sticky {
		position: sticky;
		bottom: 0;
		z-index: 2;
	}

	._ui-layout__footer-fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2;
	}

	._ui-layout {
		/* #ifndef H5 */
		min-height: 100vh;
		/* #endif */
		/* #ifdef H5 */
		min-height: calc(100vh - v-bind(isNavTop));
		/* #endif */
		display: flex;
		flex-direction: column;
		position: relative;
	}

	._ui-layout__header {
		position: sticky;
		z-index: 2;
		top: 0px;
		/* #ifndef H5 */
		top: 0px;
		/* #endif */
		/* #ifdef H5 */
		top: v-bind(isNavTop);
		/* #endif */
	}
</style>