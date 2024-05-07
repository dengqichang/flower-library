<p align="center"><img alt="logo" src="https://www.flowerui.com/resource/logo/store.png" width="128"></p>
<p align="center">多平台 uni-app / uni-app-x 生态状态管理库</p>

## 简述
是一个专为 uni-app / uni-app-x 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有变量的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
## 特点
- 中心化状态管理：使用单一的状态树，即一个全局的 state 对象，使得所有组件都能够访问和修改状态，便于状态的集中管理和维护。
- 可预测的状态变化：状态的变化通过提交 getStore / setStore 来进行。这种变化是同步和可追踪的，便于调试和理解应用的状态变化。

## 交流反馈
官方QQ群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=_a2CXouL0H2OvaJ8vPalp3S6DABKIoCH&jump_from=webapi&authKey=riLWFXQamGAWrXQnBW0NCCFVeodvRvAEAooJNxuNybHBCOs9w0V9yR2F1NhVsZS/">654105306</a>  

## 源码
[![stars](https://img.shields.io/github/stars/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-store)
[![forks](https://img.shields.io/github/forks/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-store)
[![watchers](https://img.shields.io/github/watchers/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-store)
[![license](https://img.shields.io/github/license/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-store)
[![star](https://gitee.com/dengqichang/flower-library/badge/star.svg?theme=white)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-store)
[![fork](https://gitee.com/dengqichang/flower-library/badge/fork.svg?theme=white)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-store)

## 兼容性
### Vue 版本
| Vue2		| Vue3		|
| :------:	| :------:	|
| √			| √			|
### uni-app 版本
| app-uvue	| app-vue	| app-nvue	| 各端小程序		| H5		|
| :------:	| :------:	| :------:	| :-------:		| :-------:	|
| √			| √			| √			| √				|√			|
### uni-app-x 版本
| android	| ios		| web		|
| :------:	| :------:	| :------:	|
| √			| √			| √			|

## mixinStore / useStore API
函数的使用方式在下方使用示例中体现，用法均一致。  

| 函数			| 描述													| 示例								|
| :------:		| :------:												| :------:							|
| getState		| 获取当前状态值											| getState("test")					|
| setState		| 设置当前状态值											| setState("test", "测试值")			|
| getStore		| 获取缓存值，与 `uni.getStorageSync` 一致				| getStore("test")					|
| setStore		| 设置缓存值，与 `uni.setStorageSync` 一致				| setStore("test", "测试值");		|
| getStoreState	| 获取当前缓存状态值，同时包含`getState`与`getStore`的功能	| getStoreState("test")				|
| setStoreState	| 设置当前缓存状态值，同时包含`setState`与`setStore`的功能	| setStoreState("test", "测试值");	|

## 使用示例
**注意：**`uni-app-x` 与 `uni-app` 使用方式在于导入的差异，用法一致。
### uni-app-x 示例
#### 普通模式
```vue
<template>
	<view>
		<button @tap="onTap">点击设置</button>
		<view>{{getState("test")}}</view>
	</view>
</template>

<script>
	import {mixinStore} from "@/uni_modules/flower-store/uni-app-x";
	export default {
		mixins: [mixinStore],
		data() {
			return {
				
			}
		},
		methods: {
			onTap() {
				this.setState("test", "测试值")
			}
		}
	}
</script>
```
#### Composition API 模式
```vue
<template>
	<view>
		<button @tap="onTap">点击设置</button>
		<view>{{useStore.getState("test")}}</view>
	</view>
</template>

<script setup>
	import { useStore } from "@/uni_modules/flower-store/uni-app-x";

	const onTap = () => {
		useStore.setState("test", "测试值")
	};
</script>
```
### uni-app 使用示例
#### 普通模式
```vue
<template>
	<view>
		<button @tap="onTap">点击设置</button>
		<view>{{getState("test")}}</view>
	</view>
</template>

<script>
	import {mixinStore} from "@/uni_modules/flower-store/uni-app";
	export default {
		mixins: [mixinStore],
		data() {
			return {
				
			}
		},
		methods: {
			onTap() {
				this.setState("test", "测试值")
			}
		}
	}
</script>
```
#### Composition API 模式
```vue
<template>
	<view>
		<button @tap="onTap">点击设置</button>
		<view>{{store.getState("test")}}</view>
	</view>
</template>

<script setup>
	import {store} from "@/uni_modules/flower-store/uni-app";

	const onTap = () => {
		store.setState("test", "测试值")
	};
</script>
```

## 适用领域
基于 `uni-app` OR `uni-app-x` 生态开发的组件库，`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。

## 版权信息
- 遵循 `MIT` 开源协议，无需支付任何费用，也无需授权，即可将框架应用到产品中。
- 仅供学习交流，如作它用所承受的法律责任一概与作者无关。

## 致谢
首先感谢 [DCloud](https://www.dcloud.io/) 官方，旗下出品的 [uni-app](https://uniapp.dcloud.net.cn/) 、[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)、[uni-app 小程序](https://nativesupport.dcloud.net.cn/README) 等多平台、多元化的技术体系。  
其次感谢 [DCloud 插件市场](https://ext.dcloud.net.cn/) 开源作品的作者们，"捧着一颗心来，不带半棵草去。" 的开源奉献精神致敬。