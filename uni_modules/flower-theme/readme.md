<p align="center"><img alt="logo" src="https://www.flowerui.com/resource/logo/theme.png" width="128"></p>
<p align="center">多平台 uni-app / uni-app-x 生态主题色彩</p>

## 关于
是一个专为 uni-app / uni-app-x 应用程序开发的主题色彩。它采用 [arco-design-color](https://arco.design/palette/list) 根据给定颜色通过算法生成指定包含十个颜色的梯度色板，也可生成暗色模式下包含十个颜色的色板。

## 特点
- 根据给定颜色通过算法生成指定包含十个颜色的梯度色板。
- 生成暗色 / 浅色系色板，便于适配暗黑模式。

## 交流反馈
官方QQ群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=_a2CXouL0H2OvaJ8vPalp3S6DABKIoCH&jump_from=webapi&authKey=riLWFXQamGAWrXQnBW0NCCFVeodvRvAEAooJNxuNybHBCOs9w0V9yR2F1NhVsZS/">654105306</a>  

## 源码
[![stars](https://img.shields.io/github/stars/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-theme)
[![forks](https://img.shields.io/github/forks/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-theme)
[![watchers](https://img.shields.io/github/watchers/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-theme)
[![license](https://img.shields.io/github/license/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-theme)
[![star](https://gitee.com/dengqichang/flower-library/badge/star.svg?theme=white)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-theme)
[![fork](https://gitee.com/dengqichang/flower-library/badge/fork.svg?theme=white)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-theme)

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

## 使用示例
**注意：**`uni-app-x` 与 `uni-app` 使用方式在于导入的差异，用法一致。
### uni-app-x 示例
```js
<script>
	import { generate } from "@/uni_modules/flower-theme/uni-app-x"
	export default {
		data() {
			return {

			}
		},
		onShow() {
			// 浅色系色彩 ["#E8F4FF", "#C0DCFC", "#99C2F9", "#73A7F5", "#4D8AF2", "#296BEF", "#1A4DC6", "#0E349E", "#051F75", "#000F4D"]
			const colorListLight = generate("#296BEF", "light");
			console.log("浅色系色彩:",colorListLight);
			// 暗色系色彩 ["#000F4D", "#051F75", "#12379E", "#2454C6", "#3C78EF", "#4E8BF2", "#74A7F5", "#9BC3F9", "#C2DDFC", "#EBF5FF"]
			const colorListDark = generate("#296BEF", "dark");
			console.log("暗色系色彩:",colorListDark);
		}
	}
</script>
```
### uni-app 示例
```js
<script>
	import { generate } from "@/uni_modules/flower-theme/uni-app"
	export default {
		data() {
			return {

			}
		},
		onShow() {
			// 浅色系色彩 ["#E8F4FF", "#C0DCFC", "#99C2F9", "#73A7F5", "#4D8AF2", "#296BEF", "#1A4DC6", "#0E349E", "#051F75", "#000F4D"]
			const colorListLight = generate("#296BEF", "light");
			console.log("浅色系色彩:",colorListLight);
			// 暗色系色彩 ["#000F4D", "#051F75", "#12379E", "#2454C6", "#3C78EF", "#4E8BF2", "#74A7F5", "#9BC3F9", "#C2DDFC", "#EBF5FF"]
			const colorListDark = generate("#296BEF", "dark");
			console.log("暗色系色彩:",colorListDark);
		}
	}
</script>
```

## 适用领域
基于 `uni-app` OR `uni-app-x` 生态开发的组件库，uni-app 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。

## 版权信息
- 遵循 `MIT` 开源协议，无需支付任何费用，也无需授权，即可将框架应用到产品中。
- 仅供学习交流，如作它用所承受的法律责任一概与作者无关。

## 致谢
首先感谢 [DCloud](https://www.dcloud.io/) 官方，旗下出品的 [uni-app-x](https://doc.dcloud.net.cn/uni-app-x/)、[uni-app](https://uniapp.dcloud.net.cn/) 、[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)、[uni-app 小程序](https://nativesupport.dcloud.net.cn/README) 等多平台、多元化的技术体系。  
其次感谢 [DCloud 插件市场](https://ext.dcloud.net.cn/) 开源作品的作者们，"捧着一颗心来，不带半棵草去。" 的开源奉献精神致敬。  
再次感谢 [arco-design-color](https://arco.design/palette/list) 官方的开源产品。