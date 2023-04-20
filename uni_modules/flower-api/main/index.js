import {
	network
} from "../core/network.js";
import {
	navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack
} from "../core/jump.js"

// <a href="https://ext.dcloud.net.cn/plugin?id=392">luch-request</a>
import luchRequest from "../plug-in/luch-request";
const request = new luchRequest();

export {
	// network.js
	network,
	// luch-request
	request,
	// jump
	navigateTo,redirectTo,reLaunch,switchTab,navigateBack
}