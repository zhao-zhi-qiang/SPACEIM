<template>
	<view class="container">
		<view class="edit-pass-box">
			<view class="edit-pass-item">
				  <u--input
				    placeholder="请输入旧密码"
				    border="surround"
				    v-model="form.oldpass"
				    @change="change"
				  ></u--input>
			</view>
			<view class="edit-pass-item">
				  <u--input
				    placeholder="请输入新密码"
				    border="surround"
				    v-model="form.newpass"
				    @change="change"
				  ></u--input>
			</view>
			<view class="edit-pass-item">
				  <u--input
				    placeholder="请确认新密码"
				    border="surround"
				    v-model="form.checkpass"
				    @change="change"
				  ></u--input>
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
				form: {
					oldpass: '',
					newpass:'',
					checkpass:''
				}
			};
		},
		methods:{
			change(e) {
			  console.log('change', e);
			},
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
	.edit-pass-box{
		width: 100%;
		display: flex;
		flex-direction: column;
		.edit-pass-item{
			width: 100%;
			margin: 10rpx;
			background-color: #ffffff;
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
