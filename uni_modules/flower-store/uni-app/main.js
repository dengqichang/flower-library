// #ifdef VUE2
import Vue from 'vue';
import Vuex from 'vuex';
if (uni.store == undefined) {
	Vue.use(Vuex);
	const store = new Vuex.Store({state: {}});
	uni.store = store;
};
// #endif
// #ifdef VUE3
import {reactive} from "vue";
if (uni.store == undefined) {
	const store = reactive({});
	uni.store = store;
};
// #endif