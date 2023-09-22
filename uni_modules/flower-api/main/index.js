import {
	navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack
} from "../core/jump";

import luchRequest from "../plug-in/luch-request";
const axios = new luchRequest();

import env from "../core/env.js";




export {
	// jump
	navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack,
	axios,
	luchRequest,
	env
}