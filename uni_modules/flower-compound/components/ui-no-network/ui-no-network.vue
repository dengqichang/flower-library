<template>
	<view v-if="judgeNetworkError()">
		<!-- 行网络状态 -->
		<view v-if="props.mode == 'line'" class="_ui-no-network__line" :style="getBackgroundColors('danger-3')" @tap="navigateTo">
			<icon-attention color="danger" :size="Number(props.size) + 8" is-fill />
			<ui-text width="100%" color="danger" lines="1" margin="0 40" :size="props.size">{{props.tips}}</ui-text>
			<icon-right color="danger" :size="Number(props.size) + 8" />
		</view>
		<!-- 页面网络状态 -->
		<view v-if="props.mode == 'page'" class="_ui-no-network__empty">
			<ui-empty-signal :description="props.tips" offsetBottom="35%">
				<!-- 网络设置按钮，待实现 -->
				
			</ui-empty-signal>
		</view>
	</view>
</template>

<script setup lang="ts">
	/**
	 * ui-no-network 无网络提示
	 * @description 此组件集成了文本类在项目中的常用功能，包括状态，超出行省略，首行缩进...等功能。几乎涵盖使用的大部分场景。
	 * @tutorial 
	 * @property {String} router 跳转网络设置路由
	 * @property {String} tips 无网络提示文本
	 * @property {String,Number} size 字号
	 * @property {String} mode = [page|line] 无网络显示模式
	 *  @value page 页面显示
	 *  @value line 行显示
	 */
	import { uiNoNetworkProps, getBackgroundColors, judgeNetworkError } from "@/uni_modules/flower-config";
	import { watch } from "vue";

	const emits = defineEmits(['change']);

	const props = defineProps({
		router: { type: String, default: uiNoNetworkProps.router },
		tips: { type: String, default: uiNoNetworkProps.tips },
		size: { type: [Number, String], default: uiNoNetworkProps.size },
		mode: { type: String, default: uiNoNetworkProps.mode },
	});

	const navigateTo = () : void => {
		if (!!props.router) {
			uni.navigateTo({ url: props.router })
		} else {
			console.error("未配置检查网络设置跳转路由");
		}
	};

	watch(() => judgeNetworkError(), () => {
		emits("change", {
			isConnected: !judgeNetworkError()
		});
	});
</script>

<style scoped>
	._ui-no-network__line {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24rpx 40rpx;
	}

	._ui-no-network__empty {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}
</style>