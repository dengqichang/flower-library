<p align="center"><img alt="logo" src="https://www.flowerui.com/resource/logo/icons.png" width="128"></p>
<p align="center">多平台 uni-app 生态 iconPark 图标库 ，构建高质量、统一化、可定义的图标资源。</p>

#### 关于
图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一SVG源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标。
#### 特点
- 提供超过2000+预设图标，分类
- 支持4种主题和在线换肤：线性、填充、双色、四色
- 网站提供 `复制Vue组件` 便捷操作

#### iconfont-阿里巴巴矢量图标库
[iconPark高质量统一化图标](https://www.iconfont.cn/collections/detail?cid=48811)，有需要的小伙伴们自行取用，免费，免费，免费。
#### 图标库说明
- 图标库遵循uni_modules规范：组件库无需引用、注册，即可直接在页面中使用。不管组件库目录内存在多少个组件，打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。
- 每个图标组件均小于1.5KB，图标库的实际大小取决于项目中使用到多少个图标组件。

#### 交流反馈
官方QQ群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=_a2CXouL0H2OvaJ8vPalp3S6DABKIoCH&jump_from=webapi&authKey=riLWFXQamGAWrXQnBW0NCCFVeodvRvAEAooJNxuNybHBCOs9w0V9yR2F1NhVsZS/">654105306</a>  
#### 源码
[![stars](https://img.shields.io/github/stars/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-iconPark)
[![forks](https://img.shields.io/github/forks/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-iconPark)
[![watchers](https://img.shields.io/github/watchers/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-iconPark)
[![license](https://img.shields.io/github/license/dengqichang/flower-library?style=social)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-iconPark)
[![star](https://gitee.com/dengqichang/flower-library/badge/star.svg?theme=white)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-iconPark)
[![fork](https://gitee.com/dengqichang/flower-library/badge/fork.svg?theme=white)](https://github.com/dengqichang/flower-library/tree/main/uni_modules/flower-iconPark)

#### Vue 版本
| Vue2		| Vue3		|
| :------:	| :------:	|
| √			| √			|
#### uni-app 版本
| app-vue	| app-nvue	| 各端小程序		| H5		|
| :------:	| :------:	| :-------:		| :-------:	|
| √			| √			| √				|√			|
#### uni-app-x 版本
| android	| ios		| web		|
| :------:	| :------:	| :------:	|
| √			| √			| √			|
#### 图标预览
图标预览地址：<a target="_blank" href="https://www.flowerui.com/documents/flower-iconPark/preview.html">flower-iconPark 图标预览</a>  
#### 使用方式
在[图标预览](https://www.flowerui.com/documents/flower-iconPark/preview.html)中 `点击图标` 即可复制，然后粘贴在页面代码中使用。  
  
**注意： uni-app 项目需要在 main.js 中引入下面代码块中的js**
```js
// uni-app 项目需引入，uni-app-x 项目无需引入
// main.js
import '@/uni_modules/flower-store/uni-app/main.js';
```
#### 图标示例
```vue
<fr-icon-aiming theme="outline" :size="24" :fill="['#000000']" />
```
#### Props
|  属性			|  类型			|  可选值																|  默认值		|  说明		|
|  :----:		| :----:		|  :----																| :----:		|  :----:	|
| size			| Number		| -																		| 24			|图标大小	|
| strokeWidth	| Number		| -																		| 4				|线段粗细	|
| theme			| String		| 线性：outline<br/>填充：filled<br>双色：two-tone<br>多色：multi-color	| outline		|图标风格	|
| fill			| Array			| -																		| ['#000000']	|图标颜色	|
| strokeLinecap	| String		| round、butt、square													| round			|端点类型	|
| strokeLinejoin| String		| round、miter、bevel													| round			|拐点类型	|
| @click		| HandleEvent	| -																		|-				|点击事件	|

#### 适用领域
基于 `uni-app` 生态开发的组件库，`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。
#### 版权信息
- 遵循 `MIT` 开源协议，无需支付任何费用，也无需授权，即可将框架应用到产品中。
- 仅供学习交流，如作它用所承受的法律责任一概与作者无关。

#### 说明
<p align="center"><img alt="logo" src="https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg" width="258"></p>  

> 图标库来源于高质量免费图标库 [iconPark](https://iconpark.oceanengine.com) - 字节跳动出品，致谢 iconPark 官方所有工作人员，点赞。

因 iconPark 图标库官方暂时不支持 uni-app 平台使用，作者耗费大量的人力物力及时间将 iconPark SVG 图标库转化，以供 uni-app 多平台化使用的图标库。
#### 致谢
首先感谢 [DCloud](https://www.dcloud.io/) 官方，旗下出品的 [uni-app](https://uniapp.dcloud.net.cn/) 、[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)、[uni-app 小程序](https://nativesupport.dcloud.net.cn/README) 等多平台、多元化的技术体系。  
其次感谢 [DCloud 插件市场](https://ext.dcloud.net.cn/) 开源作品的作者们，"捧着一颗心来，不带半棵草去。" 的开源奉献精神致敬。