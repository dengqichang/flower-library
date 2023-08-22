<template>
	<view class="__ui-button__flex">
		<button :class="[props.isEffect?'__ui-button__effect':'__ui-button']" :style="buttonStyles" hover-class="__ui-button__hover" :disabled="isDisabled || isLoading" 
				:lang="props.lang"
				:session-from="props.sessionFrom"
				:send-message-title="props.sendMessageTitle"
				:send-message-path="props.sendMessagePath"
				:send-message-img="props.sendMessageImg"
				:show-message-card="props.showMessageCard"
				:group-id="props.groupId"
				:guild-id="props.guildId"
				:public-id="props.publicId"
				:data-im-id="props.dataImId"
				:data-im-type="props.dataImType"
				:data-goods-id="props.dataGoodsId"
				:data-order-id="props.dataOrderId"
				:data-biz-line="props.dataBizLine"
				@tap="onTap"
				@getphonenumber="onGetphonenumber"
				@getuserinfo="onGetuserinfo"
				@error="onError"
				@opensetting="onOpensetting"
				@launchapp="onLaunchapp"
				@contact="onContact"
				@chooseavatar="onChooseavatar"
				@addgroupapp="onAddgroupapp"
				@chooseaddress="onChooseaddress"
				@chooseinvoicetitle="onChooseinvoicetitle"
				@subscribe="onSubscribe"
				@login="onLogin"
				@im="onIm">
			<view class="__ui-button__loading" v-if="props.isLoading">
				<ui-spinner :color="props.fontColor || spinnerColorStyle" :size="props.fontSize || buttomSizeType[props.size].fontSize" margin="0 16" />
				<ui-span :color="props.fontColor || fontColorStyles" :size="props.fontSize || buttomSizeType[props.size].fontSize">{{props.loadingText}}</ui-span>
			</view>
			<view v-else class="__ui-button__flex">
				<slot name="left" />
				<ui-span :color="props.fontColor || fontColorStyles" :size="props.fontSize || buttomSizeType[props.size].fontSize">{{props.text}}<slot /></ui-span>
				<slot name="right" />
			</view>
		</button>
	</view>
</template>

<script setup lang="ts">
	/**
	 * ui-button 按钮
	 * @description 该组件内部实现以uni-appbutton组件为基础，进行二次封装
	 * @tutorial 
	 * @property {String} text 按钮文本
	 * @property {String} type 按钮类型、颜色
	 * @property {String} size 按钮尺寸
	 * @property {String,Number} throttleTime 节流，一定时间内只能触发一次
	 * @property {Boolean} isEffect 点击效果
	 * @property {Boolean} isPlain 镂空
	 * @property {Boolean} isShadow 阴影
	 * @property {Boolean} isLight 轻量
	 * @property {Boolean} isCircle 圆角
	 * @property {Boolean} isLoading 加载中
	 * @property {Boolean} loadingText 加载中文本
	 * @property {Boolean} isDisabled 禁用
	 * @property {String} width 自定义宽度
	 * @property {String} height 自定义高度
	 * @property {String} fontSize 自定义按钮文本大小
	 * @property {String} fontColor 自定义按钮文本颜色
	 * @property {String,Array} borderRadius 自定义按钮圆角
	 */
	import { computed } from "vue";
	import { getColors, unitConversion, uiButtonProps, throttle,uniBorderRadius } from "@/uni_modules/flower-config";
	
	const props = defineProps({
		text: { // 按钮文本
			type: String,
			default: uiButtonProps.text
		},
		type: { // 按钮类型 primary、success、warning、danger
			type: String,
			default: uiButtonProps.type
		},
		size: { // 按钮大小 medium、default、mini
			type: String,
			default: uiButtonProps.size
		},
		throttleTime:{ // 节流，一定时间内只能触发一次
			type: [String,Number],
			default: uiButtonProps.throttleTime
		},
		isEffect: { // 点击效果
			type: Boolean,
			default: uiButtonProps.isEffect
		},
		isPlain: { // 镂空
			type: Boolean,
			default: uiButtonProps.isPlain
		},
		isShadow: { // 阴影
			type: Boolean,
			default: uiButtonProps.isShadow
		},
		isLight: { // 轻量
			type: Boolean,
			default: uiButtonProps.isLight
		},
		isCircle: { //圆角
			type: Boolean,
			default: uiButtonProps.isCircle
		},
		isLoading: { // 加载中
			type: Boolean,
			default: uiButtonProps.isLoading
		},
		loadingText: { // 加载中文本
			type: String,
			default: uiButtonProps.loadingText
		},
		isDisabled: { // 禁用
			type: Boolean,
			default: uiButtonProps.isDisabled
		},
		// 按钮扩展能力
		formType:String, // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
		openType:String, // 开放能力
		appParameter:String, // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效,微信小程序、QQ小程序
		// 微信小程序
		lang: { // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
			type: String,
			default: "en"
		},
		sessionFrom:String, // 会话来源，open-type="contact"时有效
		sendMessageTitle:String, // 会话内消息卡片标题，open-type="contact"时有效
		sendMessagePath:String, // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
		sendMessageImg:String, // 会话内消息卡片图片，open-type="contact"时有效
		showMessageCard:Boolean,	// 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
		// QQ小程序
		groupId:String, // 打开群资料卡时，传递的群号,open-type="openGroupProfile"
		guildId:String, // 打开频道页面时，传递的频道号,open-type="openGuildProfile"
		publicId:String, // 打开公众号资料卡时，传递的号码,open-type="openPublicProfile"
		// 抖音小程序2.68.0版本+
		dataImId:String, // 客服的抖音号,open-type="im"
		dataImType:String, // IM卡片类型,open-type="im"
		dataGoodsId:String, // 商品的id，仅支持泛知识课程库和生活服务商品库中的商品,open-type="im"
		dataOrderId:String, // 订单的id，仅支持交易2.0订单,open-type="im",
		dataBizLine:String, // 商品类型，“1”代表生活服务，“2”代表泛知识。open-type="im"
		// 自定义样式
		width: [Number, String],
		height: [Number, String],
		fontSize: [Number, String],
		fontColor: String,
		borderRadius: [String,Array],
		linearGradient: String
	});

	const buttomSizeType = {
		medium: { fontSize: 32, width: 626, height: 88 },
		default: { fontSize: 30, width: 326, height: 78 },
		mini: { fontSize: 26, width: "auto", height: 60 }
	};

	// 按钮文本
	const fontColorStyles = computed(() => {
		let color : string = "#ffffff";
		// 镂空
		if (props.isPlain) {
			color = getColors(props.type);
		};
		// 轻量
		if (props.isLight) {
			color = getColors(props.type);
		};
		// 禁用状态
		if (props.isDisabled) {
			color = getColors("gray-6");
		};
		return color;
	});
	// 旋转
	const spinnerColorStyle = computed(() => {
		let color : string = "#ffffff";

		if (props.isLight || props.isPlain) {
			color = getColors(props.type)
		};

		return color;
	});
	// 按钮
	const buttonStyles = computed(() => {
		let style : any = {};
		// 按钮颜色
		style.background = getColors(props.type);
		
		// 渐变
		if(!!props.linearGradient){
			style.background = `linear-gradient(${props.linearGradient})`
		};
		// 按钮宽度
		if (!!props.width) {
			style.width = unitConversion(props.width);
		} else {
			style.width = unitConversion(buttomSizeType[props.size].width);
		};
		// 按钮高度
		if (!!props.height) {
			style.lineHeight = unitConversion(props.height, true);
		} else {
			style.lineHeight = unitConversion(buttomSizeType[props.size].height, true);
		};

		// 按钮边角
		if(!!props.borderRadius){
			style = Object.assign(style,uniBorderRadius(props.borderRadius));
		}else{
			if (props.isCircle) {
				style.borderRadius = `${buttomSizeType[props.size].height}rpx`;
			} else {
				style.borderRadius = "8rpx";
			};
		};
		// 镂空
		if (props.isPlain) {
			style.background = "transparent";
			style.border = `1px solid ${getColors(props.type)}`
		};
		// 轻量
		if (props.isLight) {
			style.background = getColors("gray-4");
		};
		// 阴影
		if (props.isShadow && !props.isDisabled) {
			style.boxShadow = `0 .5em 1em ${getColors(props.type)}`
		};
		// 禁用状态
		if (props.isDisabled) {
			style.background = getColors("gray-4");
		};
		return style;
	});
	const emits = defineEmits(['click','getphonenumber','getuserinfo','error','opensetting','launchapp','contact','chooseavatar','addgroupapp','chooseaddress','chooseinvoicetitle','subscribe','login','im']);
	
	// 点击事件
	const onTap = () => {
		throttle(()=>{
			emits("click");
		}, Number(props.throttleTime));
	};
	/**
	 * 获取用户手机号回调
	 * open-type="getPhoneNumber"
	 * 微信、支付宝、百度、抖音、快手、京东小程序
	 */
	const onGetphonenumber = () => {
		emits("getphonenumber");
	};
	/**
	 * 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
	 * open-type="getUserInfo"
	 * 微信、QQ、百度、快手、京东小程序
	 */
	const onGetuserinfo = () => {
		emits("getuserinfo");
	};
	/**
	 * 当使用开放能力时，发生错误的回调
	 * open-type="launchApp"
	 * 微信、QQ、快手、京东小程序
	 */
	const onError = () => {
		emits("error");
	};
	/**
	 * 在打开授权设置页并关闭后回调
	 * open-type="openSetting"
	 * 微信、QQ、百度、快手、京东小程序
	 */
	const onOpensetting = () => {
		emits("opensetting");
	};
	/**
	 * 从小程序打开 App 成功的回调
	 * open-type="launchApp"
	 * 微信、QQ、快手、京东小程序
	 */
	const onLaunchapp = () => {
		emits("launchapp");
	};
	/**
	 * 客服消息回调
	 * open-type="contact"
	 * 微信、QQ、百度、快手小程序
	 */
	const onContact = () => {
		emits("contact");
	};
	/**
	 * 获取用户头像回调
	 * open-type="chooseAvatar"
	 * 微信小程序
	 */
	const onChooseavatar = () => {
		emits("chooseavatar");
	};
	/**
	 * 添加群应用的回调
	 * open-type="addGroupApp"
	 * QQ小程序
	 */
	const onAddgroupapp = () => {
		emits("addgroupapp");
	};
	/**
	 * 调起用户编辑并选择收货地址的回调
	 * open-type="chooseAddress"
	 * 百度小程序
	 */
	const onChooseaddress = () => {
		emits("chooseaddress");
	};
	/**
	 * 用户选择发票抬头的回调
	 * open-type="chooseInvoiceTitle"	
	 * 百度小程序
	 */
	const onChooseinvoicetitle = () => {
		emits("chooseinvoicetitle");
	};
	/**
	 * 订阅消息授权回调
	 * open-type="subscribe"
	 * 百度小程序
	 */
	const onSubscribe = () => {
		emits("subscribe");
	};
	/**
	 * 登录回调
	 * open-type="login"
	 * 百度小程序
	 */
	const onLogin = () => {
		emits("login");
	};
	/**
	 * 监听跳转IM的成功回调
	 * open-type="im"
	 * 抖音小程序2.68.0版本+
	 */
	const onIm = () => {
		emits("im");
	};
</script>

<style scoped>
	.__ui-button__flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.__ui-button {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
	}

	.__ui-button__loading {
		display: flex;
		align-items: center;
	}

	.__ui-button__effect:active {
		top: 1rpx;
		left: 1rpx;
	}

	.__ui-button:after {
		border: none;
	}

	.__ui-button__hover::before {
		display: block;
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 5%);
	}
</style>