<template>
	<view class="container">
		<view class="nav-bar">
			<view class="nav-bar-left"	@click="back()">
				<u-icon name="arrow-left" size="28"></u-icon>
			</view>
			<view class="nav-bar-center">
				<u--input
				   placeholder="请输入内容"
				   border="surround"
				   v-model="value"
									
				 ></u--input>
			</view>
			<view class="nav-bar-right" @click="changeData()">
				取消
			</view>
		</view>
		<view class="content-box">
			<view class="content-box-nav">
				<u-subsection :list="navData" :current="curNow" @change="sectionChange" fontSize="30"></u-subsection>
			</view>
			<view class="content-box-info">
				<view class="content-box-info-item" v-for="(item, index) in newData" :key="index">
					<image :src="item.avatar" mode=""></image>
					<view class="info-box">
						<view class="info-box-top">
							{{item.nickname}}
						</view>
						<view class="info-box-bottom">
							{{item.email}}
						</view>
					</view>
					<view class="btn-def" v-if="curNow == 0 && item.type == 0" @click="toFriendChat(item.id)">
						发消息
					</view>
					<view class="btn-active" v-if="curNow == 0 && item.type == 1" @click="toJoinFriend(item.id)">
						加好友
					</view>
					<view class="btn-def" v-if="curNow == 1 && item.type == 0" @click="toGroupChat(item.id)">
						去聊天
					</view>
					<view class="btn-active" v-if="curNow == 1 && item.type == 1" @click="toJoinGroup(item.id)">
						加入群
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:'',
				type:"warning",
				newData:[],
				curNow: 0,
				navData: ['用户','群组'],
			};
		},
		onLoad() {
			this.changeData()
		},
		methods:{
			back(){
				uni.navigateBack({
				   delta:1
				})
		    },
			sectionChange(index) { 
				console.log('index',index);
			    this.curNow = index;
		    },
			toFriendChat(data){
				uni.navigateTo({
					url:'/pages/index/chat/userChatDetail'
				})
			},
			toJoinFriend(data){
				uni.navigateTo({
					url:'/pages/index/searchUser/addFriends'
				})
			},
			toGroupChat(data){
				uni.navigateTo({
					url:'/pages/index/chat/groupChatDetail'
				})
			},
			toJoinGroup(data){
				uni.showToast({
					title: '加入成功',
					icon: 'none'
				})
				// uni.navigateTo({
				// 	url:'/pages/index/searchUser/joinGroup'
				// })
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			changeData(){
				let data = [
				     { 
				      id: 1,
				      avatar:'https://cdn.uviewui.com/uview/album/1.jpg',
				      nickname: '红海南法撒旦',
				      email: '12252555@163.com',
				      type: 0
				     },
				     {
				      id: 2,
				      avatar:'https://cdn.uviewui.com/uview/album/2.jpg',
				      nickname: '阿拉丁',
				      email: '12252555@163.com',
				      type: 1
				     },
				     {
				      id: 3,
				      avatar:'https://cdn.uviewui.com/uview/album/3.jpg',
				      nickname: '君莫笑',
				      email: '12252555@163.com',
				      type: 1
				     },
				     {
				      id: 4,
				      avatar:'https://cdn.uviewui.com/uview/album/4.jpg',
				      nickname: '青青子衿 ',
				      email: '12252555@163.com',
				      type: 1
				     },
				     {
				      id: 5,
				      avatar:'https://cdn.uviewui.com/uview/album/5.jpg',
				      nickname: '谈恼了',
				      email: '12252555@163.com',
				      type: 1
				     },
				     {
				      id: 6,
				      avatar:'https://cdn.uviewui.com/uview/album/6.jpg',
				      nickname: '无所谓',
				      email: '12252555@163.com',
				      type: 0
				     },
				     {
				      id: 7,
				      avatar:'https://cdn.uviewui.com/uview/album/7.jpg',
				      nickname: '心中的很好',
					  email: '12252555@163.com',
				      type: 1
				     },
				     {
				      id: 8,
				      avatar:'https://cdn.uviewui.com/uview/album/8.jpg',
				      nickname: '好友长度1',
				      email: '12252555@163.com',
				      type: 0
				     },
				     {
				      id: 9,
				      avatar:'https://cdn.uviewui.com/uview/album/9.jpg',
				      nickname: '还有什么',
				      email: '12252555@163.com',
				      type: 1
				     },
				     {
				      id: 10,
				      avatar:'https://cdn.uviewui.com/uview/album/10.jpg',
				      nickname: '下落不明',
				      email: '12252555@163.com',
				      type: 0
				     }
				]
				this.newData = data
				console.log('this.newData',this.newData);
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	padding-top: var(--status-bar-height);
	.nav-bar{
		width: 100%;
		height: 44px;
		display: grid;
		grid-template-columns: 10% 75% 15%;
		line-height: 44px;
		.nav-bar-left{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.nav-bar-center{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.nav-bar-right{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.content-box{
		width: 100%;
		display: flex;
		flex-direction: column;
		.content-box-info{
			width: 100%;
			display: flex;
			flex-direction: column;
			padding: 40rpx 0;
			.content-box-info-item{
				width: 94%;
				margin: 10rpx 3%;
				display: grid;
				grid-template-columns: 15% 70% 15%;
				align-items: center;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 10rpx;
				}
				.info-box{
					width: 100%;
					display: flex;
					flex-direction: column;
				}
				.btn-def{
					border: 1rpx solid #B7B5B5;
					color: #B7B5B5;
					text-align: center;
					line-height: 50rpx;
					font-size: 24rpx;
					border-radius: 50rpx;
					padding: 0 10rpx;
				}
				.btn-active{
					color: #2E6FF7;
					background-color: #BAE7FA;
					text-align: center;
					line-height: 50rpx;
					font-size: 24rpx;
					border-radius: 50rpx;
					padding: 0 10rpx;
				}
			}
		}
	}
}
</style>
