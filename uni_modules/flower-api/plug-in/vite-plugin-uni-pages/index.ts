const getPreVueContext = require('@dcloudio/uni-cli-shared/dist/preprocess/context').getPreVueContext();
const pagesJson = require('../../../../pages').default;

// 条件编译
// process.env.UNI_PLATFORM

getPreVueContext['uniPagesJson'] = function() {
	for (let i in pagesJson.pages) {
		if (pagesJson.pages[i].path == pagesJson.entryPagePath) {
			let str = pagesJson.pages.splice(i, 1)
			pagesJson.pages.unshift(str[0])
		}
	};
	return JSON.stringify(pagesJson)
};

function vitePluginUniappPages() {
	return {
		name: "vite-plugin-uni-pages"
	};
};

export default vitePluginUniappPages;