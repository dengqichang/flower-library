const path = require('path');
const getPreVueContext = require('@dcloudio/uni-cli-shared/dist/preprocess/context').getPreVueContext();
import pagesJson from "../../../../pages.js";

getPreVueContext['uniHotJs'] = function() {
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
		name: "vite-plugin-uni-pages",
		transform(){
			getPreVueContext['uniHotJs'] = function() {
				for (let i in pagesJson.pages) {
					if (pagesJson.pages[i].path == pagesJson.entryPagePath) {
						let str = pagesJson.pages.splice(i, 1)
						pagesJson.pages.unshift(str[0])
					}
				};
				return JSON.stringify(pagesJson)
			};
		}
	};
};

export default vitePluginUniappPages;