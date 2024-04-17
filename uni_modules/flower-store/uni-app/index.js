class store {
	static getState = (key) => {
		return getData(key);
	};
	static setState = (key, value) => {
		setData(key, value);
	};

	static getStore = (key) => {
		return getStorageSync(key);
	};
	static setStore = (key, value) => {
		setData(key, value);
		uni.setStorageSync(key, value);
	};

	static getStoreState = (key, isCache) => {
		return isCache ? getStorageSync(key) : getData(key);
	};
	static setStoreState = (key, value, isCache) => {
		setData(key, value);
		if (isCache) {
			uni.setStorageSync(key, value);
		};
	};

};

function getStorageSync(key) {
	const temp = uni.getStorageSync(key);

	if (temp === "") {
		return getData(key);
	};
	if (getData(key) !== "") {
		return getData(key);
	};

	return temp;
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

function setData(key, value) {
	// #ifdef VUE2
	Vue.set(uni.store.state, key, value);
	// #endif
	// #ifdef VUE3
	uni.store[key] = value;
	// #endif
}

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
		},
		getStoreState(key, isCache) {
			return store.getStoreState(key, isCache);
		},
		setStoreState(key, value, isCache) {
			store.setStoreState(key, value, isCache);
		}
	}
};

export {
	store,
	mixinStore
}