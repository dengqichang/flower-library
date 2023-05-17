import {
	getCurrentPageRoute,
	getCurrentPageTitle,
	getIsCustomNav,
	globalStyle,
	getCurrentPageBackground,
	getIsPullDownRefresh
} from "../core/pages.js";
import {
	setTheme,
	restoreTheme,
	getColors,
	unitConversion,
	uniMargin,
	uniPadding
} from "../core/colors.js";
import {
	defaultConfig,
	developerConfig,
	defaultColors,
	defaultPlugins,
	defaultPresets,
	defaultPrimary
} from "../core/config.js";
import {
	generate
} from '../plug-in/design-colors';
import {
	uiLayoutProps,
	uiLayoutSourceProps,
	uiEmptyProps,
	uiLoadingLogoProps,
	uiLoadMoreProps,
	uiNetworkProps,
	uiSpinnerProps,
	uiTextProps,
} from "../core/defaultPluginsProps.js"


export {
	// pages
	getCurrentPageRoute,
	getCurrentPageTitle,
	getIsCustomNav,
	globalStyle,
	getCurrentPageBackground,
	getIsPullDownRefresh,
	// config
	defaultConfig,
	developerConfig,
	defaultColors,
	defaultPlugins,
	defaultPresets,
	defaultPrimary,
	// colors
	setTheme,
	restoreTheme,
	getColors,
	// tools
	unitConversion,
	uniMargin,
	uniPadding,
	// design-colors
	generate,
	// defaultPluginsProps
	uiLayoutProps,
	uiLayoutSourceProps,
	uiEmptyProps,
	uiLoadingLogoProps,
	uiLoadMoreProps,
	uiNetworkProps,
	uiSpinnerProps,
	uiTextProps,
}