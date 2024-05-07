<p align="center"><img alt="logo" src="https://www.flowerui.com/resource/logo/svg.png" width="128"></p>
<h3 align="center">FLOWER SVG</h3>
<p align="center">多平台 uni-app / uni-app-x 生态 SVG 组件，全平台全版本适配</p>

## 简述
一款适用于 uni-app / uni-app-x 的 SVG 组件。全平台全版本适配。

## 交流反馈
官方QQ群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=_a2CXouL0H2OvaJ8vPalp3S6DABKIoCH&jump_from=webapi&authKey=riLWFXQamGAWrXQnBW0NCCFVeodvRvAEAooJNxuNybHBCOs9w0V9yR2F1NhVsZS/">654105306</a>  

## 源码
[![stars](https://img.shields.io/github/stars/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-empty)
[![forks](https://img.shields.io/github/forks/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-empty)
[![watchers](https://img.shields.io/github/watchers/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-empty)
[![license](https://img.shields.io/github/license/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-empty)
[![star](https://gitee.com/dengqichang/flower-library/badge/star.svg?theme=white)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-empty)
[![fork](https://gitee.com/dengqichang/flower-library/badge/fork.svg?theme=white)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-empty)

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

## 使用方式
```vue
<template>
	<view>
		<!-- uuid属性为必填项，全局唯一id值 -->
		<fr-svg uuid="id" :src="svg" :width="100" :height="100" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				svg: '<?xml version="1.0" encoding="UTF-8"?><svg width="200" height="200" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V44L31 39L24 44L17 39L10 44V6Z" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 22L30 22" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 30L30 30" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 14L30 14" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
			}
		}
	}
</script>
```

## Props
|  属性					|  类型			|  默认值		|  说明																												|  兼容性										|
|  :----:				| :----:		| :----:		|  :----:																											|  :----:										|
| uuid					| String		| -				|唯一标识id，**必填**																								|												|
| src					| String		| -				|SVG 资源，只支持svg资源，不支持文件、网络及本地路径																	|												|
| width					| Number		| 48			|宽度																												|												|
| height				| Number		| 48			|高度																												|												|
| mode					| String		| scaleToFill	|图片裁剪、缩放的模式，[有效值](https://uniapp.dcloud.net.cn/component/image.html#mode-%E6%9C%89%E6%95%88%E5%80%BC)	|												|
| lazyLoad				| Boolean		| false			|图片懒加载。只针对page与scroll-view下的image有效																		|微信小程序、百度小程序、抖音小程序、飞书小程序	|
| fadeShow				| Boolean		| false			|图片显示动画效果																									|App-nvue 2.3.4+ Android、uni-app-x				|
| showMenuByLongpress	| Boolean		| false			|开启长按图片显示识别小程序码菜单																						|微信小程序2.7.0									|
| draggable				| Boolean		| false			|是否能拖动图片																										|H5 3.1.1+、App（iOS15+）						|
| isCache				| Boolean		| false			|是否图片缓存																										|nvue-app、uvue-app								|
| @error				| HandleEvent	| false			|当错误发生时																										|												|
| @load					| HandleEvent	| false			|当图片载入完毕时																									|												|
| @click				| HandleEvent	| -				|点击事件																											|												|
| @longpress			| HandleEvent	| -				|长按事件																											|												|

## 适用领域
基于 `uni-app-x` 生态开发的 `SVG` 组件，`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。
## 版权信息
- 遵循 `MIT` 开源协议，无需支付任何费用，也无需授权，即可将框架应用到产品中。
- 仅供学习交流，如作它用所承受的法律责任一概与作者无关。

## 致谢
首先感谢 [DCloud](https://www.dcloud.io/) 官方，旗下出品的 [uni-app](https://uniapp.dcloud.net.cn/) 、[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)、[uni-app 小程序](https://nativesupport.dcloud.net.cn/README) 等多平台、多元化的技术体系。  
其次感谢 [DCloud 插件市场](https://ext.dcloud.net.cn/) 开源作品的作者们，"捧着一颗心来，不带半棵草去。" 的开源奉献精神致敬。