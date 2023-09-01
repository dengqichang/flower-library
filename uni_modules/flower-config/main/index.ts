/**
 * 主题
 */
import { generate, initThemeModel, setThemeModel, getThemeModel, getThemeModelBoolean, setThemeColor, getThemeColor, restoreThemeColor, setFontSizeIncrease, getFontSizeIncrease, restoreFontSizeIncrease, getColors, getTextColors, getBackgroundColors, setSacrificeMode, getSacrificeMode } from "../core/theme";
/**
 * 配置文件
 */
import { defaultColors, defaultInternalSetup } from "../core/mergeConfiguration"
/**
 * pages.json
 */
import { getCurrentPageRoute, getCurrentPageTitle, getCurrentNavTextStyle, getIsCustomNav, globalStyle, pagesCombination, getCurrentPageBackground, getCurrentNavBackground, getIsPullDownRefresh } from "../core/pages";
/**
 * flower-ui基础组件属性
 */
import { uiLayoutProps, uiLoadMoreProps, uiSpinnerProps, uiTextProps, uiSpanProps, uiButtonProps } from "../core/defaultPluginsProps";
/**
 * flower-compound复合组件库属性
 */
import { uiLayoutSourceProps, uiNoNetworkProps, uiEmptyStatusProps } from "../core/defaultPluginsProps";
/**
 * 图标组件库属性
 */
import { uiIconsProps } from "../core/defaultPluginsProps";
/**
 * 缺省页组件库属性
 */
import { uiEmptyProps } from "../core/defaultPluginsProps";
import { svgToUrl } from "../core/empty";

/**
 * 国际化语言
 */
import { getLanguage, setLanguage, getComponentLanguage, getLanguageCode } from "../core/languageConfig";

/**
 * 内部单位转化
 */
import { uniMargin, uniPadding, uniBorderRadius, unitConversion } from "../core/transform";

/**
 * 无网络检测
 */
import { judgeNetworkError, getCurrentNetwork } from "../core/network";
/**
 * 节流
 */
import throttle from "../core/throttle";
/**
 * app暗黑模式
 */
import { setModelLayout } from "../core/darkThemeModel";
/**
 * ======== 初始化项目 ========
 */

// 初始化模式
initThemeModel();
// 初始化语言
setLanguage();

/**
 * ======== 导出项 ========
 */
export {
	// theme.ts
	generate, initThemeModel, setThemeModel, getThemeModel, getThemeModelBoolean, setThemeColor, getThemeColor, restoreThemeColor, setFontSizeIncrease, getFontSizeIncrease, restoreFontSizeIncrease, getColors, getTextColors, getBackgroundColors, setSacrificeMode, getSacrificeMode,
	// pages.ts
	getCurrentPageRoute, getCurrentPageTitle, getCurrentNavTextStyle, getIsCustomNav, globalStyle, pagesCombination, getCurrentPageBackground, getCurrentNavBackground, getIsPullDownRefresh,
	// languageConfig.ts
	getLanguage, setLanguage, getComponentLanguage, getLanguageCode,
	// mergeConfiguration.ts
	defaultColors, defaultInternalSetup,
	// transform.ts
	uniMargin, uniPadding, uniBorderRadius, unitConversion,
	// network.ts
	judgeNetworkError, getCurrentNetwork,
	// flower-icons
	uiIconsProps,
	// flower-empty
	uiEmptyProps, svgToUrl,
	// flower-ui
	uiLayoutProps, uiLoadMoreProps, uiSpinnerProps, uiTextProps, uiSpanProps, uiButtonProps,
	// flower-compound
	uiLayoutSourceProps, uiNoNetworkProps, uiEmptyStatusProps,
	throttle,
	setModelLayout
}