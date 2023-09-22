<template>
	<view :style="styles" class="_ui-empty-loading-spinner" />
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			color: {
				type: String,
				default: ""
			}
		},
		computed: {
			styles() {
				return {
					borderTopColor: this.color
				}
			}
		}
	}
</script>

<style scoped>
	._ui-empty-loading-spinner {
		box-sizing: content-box;
		width: 28rpx;
		height: 28rpx;
		border-width: 4rpx;
		border-style: solid;
		border-bottom-color: rgba(0, 0, 0, 0.1);
		border-right-color: rgba(0, 0, 0, 0.1);
		border-left-color: rgba(0, 0, 0, 0.1);
		border-radius: 100%;
		animation: _ui-empty-loading-spinner__circle 1s linear infinite;
	}

	@keyframes _ui-empty-loading-spinner__circle {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>