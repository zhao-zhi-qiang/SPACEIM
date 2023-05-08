<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<u--image :fade="true" duration="450" radius="10" :showLoading="true" :src="src" width="70rpx" height="70rpx"></u--image>
			</view>
			<view class="top-bar-center">
				<image src="../../static/icon.png" mode=""></image>
			</view>
			<view class="top-bar-right">
				<u-icon name="search" color="#000000" size="56" @click="toSearch()"></u-icon>
				<u-icon name="plus-circle" color="000000" size="40" @click="toCreateGroup()"></u-icon>
			</view>
		</view>
		<view class="u-page">
			<u-list
				@scrolltolower="scrolltolower"
			>
				<u-list-item
					v-for="(item, index) in indexList"
					:key="index"
				>
					<view class="item-box" @click="toChatDetail(item)">
						<view class="avatar">
							<image :src="item.avatar" mode=""></image>
							<u-badge class="u-badge" numberType="ellipsis" :offset="[-10, -10]" :type="type" max="9" :absolute="true" :value="item.value"></u-badge>
						</view>
						<view class="item-box-right">
							<view class="title">
								<view class="tag">{{item.title}}</view>
								<view class="time">{{changeTime(item.time)}}</view>
							</view>
							<view class="info-content">
								{{item.news}}
							</view>
						</view>
					</view>
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script>
	import util from '@/commons/js/utils.js'
	export default {
		data() {
			return {
				title: 'Hello',
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				indexList: [],
				type:"warning",
				newData:[
					{
						avatar:'https://cdn.uviewui.com/uview/album/1.jpg',
						time: new Date(),
						title: '红海南法撒旦',
						news: '要做一个，闪闪发光的人。',
						value: 5,
						type: 1
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/2.jpg',
						time: new Date(),
						title: '阿拉丁',
						news: '把你的脸迎向阳光，那就不会有阴影',
						value: 6,
						type: 1
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/3.jpg',
						time: new Date(),
						title: '君莫笑',
						news: '吃亏的事情经常会发生，但要坚信人生总是相对公平的。假如自己处处精明，时时准备去算计别人，总爱占别人的便宜，其实吃亏最大的还是自己。何必分秒计算盈亏，多一点给予，少一点索取。吃亏能够给自己带来美名，而爱占便宜会败坏自己的名誉。',
						value: 10,
						type: 2
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/4.jpg',
						time: new Date(),
						title: '青青子衿 ',
						news: '赶快让心情好起来吧，你看就连今 天的阳光都如此明媚灿烂，都在努力为你驱逐烦恼焦躁，希望你灰暗的心情在此刻明亮起来，去迎接美好的明天！',
						value: 5,
						type: 2
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/5.jpg',
						time: new Date(),
						title: '谈恼了',
						news: '感情的事总是很难说清楚，我知道分手总是令人难过的，但无论如何，我永远都会站在你这一边，支持你。努力让自己快乐起来吧，好吗？',
						value: 5,
						type: 2
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/6.jpg',
						time: new Date(),
						title: '无所谓',
						news: '我相信你，不要在难受了。',
						value: 5,
						type: 1
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/7.jpg',
						time: new Date(),
						title: '心中的很好',
						news: '能够把自己压得低低的，那才是真正的尊贵。',
						value: 8,
						type: 1
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/8.jpg',
						time: new Date(),
						title: '好友长度1',
						news: '雨会停，心会晴，没什么会永远糟糕透顶。',
						value: 12,
						type: 1
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/9.jpg',
						time: new Date(),
						title: '还有什么',
						news: '几乎所有事情都是两面性的，如只看消极的一面，心情自然会低落郁闷。让自己换个角度，从积极的一面看待问题吧，那样会让你走出心情低谷的。',
						value: 5,
						type: 2
					},
					{
						avatar:'https://cdn.uviewui.com/uview/album/10.jpg',
						time: new Date(),
						title: '下落不明',
						news: '对方对你不好，正是给你机会离开他，对自己好。人贵在自爱。 短信祝福语大全',
						value: 15,
						type: 2
					}
				],
			}
		},
		computed:{
			
		},
		onLoad() {
			this.loadmore()
			this.indexList.unshift({
				avatar:'../../static/public/addUser.png',
				time: new Date(),
				title: '好友申请',
				news: '查看新增好友申请',
				value: 12
			})
		},
		methods: {
			toSearch(){
				uni.navigateTo({
					url: '/pages/index/searchUser/searchUser'
				})
			},
			toCreateGroup(){
				uni.navigateTo({
					url: '/pages/index/chat/createGroup'
				})
			},
			toChatDetail(data){
				if(data.type == 1){
					uni.navigateTo({
						url: '/pages/index/chat/userChatDetail'
					})
				} else if(data.type == 2){
					uni.navigateTo({
						url: '/pages/index/chat/groupChatDetail'
					})
				}
			},
			changeTime(date){
				return util.dateFormat(date)
			},
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push(this.newData[uni.$u.random(0, this.newData.length - 1)])
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		padding-top: var(--status-bar-height);
		padding-bottom: 15rpx;
		.top-bar{
			width: 100%;
			// padding-top: var(--status-bar-height);
			// position: fixed;
			box-sizing: border-box;
			// top: 0;
			// left: 0;
			display: grid;
			z-index: 999;
			grid-template-columns: 20% 60% 20%;
			height: 88rpx;
			box-shadow:  0 1px 0 0 rgba(0, 0, 0, 0.1);
			.top-bar-left{
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.top-bar-center{
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 50rpx;
					height: 50rpx;
				}
			}
			.top-bar-right{
				width: 80%;
				margin: auto;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
			}
		}
		.u-page{
			.item-box{
				width: 100%;
				padding: 15rpx 0;
				box-sizing: border-box;
				display: grid;
				grid-template-columns: 15% 85%;
				align-items: center;
				border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
				&:active{
					background-color: rgba(0, 0, 0, 0.1);
				}
				.avatar{
					margin: auto;
					position: relative;
					background-color: #FFE431;
					width: 85rpx;
					height: 85rpx;
					border-radius: 15rpx;
					image{
						width: 85rpx;
						height: 85rpx;
						border-radius: 15rpx;
					}
					.u-badge{
						position: absolute;
					}
				}
				.item-box-right{
					width: 100%;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					padding-right: 20rpx;
					.title{
						color: #000;
						font-weight: 400;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
						box-sizing: border-box;
						.tag{
							font-size: 36rpx;
							color: #272832;
							font-weight: 400;
						}
						.time{
							color: rgba(39,40,50,0.40);
							font-size: 24rpx;
						}
					}
					.info-content{
						font-size: 28rpx;
						color: rgba(39,40,50,0.60);
						font-weight: 400;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}
				}
			}
		}
	}
</style>
