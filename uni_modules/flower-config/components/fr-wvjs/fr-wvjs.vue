<template>
	<web-view v-if="isInit" class="__flower-web-view" :ref="wv" @onPostMessage="changeMessageWv" @load="webviewLoad"
		src="/uni_modules/flower-config/hybrid/html/fr-wvjs.html" />
</template>

<script>
	import {cacheStore,pageStoreMap,tempStoreMap,webviewContextStoreMap,uuid,getCurrentPagesRoute} from "@/uni_modules/flower-config/uni-app/store/wvStore.js";
	export default {
		data() {
			return {
				cacheStore: cacheStore,
				wv: uuid(32),
				isInit: false,
				getCurrentPagesRoute: getCurrentPagesRoute()
			}
		},
		props: {
			type: {
				type: String,
				default: "svg",
			},
			resourceId: {
				type: String,
				default: "",
				required: true
			},
			resource: {
				type: String,
				default: "",
				required: true
			}
		},
		created() {
			if (pageStoreMap[this.getCurrentPagesRoute] == undefined) {
				this.isInit = true;
				pageStoreMap[this.getCurrentPagesRoute] = this.wv;
			};

			if (webviewContextStoreMap[this.getCurrentPagesRoute] == undefined) {
				if (this.cacheStore[this.resourceId] == undefined) {
					tempStoreMap[this.resourceId] = this.resource;
				};
			} else {
				this.getwebviewContext(this.resourceId, this.resource);
			};
		},
		watch: {
			resource() {
				this.getwebviewContext(this.resourceId, this.resource);
			}
		},
		methods: {
			changeMessageWv(event) {
				// #ifdef VUE3
				this.cacheStore[event.detail.data[0].id] = event.detail.data[0].result;
				// #endif
				// #ifdef VUE2
				Vue.set(this.cacheStore, event.detail.data[0].id, event.detail.data[0].result);
				// #endif
				delete tempStoreMap[event.detail.data[0].id];
			},
			webviewLoad() {
				webviewContextStoreMap[this.getCurrentPagesRoute] = this.wv;
				for (let i in tempStoreMap) {
					this.getwebviewContext(i, tempStoreMap[i]);
				};
			},
			getwebviewContext(resourceId, resource) {
				if (this.cacheStore[resourceId] == undefined) {
					this.$refs[webviewContextStoreMap[this.getCurrentPagesRoute]].evalJS(
						`onPostMessage('${this.type}','${resourceId}','${resource}')`);
				};
			}
		},
		destroyed() {
			delete webviewContextStoreMap[this.getCurrentPagesRoute];
			delete pageStoreMap[this.getCurrentPagesRoute];
		}
	}
</script>

<style>
	.__flower-web-view {
		width: 0rpx;
		height: 0rpx;
	}
</style>