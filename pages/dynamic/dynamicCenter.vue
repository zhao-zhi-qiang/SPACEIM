<template>
	<view class="container">
		<u-navbar
				title="关系圈"
				:safeAreaInsetTop="true"
			>
			<view
				class="u-nav-slot"
				slot="left"
			>
			</view>
			  <view
				class="u-nav-slot"
				slot="right"
				@click="toSendDynamic()"
			>
				<text class="iconfont icon-lvjing" style="font-size: 56rpx; font-weight: 500;"></text>
			</view>
		</u-navbar>
		<view class="content-box">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toSendDynamic(){
				uni.navigateTo({
					url: '/pages/dynamic/sendDynamic'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
}
</style>
