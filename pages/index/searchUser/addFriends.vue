<template>
	<view class="container">
		<view class="info-top-box">
			<image src="../../../static/public/friend-bg.jpg" mode=""></image>
			<view class="info-top-right">
				<view class="nickname-box">
					张三
					<u-icon name="man" color="#2979ff" size="32" bold="true"></u-icon>
					<u-icon name="woman" color="#ff93d1" size="32" bold="true"></u-icon>
				</view>
				<view class="tag-box">
					今天干什么了
				</view>
			</view>
		</view>
		<view class="add-info">
			<view class="add-info-title">
				验证信息
			</view>
			<view class="add-info-content">
				<u--textarea v-model="value" placeholder="请输入内容" height="180" style="background-color: #f3f3f3;"></u--textarea>
			</view>
		</view>
		<view class="dynamic-box">
			<view class="dynamic-left">
				动态
			</view>
			<view class="dynamic-center">
				<image src="../../../static/public/friend-bg.jpg" mode=""></image>
				<image src="../../../static/public/friend-bg.jpg" mode=""></image>
				<image src="../../../static/public/friend-bg.jpg" mode=""></image>
				<image src="../../../static/public/friend-bg.jpg" mode=""></image>
			</view>
			<view class="dynamic-right" @click="toDynamicList()">
				<u-icon name="arrow-right" size="28"></u-icon>
			</view>
		</view>
		<view class="btn" @click="addFriend()">
			添加为好友
		</view>
		<view class="btn" @click="sendMessage()">
			发消息
		</view>
		<u-modal :show="show" :content='content' @confirm="close()"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: false,
				content: '申请好友信息已发送'
			};
		},
		methods:{
			addFriend(){
				this.show = true
			},
			close(){
				this.show = false
			},
			toDynamicList(){
				uni.navigateTo({
					url: '/pages/index/searchUser/userDunamicDetail'
				})
			},
			sendMessage(){
				uni.navigateTo({
					url: '/pages/index/chat/userChatDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	height: 100vh;
	background-color: #f3f3f3;
	.info-top-box{
		width: 100%;
		display: grid;
		grid-template-columns: 15% 75%;
		padding: 30rpx 5%;
		background-color: #ffffff;
		align-items: center;
		margin-bottom: 5rpx;
		image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 10rpx;
		}
		.info-top-right{
			width: 100%;
			display: flex;
			flex-direction: column;
			.nickname-box{
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-weight: 600;
			}
			.tag-box{
				color: #ababab;
				font-size: 28rpx;
			}
		}
	}
	
	.add-info{
		width: 100%;
		padding: 20rpx 5%;
		background-color: #ffffff;
		margin-bottom: 25rpx;
		.add-info-title{
			margin-bottom: 20rpx;
		}
		.add-info-content{
			width: 90%;
		}
	}
	
	.dynamic-box{
		width: 100%;
		padding: 30rpx 5%;
		background-color: #ffffff;
		display: grid;
		grid-template-columns: 10% 70% 10%;
		align-items: center;
		margin-bottom: 20rpx;
		.dynamic-left{
			font-size: 28rpx;
		}
		.dynamic-center{
			width: 100%;
			display: grid;
			grid-template-columns: repeat(4, 25%);
			align-items: center;
			image{
				width: 120rpx;
				height: 120rpx;
			}
		}
		.dynamic-right{
			
		}
	}
	
	.btn{
		width: 100%;
		line-height: 100rpx;
		text-align: center;
		background-color: #ffffff;
		margin-bottom: 20rpx;
		color: #3A97FD;
		font-size: 28rpx;
	}
}
</style>
