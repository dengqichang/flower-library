import index from "./pages_modules/index";
import test from "./pages_modules/test";

export default {
	pages: index.concat(test),
	globalStyle: {
		navigationBarTextStyle: 'black',
		navigationBarTitleText: 'FLOWER',
		navigationBarBackgroundColor: '#F2F2F2',
		backgroundColor: '#F2F2F2'
	},
	entryPagePath: "pages/index/index",
	flowerConfig: {
		plugins: {

		}
	}
}