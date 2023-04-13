import {getNetwork} from "../core/network.js";

// <a href="https://ext.dcloud.net.cn/plugin?id=392">luch-request</a>
import luchRequest from "../plug-in/luch-request";
const request = new luchRequest();

export {
	// network.js
	getNetwork,
	// luch-request
	request
}