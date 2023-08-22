<template>
	<ui-empty-loading v-if="props.statusCode== 0" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
		<slot />
	</ui-empty-loading>
	<!-- 403 -->
	<ui-empty-permission v-else-if="props.statusCode == 403" :offsetBottom="props.offsetBottom"
		:offsetTop="props.offsetTop">
		<slot />
	</ui-empty-permission>
	<!-- 404 -->
	<ui-empty-html v-else-if="props.statusCode == 404" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
		<slot />
	</ui-empty-html>
	<!-- 500 -->
	<ui-empty-server v-else-if="props.statusCode == 500" :offsetBottom="props.offsetBottom"
		:offsetTop="props.offsetTop">
		<slot />
	</ui-empty-server>
	<view v-else-if="props.statusCode== 200 && source.length == 0">
		<ui-empty-data v-if="props.mode == 'data'" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
			<slot />
		</ui-empty-data>
		<ui-empty-shopping v-if="props.mode == 'shopping'" :offsetBottom="props.offsetBottom"
			:offsetTop="props.offsetTop">
			<slot />
		</ui-empty-shopping>
		<ui-empty-null v-if="props.mode == 'null'" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
			<slot />
		</ui-empty-null>
		<ui-empty-agenda v-if="props.mode == 'agenda'" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
			<slot />
		</ui-empty-agenda>
		<ui-empty-coupon v-if="props.mode == 'coupon'" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
			<slot />
		</ui-empty-coupon>
		<ui-empty-card v-if="props.mode == 'card'" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
			<slot />
		</ui-empty-card>
		<ui-empty-collection v-if="props.mode == 'collection'" :offsetBottom="props.offsetBottom"
			:offsetTop="props.offsetTop">
			<slot />
		</ui-empty-collection>
		<ui-empty-folder v-if="props.mode == 'folder'" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
			<slot />
		</ui-empty-folder>
		<ui-empty-search v-if="props.mode == 'search'" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
			<slot />
		</ui-empty-search>
		<ui-empty-record v-if="props.mode == 'record'" :offsetBottom="props.offsetBottom" :offsetTop="props.offsetTop">
			<slot />
		</ui-empty-record>
		<ui-empty-message v-if="props.mode == 'message'" :offsetBottom="props.offsetBottom"
			:offsetTop="props.offsetTop">
			<slot />
		</ui-empty-message>
		<ui-empty-direction v-if="props.mode == 'direction'" :offsetBottom="props.offsetBottom"
			:offsetTop="props.offsetTop">
			<slot />
		</ui-empty-direction>
	</view>
</template>

<script setup lang="ts">
	/**
	 * ui-empty-status 缺省页状态
	 * @description 此组件根据网络请求状态显示相对应的为空状态
	 * @tutorial 
	 * @property {Array, Object} source 数据源
	 * @property {Number} statusCode 网络请求状态码
	 * @property {String} mode = [data|shopping|null|agenda|coupon|card|collection|folder|search|record|message|direction] 缺省页模式
	 *  @value data 暂无数据
	 *  @value shopping 购物车空空如也
	 *  @value null 空数据
	 *  @value agenda 暂无日程
	 *  @value coupon 暂无优惠券
	 *  @value card 暂无银行卡
	 *  @value collection 暂无收藏
	 *  @value folder 文件夹空空如也
	 *  @value search 暂无搜索结果
	 *  @value record 暂无记录
	 *  @value message 暂无消息
	 *  @value direction 暂无方向
	 * @property {String, Number} offsetTop 向上偏移距离
	 * @property {String, Number} offsetBottom 向下偏移距离
	 */
	import { uiEmptyStatusProps } from "@/uni_modules/flower-config";
	import { watch } from "vue";

	const props = defineProps({
		source: { type: [Array, Object], default: [] },
		statusCode: { type: Number, default: 0 },
		mode: { type: String, default: uiEmptyStatusProps.mode },
		offsetTop: { type: [String, Number], default: uiEmptyStatusProps.offsetTop },
		offsetBottom: { type: [String, Number], default: uiEmptyStatusProps.offsetBottom }
	});

	const emits = defineEmits(['change']);

	watch(() => props.statusCode, () => {
		emits("change", {
			isEmpty: Number(props.statusCode) == 200 && props.source.length > 0
		});
	}, {
		immediate: true
	});
</script>

<style scoped lang="scss">

</style>