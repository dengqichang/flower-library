class state {
	// #ifdef VUE2
	static getStore = (key) => {
		return uni.store.state[key]
	};
	static setStore = (key, value) => {
		Vue.set(uni.store.state, key, value);
	};
	// #endif
	// #ifdef VUE3
	static getStore = (key) => {
		return uni.store[key]
	};
	static setStore = (key, value) => {
		uni.store[key] = value;
	};
	// #endif
};

const mixinState = {
	methods: {
		getStore(key) {
			return state.getStore(key)
		},
		// #ifdef VUE2
		setStore(key, value){
			Vue.set(uni.store.state, key, value);
		},
		// #endif
		// #ifdef VUE3
		setStore(key, value){
			uni.store[key] = value;
		},
		// #endif
	}
};

export {
	state,
	mixinState
}