import {
	network
} from "../core/network.js";
import {
	navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack
} from "../core/jump.js";

import {
	getCurrentPageParams,
	setPreviousPageParams,
	cleanCurrentPageParams,
	setTempStorage,
	getTempStorage
} from "../core/store.js"
import {
	formValidator
} from "../plug-in/form-validator"

export {
	// network.js
	network,
	// jump.js
	navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack,
	// store.js
	getCurrentPageParams,
	setPreviousPageParams,
	cleanCurrentPageParams,
	setTempStorage,
	getTempStorage,
	// form-validator.js
	formValidator
}