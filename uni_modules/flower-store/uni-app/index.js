class store {
	/**
	 * state 当前状态
	 */
	// #ifdef VUE2
	static getState = (key) => {
		return uni.store.state[key]
	};
	static setState = (key, value) => {
		Vue.set(uni.store.state, key, value);
	};
	// #endif
	// #ifdef VUE3
	static getState = (key) => {
		return uni.store[key]
	};
	static setState = (key, value) => {
		uni.store[key] = value;
	};
	// #endif
	/**
	 * store 缓存状态
	 */
	// #ifdef VUE2
	static getStore = (key) => {
		return getStorageSync(key);
	};
	static setStore = (key, value) => {
		Vue.set(uni.store.state, key, value);
		uni.setStorageSync(key, value);
	};
	// #endif
	// #ifdef VUE3
	static getStore = (key) => {
		return getStorageSync(key);
	};
	static setStore = (key, value) => {
		uni.store[key] = value;
		uni.setStorageSync(key, value);
	};
	// #endif
};

function getStorageSync(key) {
	const temp = uni.getStorageSync(key);
	if (temp == "") {
		return getData(key);
	} else {
		return temp;
	};
};

function getData(key) {
	// #ifdef VUE2
	if (uni.store.state[key] == null || uni.store.state[key] == undefined || uni.store.state[key] == "") {
		return "";
	};
	return uni.store.state[key];
	// #endif
	// #ifdef VUE3
	if (uni.store[key] == null || uni.store[key] == undefined || uni.store[key] == "") {
		return "";
	};
	return uni.store[key];
	// #endif
};

const mixinStore = {
	methods: {
		getState(key) {
			return store.getState(key);
		},
		setState(key, value) {
			store.setState(key, value);
		},
		getStore(key) {
			return store.getStore(key);
		},
		setStore(key, value) {
			store.setStore(key, value);
		}
	}
};

export {
	store,
	mixinStore
}