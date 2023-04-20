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
	getColors
} from "../core/colors.js";
import {
	unitConversion,
	uniMargin,
	uniPadding
} from "../core/tools.js"
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
	uiLayout,
	uiEmpty,
	uiLoadingLogo,
	uiLoadMore,
	uiNetwork,
	uiSpinner,
	uiText
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
	uiLayout,
	uiEmpty,
	uiLoadingLogo,
	uiLoadMore,
	uiNetwork,
	uiSpinner,
	uiText
}