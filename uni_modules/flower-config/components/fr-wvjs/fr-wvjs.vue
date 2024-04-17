<template>
	<web-view v-if="isInit" class="__flower-web-view" :ref="wv" @onPostMessage="changeMessageWv"
		src="/uni_modules/flower-config/hybrid/html/fr-wvjs.html" />
</template>

<script>
	import {
		pageStoreMap,
		tempStoreMap,
		webviewContextStoreMap,
		uuid,
		getCurrentPagesRoute
	} from "@/uni_modules/flower-config/uni-app/store/wvStore.js";
	import {
		mixinStore
	} from "@/uni_modules/flower-store/uni-app";
	export default {
		mixins: [mixinStore],
		data() {
			return {
				wv: uuid(32),
				isInit: false,
				getCurrentPagesRoute: getCurrentPagesRoute()
			}
		},
		props: {
			type: {
				type: String,
				default: "svg"
			},
			isCache: {
				type: Boolean,
				default: false
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
				if (this.isCache) {
					if (this.getStore(this.resourceId) == "") {
						tempStoreMap[this.resourceId] = this.resource;
					};
				} else {
					if (this.getState(this.resourceId) == "") {
						tempStoreMap[this.resourceId] = this.resource;
					};
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
				if (event.detail.data[0].isInitialize) {
					webviewContextStoreMap[this.getCurrentPagesRoute] = this.wv;
					for (let i in tempStoreMap) {
						this.getwebviewContext(i, tempStoreMap[i]);
					};
				} else {
					if (this.isCache) {
						this.setStore(event.detail.data[0].id, event.detail.data[0].result);
					} else {
						this.setState(event.detail.data[0].id, event.detail.data[0].result);
					};
					delete tempStoreMap[event.detail.data[0].id];
				};
			},
			getwebviewContext(resourceId, resource) {
				if (this.isCache) {
					if (this.getStore(resourceId) == "") {
						this.$refs[webviewContextStoreMap[this.getCurrentPagesRoute]].evalJS(
							`onPostMessage('${this.type}','${resourceId}','${resource}')`);
					};
				} else {
					if (this.getState(resourceId) == "") {
						this.$refs[webviewContextStoreMap[this.getCurrentPagesRoute]].evalJS(
							`onPostMessage('${this.type}','${resourceId}','${resource}')`);
					};
				};
			};
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
		opacity: 0;
	}
</style>