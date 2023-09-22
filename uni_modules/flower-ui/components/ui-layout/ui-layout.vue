<!-- 页面布局 -->
<template>
	<view class="_ui-layout" :style="layoutStyle">
		<!-- 顶栏容器 -->
		<view class="_ui-layout__header" :style="navTopStyle">
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
		<view class="_ui-layout__main">
			<view class="_ui-layout__main-content">
				<slot />
			</view>
			<!-- 标识牌 -->
			<image v-if="signboardSrc" class="_ui-layout__signboard" mode="widthFix" :src="signboardSrc" />
		</view>
		<!-- 其它容器 -->
		<slot name="other" />
		<!-- 底部容器 -->
		<view class="_ui-layout__footer">
			<slot name="footer" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 是否禁用导航栏
				isCustomNav: uni.getSystemInfoSync().windowHeight == uni.getSystemInfoSync().screenHeight
			}
		},
		props: {
			signboardSrc: {
				type: String,
				default: ""
			}
		},
		computed: {
			navTopStyle() {
				return {
					// #ifdef H5
					top: this.isCustomNav ? '0px' : '44px'
					// #endif
				}
			},
			layoutStyle() {
				return {
					minHeight: `${uni.getSystemInfoSync().windowHeight}px`
				}
			}
		}
	}
</script>

<style scoped>
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
		width: 100%;
	}

	._ui-layout__footer {
		position: sticky;
		bottom: 0;
		z-index: 2;
	}

	._ui-layout {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	._ui-layout__header {
		position: sticky;
		z-index: 2;
		top: 0rpx;
	}
</style>