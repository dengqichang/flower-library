// #ifdef VUE3
import { reactive } from "vue";
let store = reactive({});
// #endif
// #ifdef VUE2
let store = {};
// #endif

function uuid(length) {
	let uuid = "";
	let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	for (let i = 0; i < length; i++) {
		uuid += chars[Math.floor(Math.random() * chars.length)];
	};
	return uuid
};

export {
	store, uuid
}