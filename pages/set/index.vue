<template>
	<view class="container">
		<view class="set-box">
			<view class="set-item" @click="editInfo()">
				<view class="set-item-left">
					编辑资料
				</view>
				<view class="set-item-right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="set-item">
				<view class="set-item-left">
					我的邀请码
				</view>
				<view class="set-item-right">
					123456
				</view>
			</view>
			<view class="set-item" @click="editPass()">
				<view class="set-item-left">
					修改密码
				</view>
				<view class="set-item-right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="set-item">
				<view class="set-item-left">
					客服中心
				</view>
				<view class="set-item-right">
					010-25632563
				</view>
			</view>
			<view class="set-item">
				<view class="set-item-left">
					版本信息
				</view>
				<view class="set-item-right">
					1.0.1
				</view>
			</view>
			<view class="set-item" @click="feedBack()">
				<view class="set-item-left">
					意见反馈
				</view>
				<view class="set-item-right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="set-item">
				<view class="set-item-left">
					清理缓存
				</view>
				<view class="set-item-right">
					75.6M
				</view>
			</view>
			<view class="set-item" @click="userProtocol()">
				<view class="set-item-left">
					用户使用协议
				</view>
				<view class="set-item-right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="set-item" @click="privacyPolicy()">
				<view class="set-item-left">
					隐私政策
				</view>
				<view class="set-item-right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="login-out" @click="loginOut()">
			退出登录
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
			loginOut(){
				uni.navigateTo({
					url: '/pages/singin/login'
				})
			},
			editInfo(){
				uni.navigateTo({
					url: '/pages/set/editInfo'
				})
			},
			editPass(){
				uni.navigateTo({
					url:'/pages/set/editPass'
				})
			},
			feedBack(){
				uni.navigateTo({
					url:'/pages/set/feedBack'
				})
			},
			userProtocol(){
				uni.navigateTo({
					url:'/pages/set/userProtocol'
				})
			},
			privacyPolicy(){
				uni.navigateTo({
					url:'/pages/set/privacyPolicy'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	.set-box{
		width: 100%;
		display: flex;
		flex-direction: column;
		.set-item{
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 25rpx 0;
			background-color: #ffffff;
			margin-bottom: 5rpx;
			.set-item-left{
				font-size: 28rpx;
				margin-left: 30rpx;
			}
			.set-item-right{
				font-size: 26rpx;
				margin-right: 30rpx;
			}
		}
	}
	
	.login-out{
		position: absolute;
		left: 25%;
		bottom: 100rpx;
		width: 50%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
		margin: 50rpx auto;
		text-align: center;
		color: #ffffff;
		background-color: #00CFFF;
		box-shadow: 0 0 6rpx 0 #f3f3f3;
	}
}
</style>
