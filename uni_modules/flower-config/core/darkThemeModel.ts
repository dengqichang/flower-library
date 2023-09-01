import { pagesCombination, getCurrentPageRoute, globalStyle } from "./pages";
import { getThemeModelBoolean, defaultColors } from "./theme";
/**
 * 暗黑模式设置页面背景及底部回弹区域
 */
const setModelLayout = () => {
	const wv = plus.webview.all();
	for (let i in wv) {
		if (wv[i]["__uniapp_route"] == getCurrentPageRoute()) {
			const pageStyle : any = pagesCombination[getCurrentPageRoute()];
			if (getThemeModelBoolean()) {
				wv[i].evalJS(`document.body.style.backgroundColor = '${pageStyle.backgroundColorDark || globalStyle.backgroundColorDark || "#141414"}'`);
				wv[i].setStyle({
					backgroundColorBottom: pageStyle.backgroundColorBottomDark || globalStyle.backgroundColorBottomDark || globalStyle.backgroundColorDark || "#141414",
					backgroundColorTop: pageStyle.backgroundColorTopDark || globalStyle.backgroundColorTopDark || pageStyle.navigationBarBackgroundColorDark || globalStyle.backgroundColorDark || "#141414",
					animationAlphaBGColor: pageStyle.backgroundColorDark || globalStyle.backgroundColorDark || "#141414",
					background: pageStyle.backgroundColorDark || globalStyle.backgroundColorDark || "#141414"
				});

				if (!!pageStyle.navigationBarTextStyleDark) {
					if (pageStyle.navigationBarTextStyleDark == "black") {
						setTimeout(() => { plus.navigator.setStatusBarStyle("dark"); }, 66);
					} else {
						setTimeout(() => { plus.navigator.setStatusBarStyle("light"); }, 66);
					};
				} else {
					if (globalStyle.navigationBarTextStyleDark == "black") {
						setTimeout(() => { plus.navigator.setStatusBarStyle("dark"); }, 66);
					} else {
						setTimeout(() => { plus.navigator.setStatusBarStyle("light"); }, 66);
					};
				};
			} else {
				wv[i].evalJS(`document.body.style.backgroundColor = '${pageStyle.backgroundColor || globalStyle.backgroundColor || "#f0f0f0"}'`);
				wv[i].setStyle({
					backgroundColorBottom: pageStyle.backgroundColorBottom || globalStyle.backgroundColorBottom || globalStyle.backgroundColor || "#f0f0f0",
					backgroundColorTop: pageStyle.backgroundColorTop || globalStyle.backgroundColorTop || pageStyle.navigationBarBackgroundColor || globalStyle.backgroundColor || "#f0f0f0",
					animationAlphaBGColor: pageStyle.backgroundColor || globalStyle.backgroundColor || "#f0f0f0",
					background: pageStyle.backgroundColor || globalStyle.backgroundColor || "#f0f0f0"
				});
				if (!!pageStyle.navigationBarTextStyle) {
					if (pageStyle.navigationBarTextStyle == "black") {
						setTimeout(() => { plus.navigator.setStatusBarStyle("dark"); }, 66);
					} else {
						setTimeout(() => { plus.navigator.setStatusBarStyle("light"); }, 66);
					};
				} else {
					if (globalStyle.navigationBarTextStyle == "black") {
						setTimeout(() => { plus.navigator.setStatusBarStyle("dark"); }, 66);
					} else {
						setTimeout(() => { plus.navigator.setStatusBarStyle("light"); }, 66);
					};
				};
			};
			wv[i].setStyle({
				pullToRefresh: {
					support: pageStyle.enablePullDownRefresh || false,
					color: defaultColors.primary,
					offset: `${uni.getSystemInfoSync().statusBarHeight + 44}px`,
				}
			});
		};
	};
};

uni.addInterceptor('navigateTo', {
	invoke(e) {
		// #ifdef APP-PLUS
		if (uni.getStorageSync("flower-library-theme-model")) {
			switchGlobalModel(getThemeModelBoolean(), e.url.substring(1))
		};
		// #endif
	}
});

const switchGlobalModel = (model : boolean, currentPageUrl ?: string) => {
	const wv = plus.webview.all();
	for (let i in wv) {
		if (!!wv[i]["__uniapp_route"]) {
			const pageStyle : any = pagesCombination[wv[i]["__uniapp_route"]];
			if (model) {
				wv[i].evalJS(`document.body.style.backgroundColor = '${pageStyle.backgroundColorDark || globalStyle.backgroundColorDark || "#141414"}'`);
				wv[i].setStyle({
					backgroundColorBottom: pageStyle.backgroundColorBottomDark || globalStyle.backgroundColorBottomDark || globalStyle.backgroundColorDark || "#141414",
					backgroundColorTop: pageStyle.backgroundColorTopDark || globalStyle.backgroundColorTopDark || pageStyle.navigationBarBackgroundColorDark || globalStyle.backgroundColorDark || "#141414"
				});
			} else {
				wv[i].evalJS(`document.body.style.backgroundColor = '${pageStyle.backgroundColor || globalStyle.backgroundColor || "#f0f0f0"}'`);
				wv[i].setStyle({
					backgroundColorBottom: pageStyle.backgroundColorBottom || globalStyle.backgroundColorBottom || globalStyle.backgroundColor || "#f0f0f0",
					backgroundColorTop: pageStyle.backgroundColorTop || globalStyle.backgroundColorTop || pageStyle.navigationBarBackgroundColor || globalStyle.backgroundColor || "#f0f0f0"
				});
			};
			wv[i].setStyle({
				pullToRefresh: {
					height: "96px"
				}
			});
		} else {
			if (currentPageUrl) {
				const currentPageStyle : any = pagesCombination[currentPageUrl];
				if (model) {
					wv[i].evalJS(`document.body.style.backgroundColor = '${currentPageStyle.backgroundColorDark || globalStyle.backgroundColorDark || "#141414"}'`);

					wv[i].setStyle({
						backgroundColorBottom: currentPageStyle.backgroundColorBottomDark || globalStyle.backgroundColorBottomDark || globalStyle.backgroundColorDark || '#141414',
						backgroundColorTop: currentPageStyle.backgroundColorTopDark || globalStyle.backgroundColorTopDark || currentPageStyle.navigationBarBackgroundColorDark || globalStyle.backgroundColorDark || '#141414'
					});
				} else {
					wv[i].evalJS(`document.body.style.backgroundColor = '${currentPageStyle.backgroundColor || globalStyle.backgroundColor || "#f0f0f0"}'`);
					wv[i].setStyle({
						backgroundColorBottom: currentPageStyle.backgroundColorBottom || globalStyle.backgroundColorBottom || globalStyle.backgroundColor || "#f0f0f0",
						backgroundColorTop: currentPageStyle.backgroundColorTop || globalStyle.backgroundColorTop || currentPageStyle.navigationBarBackgroundColor || globalStyle.backgroundColor || "#f0f0f0"
					});
				};
			};
			wv[i].setStyle({
				pullToRefresh: {
					height: "96px"
				}
			});
		};
	};
	if (model) {
		__uniConfig.globalStyle.navigationBar.titleColor = "#ffffff";
		plus.navigator.setStatusBarStyle("light");
	} else {
		__uniConfig.globalStyle.navigationBar.titleColor = "#000000";
		plus.navigator.setStatusBarStyle("dark");
	}
};

export {
	setModelLayout,
	switchGlobalModel
}