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

import {getCurrentPageParams,setPreviousPageParams,setTempStorage,getTempStorage} from "../core/store.js"


export {
	// network.js
	network,
	// jump
	navigateTo,redirectTo,reLaunch,switchTab,navigateBack,
	// store
	getCurrentPageParams,setPreviousPageParams,setTempStorage,getTempStorage,
}