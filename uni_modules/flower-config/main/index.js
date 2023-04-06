import {getCurrentPageRoute,getCurrentPageTitle,getIsCustomNav,globalStyle,getCurrentPageBackground} from "../core/pages.js";
import {setTheme,restoreTheme,getColor} from "../core/colors.js";
import {unitConversion} from "../core/base.js";
import {defaultConfig,developerConfig,defaultColors,defaultPlugins,defaultPresets,defaultPrimary} from "../core/config.js";
import {generate} from '../plug-in/design-colors';
import {uiLayout,uiDefault} from "../core/defaultPluginsProps.js"

export {
	// pages
	getCurrentPageRoute,getCurrentPageTitle,getIsCustomNav,globalStyle,getCurrentPageBackground,
	// config
	defaultConfig,developerConfig,defaultColors,defaultPlugins,defaultPresets,defaultPrimary,
	// colors
	setTheme,restoreTheme,getColor,
	// base
	unitConversion,
	// design-colors
	generate,
	// defaultPluginsProps
	uiLayout,uiDefault
}