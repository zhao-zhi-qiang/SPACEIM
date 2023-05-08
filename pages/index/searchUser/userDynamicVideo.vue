<template>
	<view class="container">
		<video :src="url"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			};
		},
		onLoad(option) {
			console.log('option', option);
			this.url = option.url
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	video{
		width: 100vw;
		height: 100vh;
	}
}
</style>
