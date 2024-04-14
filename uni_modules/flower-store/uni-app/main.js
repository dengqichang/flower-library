// #ifdef VUE2
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({state: {}});
// #endif
// #ifdef VUE3
import {reactive} from "vue";
const store = reactive({});
// #endif
uni.store = store;