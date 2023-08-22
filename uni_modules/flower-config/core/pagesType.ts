interface globalStyle {
	navigationBarBackgroundColor ?: string,
	navigationBarTextStyle ?: string,
	navigationBarTitleText ?: string,
	navigationStyle ?: string,
	backgroundColor ?: string,
	backgroundTextStyle ?: string,
	enablePullDownRefresh ?: boolean,
	onReachBottomDistance ?: number,
	backgroundColorTop ?: string,
	backgroundColorBottom ?: string,
	titleImage ?: string,
	transparentTitle ?: string,
	titlePenetrate ?: string,
	pageOrientation ?: string,
	animationType ?: string,
	animationDuration ?: number,
	"app-plus" ?: object,
	"h5" ?: object,
	"mp-alipay" ?: object,
	"mp-weixin" ?: object,
	"mp-baidu" ?: object,
	"mp-toutiao" ?: object,
	"mp-lark" ?: object,
	"mp-qq" ?: object,
	"mp-kuaishou" ?: object,
	"mp-jd" ?: object,
	usingComponents ?: object,
	renderingMode ?: string,
	leftWindow ?: boolean,
	topWindow ?: boolean,
	rightWindow ?: boolean,
	rpxCalcMaxDeviceWidth ?: number,
	rpxCalcBaseDeviceWidth ?: number,
	rpxCalcIncludeWidth ?: number,
	dynamicRpx ?: boolean,
	maxWidth ?: number
};

interface pages {
	globalStyle ?: object,
	pages : object,
	easycom ?: object,
	tabBar ?: object,
	condition ?: object,
	subPackages ?: object,
	preloadRule ?: object,
	workers ?: object,
	leftWindow ?: object,
	topWindow ?: object,
	rightWindow ?: object,
	uniIdRouter ?: object,
	entryPagePath ?: string
}

export {
	globalStyle,
	pages
}