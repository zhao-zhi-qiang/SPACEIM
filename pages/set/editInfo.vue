<template>
	<view class="container">
		<view class="info-box">
			<view class="info-box-item">
				<view class="info-box-item-left">
					头像
				</view>
				<view class="info-box-item-right">
					<image src="../../static/public/avatar/1.png" mode=""></image>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="info-box-item">
				<view class="info-box-item-left">
					昵称
				</view>
				<view class="info-box-item-right">
					<input type="text" value="" />
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="info-box-item">
				<view class="info-box-item-left">
					性别
				</view>
				<view class="info-box-item-right">
					<view class="gender-man-def" v-if="form.gender == 1"  @click="changeGender(0)">
						男<text class="iconfont">&#xe68d;</text>
					</view>
					<view class="gender-man-active" v-if="form.gender == 0">
						男<text class="iconfont">&#xe68d;</text>
					</view>
					<view class="gender-woman-def" v-if="form.gender == 0"  @click="changeGender(1)">
						女<text class="iconfont">&#xe68b;</text>
					</view>
					<view class="gender-woman-active" v-if="form.gender == 1">
						女<text class="iconfont">&#xe68b;</text>
					</view>
				</view>
			</view>
			<view class="info-box-item">
				<view class="info-box-item-left">
					生日
				</view>
				<view class="info-box-item-right" @click="openCalendr()">
					<text>{{form.birthday}}</text>
					<u-calendar :show="show" :mode="mode" @confirm="confirm"></u-calendar>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="info-box-item">
				<view class="info-box-item-left">
					城市
				</view>
				<view class="info-box-item-right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="info-box-item">
				<view class="info-box-item-left">
					签名
				</view>
				<view class="info-box-item-right">
					
				</view>
			</view>
			<view class="info-box-item">
				<u--textarea v-model="form.desc" placeholder="请输入个人简介" count ></u--textarea>
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
					avatar:'',
					nickname: '',
					gender: 0,
					birthday: '',
					desc: ''
				}
			};
		},
		methods:{
			openCalendr(){
				this.show = true
			},
			changeGender(data){
				this.form.gender = data
			},
			confirm(e) {
				console.log(e);
				this.form.birthday = e[0]
				this.show = false
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
				.gender-man-def{
					width: 100rpx;
					height: 50rpx;
					border: 2rpx solid #f8f8f8;
					border-radius: 25rpx;
					line-height: 50rpx;
					margin-right: 10rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
				}
				.gender-man-active{
					width: 100rpx;
					height: 50rpx;
					border: 2rpx solid #00CFFF;
					color: #00CFFF;
					border-radius: 25rpx;
					line-height: 50rpx;
					margin-right: 10rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
				}
				.gender-woman-def{
					width: 100rpx;
					height: 50rpx;
					border: 2rpx solid #f8f8f8;
					border-radius: 25rpx;
					line-height: 50rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
				}
				.gender-woman-active{
					width: 100rpx;
					height: 50rpx;
					border: 2rpx solid #ff85df;
					color: #ff85df;
					border-radius: 25rpx;
					line-height: 50rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
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
