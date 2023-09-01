<template>
	<view :style="getCurrentNavBackground(props.backgroundColor)">
		<!-- 状态栏高度 -->
		<view :style="{height:statusBarHeight}" />
		<!-- 默认导航 -->
		<view class="__ui-navigation__default" v-if="props.mode == 'default'">
			<view class="__ui-navigation__default-left">
				<icon-left :color="getCurrentNavTextStyle()" size="42" padding="24 32" isWeight
					@tap="onNavigateBack()" />
			</view>
			<view class="__ui-navigation__default-center">
				<ui-text :color="getCurrentNavTextStyle()" size="32" weight="500">{{getCurrentPageTitle()}}</ui-text>
			</view>
			<view class="__ui-navigation__default-right">
				<slot />
			</view>
		</view>
		<view v-if="props.mode == 'custom'">
			<slot />
		</view>
	</view>
</template>

<script setup lang="ts">
	import { getCurrentPageTitle, getCurrentNavBackground, getCurrentNavTextStyle } from "@/uni_modules/flower-config";

	const statusBarHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;

	const props = defineProps({
		backgroundColor: {
			type: [String, Object],
			default: () => {
				return ""
			}
		},
		mode: {
			type: String,
			default: "default"
		}
	});

	const onNavigateBack = () => {
		uni.navigateBack()
	}
</script>

<style scoped>
	.__ui-navigation__default {
		display: flex;
		align-items: center;
	}

	.__ui-navigation__default-left {
		flex: 1;
	}

	.__ui-navigation__default-center {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.__ui-navigation__default-right {
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}
</style>