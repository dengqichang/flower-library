import {getCurrentPageRoute,getCurrentPageTitle,getIsCustomNav,globalStyle,getCurrentPageBackground} from "../core/pages.js";
import {setTheme,restoreTheme,getColors,unitConversion} from "../core/colors.js";
import {defaultConfig,developerConfig,defaultColors,defaultPlugins,defaultPresets,defaultPrimary} from "../core/config.js";
import {generate} from '../plug-in/design-colors';
import {uiLayout,uiEmpty} from "../core/defaultPluginsProps.js"

export {
	// pages
	getCurrentPageRoute,getCurrentPageTitle,getIsCustomNav,globalStyle,getCurrentPageBackground,
	// config
	defaultConfig,developerConfig,defaultColors,defaultPlugins,defaultPresets,defaultPrimary,
	// colors
	setTheme,restoreTheme,getColors,
	// base
	unitConversion,
	// design-colors
	generate,
	// defaultPluginsProps
	uiLayout,uiEmpty
}