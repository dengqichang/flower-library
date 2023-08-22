// vite.config.js
import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni';

// 引入vite-plugin-uni-pages插件
import vitePluginUniPages from './uni_modules/flower-api/plug-in/vite-plugin-uni-pages';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
		// 注册插件
		vitePluginUniPages()
	],
});