<template>
	<view :style="{height:statusBarHeight}" />
</template>

<script setup lang="ts">
	const statusBarHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;
</script>

<style scoped>

</style>