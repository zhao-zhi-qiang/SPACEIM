<template>
	<view class="container">
		<u-navbar
				:title="nickanme"
				:safeAreaInsetTop="true"
			>
			<view
				class="u-nav-slot"
				slot="left"
				@click="rightClick()"
			>
				<u-icon
					name="arrow-left"
					size="56"
				></u-icon>
			</view>
		</u-navbar>
		<view class="content-box">
			<view class="content-box-item" v-for="(item, index) in chatData" :key="index">
				<view class="content-box-item-time">
					{{item.time}}
				</view>
				<view class="content-box-item-chat">
					<view class="item-chat-child" v-for="(child, index) in item.chatData" :key="index">
						<view class="chat-child-content-us" v-if="child.people == 2">
							<view class="chat-child-content-us-info">
								{{child.chat}}
							</view>
							<view class="chat-child-content-us-avatar">
								<image :src="child.avatar" mode=""></image>
							</view>
						</view>
						<view class="chat-child-content-other" v-if="child.people == 1">
							<view class="chat-child-content-other-avatar">
								<image :src="child.avatar" mode=""></image>
							</view>
							<view class="chat-child-content-other-info">
								{{child.chat}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-box" v-if="show == false">
			<view class="bottom-box-left">
				<text class="iconfont icon-yuyin" style="font-size: 68rpx; font-weight: 500;"></text>
			</view>
			<view class="bottom-box-midlle" @click="open(0)">
				  <u--input
				    placeholder="请输入内容"
				    border="surround"
				    v-model="form.content"
				    @change="change"
				  ></u--input>
			</view>
			<view class="bottom-box-right">
				<text class="iconfont icon-xiaolian" style="font-size: 68rpx; font-weight: 500;"  @click="open(1)"></text>
				<text class="iconfont icon-jia" style="font-size: 68rpx; font-weight: 500;"  @click="open(2)"></text>
			</view>
		</view>
		<u-popup :show="show" mode="bottom"  @close="close">
			<view>
				<view class="chat-box">
					<view class="chat-top-box">
						<view class="chat-top-box-left">
							<text class="iconfont icon-yuyin" style="font-size: 68rpx; font-weight: 500;"></text>
						</view>
						<view class="chat-top-box-midlle">
							  <u--input
							    placeholder="请输入内容"
							    border="surround"
							    v-model="form.content"
							    @change="change"
							  ></u--input>
						</view>
						<view class="chat-top-box-right">
							<text class="iconfont icon-xiaolian" style="font-size: 68rpx; font-weight: 500;"></text>
							<text class="iconfont icon-jia" style="font-size: 68rpx; font-weight: 500;"></text>
						</view>
					</view>
					<view class="chat-option">
						<view class="chat-option-one">
							
						</view>
						<view class="chat-option-two">
							
						</view>
						<view class="chat-option-three">
							
						</view>
						<view class="chat-option-four">
							<view class="chat-option-four-item">
								<view class="chat-option-four-item-icon">
									<text class="iconfont icon-tupian" style="font-size: 68rpx; font-weight: 500;"></text>
								</view>
								<view class="chat-option-four-item-title">
									图片
								</view>
							</view>
							<view class="chat-option-four-item">
								<view class="chat-option-four-item-icon">
									<text class="iconfont icon-paizhao" style="font-size: 68rpx; font-weight: 500;"></text>
								</view>
								<view class="chat-option-four-item-title">
									拍照
								</view>
							</view>
							<view class="chat-option-four-item">
								<view class="chat-option-four-item-icon">
									<text class="iconfont icon-ditu" style="font-size: 68rpx; font-weight: 500;"></text>
								</view>
								<view class="chat-option-four-item-title">
									定位
								</view>
							</view>
							<view class="chat-option-four-item">
								<view class="chat-option-four-item-icon">
									<text class="iconfont icon-dianhua" style="font-size: 68rpx; font-weight: 500;"></text>
								</view>
								<view class="chat-option-four-item-title">
									通话
								</view>
							</view>
							<view class="chat-option-four-item">
								<view class="chat-option-four-item-icon">
									<text class="iconfont icon-shoujian" style="font-size: 68rpx; font-weight: 500;"></text>
								</view>
								<view class="chat-option-four-item-title">
									文件
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickanme: '张三',
				show: false,
				form: {
					content:''
				},
				chatData: [
					{   
						id: 1,
						time: '12:00',
						chatData: [
							{
								id: 1,
								chat:'今天去哪里啊?',
								avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								nickname: '张三',
								type: 1,
								people: 1
							},
							{
								id: 2,
								chat:'今天去哪里啊?',
								avatar: 'https://img2.baidu.com/it/u=2420977058,480384986&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=504',
								nickname: '李四',
								type: 1,
								people: 2
							},
							{
								id: 3,
								chat:'今天去哪里啊?',
								avatar: 'https://img2.baidu.com/it/u=2420977058,480384986&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=504',
								nickname: '李四',
								type: 1,
								people: 2
							},
							{
								id: 4,
								chat:'今天去哪里啊?',
								avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								nickname: '张三',
								type: 1,
								people: 2
							}
						]
					}
				]
			};
		},
		methods:{
			rightClick(){
				uni.navigateBack({
					delta:1
				})
			},
			change(){
				
			},
			open(data) {
				console.log('open', data);
				this.show = true
			},
			close() {
				this.show = false
				// console.log('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	height: 100vh;
	background-color: #f3f3f3;
	.content-box{
		width: 94%;
		margin: 44px 3%;
		display: flex;
		flex-direction: column;
		.content-box-item{
			width: 100%;
			display: flex;
			flex-direction: column;
			.content-box-item-time{
				width: 100%;
				text-align: center;
				line-height: 50rpx;
				margin: 30rpx 0;
			}
			.content-box-item-chat{
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.item-chat-child{
					width: 100%;
					.chat-child-content-us{
						width: 70%;
						margin-left: 30%;
						margin-bottom: 25rpx;
						display: flex;
						flex-direction: row;
						align-items: flex-start;
						justify-content: flex-end;
						.chat-child-content-us-info{
							margin-right: 20rpx;
							background-color: #7ec2eb;
							border-radius: 15rpx 0 15rpx 15rpx;
							padding: 0 15rpx;
							line-height: 80rpx;
						}
						.chat-child-content-us-avatar{
							image{
								width: 80rpx;
								height: 80rpx;
								border-radius: 10rpx;
							}
						}
					}
					.chat-child-content-other{
						width: 70%;
						margin-right: 30%;
						display: flex;
						flex-direction: row;
						align-items: flex-start;
						justify-content: flex-start;
						.chat-child-content-other-info{
							margin-left: 20rpx;
							background-color: #ffffff;
							margin-bottom: 25rpx;
							border-radius: 0 15rpx 15rpx 15rpx;
							padding: 0 15rpx;
							line-height: 80rpx;
						}
						.chat-child-content-other-avatar{
							image{
								width: 80rpx;
								height: 80rpx;
								border-radius: 10rpx;
							}
						}
					}
				}
			}
		}
	}
	.bottom-box{
		width: 100%;
		position: fixed;
		padding: 20rpx 0 30rpx 0;
		bottom: 0;
		left: 0;
		display: grid;
		grid-template-columns: 10% 70% 20%;
		background-color: #ffffff;
		box-shadow: 0 0 10rpx 0 #b3b3b3;
	}
	.chat-box{
		width: 100%;
		display: flex;
		flex-direction: column;
		.chat-top-box{
			width: 100%;
			padding: 20rpx 0 30rpx 0;
			display: grid;
			grid-template-columns: 15% 65% 20%;
			background-color: #ffffff;
			box-shadow: 0 0 10rpx 0 #b3b3b3;
			.chat-top-box-left{
				width: 100%;
			}
			.chat-top-box-midlle{
				width: 100%;
			}
			.chat-top-box-right{
				width: 100%;
			}
		}
		.chat-option{
			width: 100%;
			height: 480rpx;
			.chat-option-one{
				
			}
			.chat-option-two{
				
			}
			.chat-option-three{
				
			}
			.chat-option-four{
				width: 100%;
				background-color: #f3f3f3;
				display: grid;
				grid-template-columns: repeat(4,25%);
				.chat-option-four-item{
					width: 150rpx;
					height:150rpx;
					border-radius: 10rpx;
					background-color: #ffffff;
					margin: 20rpx auto;
					display: flex;
					flex-direction: column;
					align-items: center;
					.chat-option-four-item-icon{
						font-size: 68rpx;
					}
					.chat-option-four-item-title{
						
					}
				}
			}
		}
	}
}
</style>
