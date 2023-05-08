<template>
	<view class="container">
		<view class="info-box">
			<view class="info-box-item">
				<view class="info-box-item-left">
					昵称
				</view>
				<view class="info-box-item-right">
					<input type="text" value="" v-model="form.nickname" />
				</view>
			</view>
			<view class="info-box-item">
				<view class="info-box-item-left">
					联系方式
				</view>
				<view class="info-box-item-right">
					<input type="text" value="" v-model="form.phone" />
				</view>
			</view>
			<view class="info-box-item">
				<view class="info-box-item-left">
					建议反馈
				</view>
				<view class="info-box-item-right">
					
				</view>
			</view>
			<view class="info-box-item">
				<u--textarea v-model="form.desc" placeholder="请输入建议" count ></u--textarea>
			</view>
		</view>
		<view class="save-btn" @click="saveInfo()">
			保存信息
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				mode: 'single',
				form:{
					phone:'',
					nickname: '',
					desc: ''
				}
			};
		},
		methods:{
			saveInfo(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	background-color: #f3f3f3;
	.info-box{
		width: 100%;
		display: flex;
		flex-direction: column;
		.info-box-item:nth-last-child(){
			width: 90%;
			margin: 0 5%;
			background-color: #ffffff;
		}
		.info-box-item{
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx 0;
			background-color: #ffffff;
			margin-bottom: 5rpx;
			.info-box-item-left{
				margin-left: 30rpx;
				font-size: 30rpx;
			}
			.info-box-item-right{
				margin-right: 30rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 28rpx;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
			}
		}
	}
	.save-btn{
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
