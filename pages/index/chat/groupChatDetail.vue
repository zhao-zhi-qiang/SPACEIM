<template>
	<view class="container">
		<u-navbar
				:title="nickanme"
				:safeAreaInsetTop="true"
			>
			<view
				class="u-nav-slot"
				slot="left"
				@click="back()"
			>
				<u-icon
					name="arrow-left"
					size="56"
				></u-icon>
			</view>
			  <view
				class="u-nav-slot"
				slot="right"
				@click="toGroupSet()"
			>
				<u-icon
					name="more-dot-fill"
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
								<view class="chat-child-content-other-author">
									{{child.nickname}}
								</view>
								<view class="chat-child-content-other-text">
									{{child.chat}}
								</view>
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
				nickanme: '有福同享, 有难同当',
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
							},
							{
								id: 1,
								chat:'今天是个好日子?',
								avatar: 'https://img0.baidu.com/it/u=3877428373,4058258485&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								nickname: '王五',
								type: 1,
								people: 1
							},
							{
								id: 1,
								chat:'人间不值得，但火锅烧烤麻辣烫串串烤鸭珍珠奶茶芒果布丁糯米鸡酸菜鱼肉夹馍凉皮虾饺蟹脚灌汤包螺丝粉过桥米线抹茶蛋糕爆米花炸鸡可乐蛋挞手抓饼青团云吞面章鱼丸子肠粉陈村粉烧肉叉烧老婆饼鸡蛋仔鱼蛋碗仔翅车仔面椰子鸡值得。',
								avatar: 'https://img2.baidu.com/it/u=2857996178,1566414750&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								nickname: '王五',
								type: 1,
								people: 1
							},
							{
								id: 1,
								chat:'如果你想拥有你从未有过的东西，那么你必须去做你从未做过的事情。努力，勤奋，共勉之！',
								avatar: 'https://img0.baidu.com/it/u=3877428373,4058258485&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								nickname: '王五',
								type: 1,
								people: 1
							},
							{
								id: 2,
								chat:'每次面对美食，我都告诫自己：“吃多了会死。”但结果证明，我根本就不怕死。',
								avatar: 'https://img2.baidu.com/it/u=2420977058,480384986&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=504',
								nickname: '李四',
								type: 1,
								people: 2
							},
						]
					}
				]
			};
		},
		methods:{
			toGroupSet(){
				uni.navigateTo({
					url: '/pages/index/chat/groupChatSet'
				})
			},
			back(){
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
						width: 85%;
						margin-left: 15%;
						margin-bottom: 25rpx;
						display: flex;
						flex-direction: row;
						align-items: flex-start;
						justify-content: flex-end;
						.chat-child-content-us-info{
							margin-right: 20rpx;
							background-color: #7ec2eb;
							border-radius: 15rpx 0 15rpx 15rpx;
							padding: 20rpx 15rpx;
							line-height: 45rpx;
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
						width: 85%;
						margin-right: 15%;
						display: flex;
						flex-direction: row;
						align-items: flex-start;
						justify-content: flex-start;
						.chat-child-content-other-info{
							margin-left: 20rpx;
							margin-bottom: 25rpx;
							.chat-child-content-other-author{
								width: 100%;
								font-size: 24rpx;
								margin-bottom: 15rpx;
							}
							.chat-child-content-other-text{
								background-color: #ffffff;
								border-radius: 0 15rpx 15rpx 15rpx;
								padding: 20rpx 15rpx;
								line-height: 45rpx;
							}
						}
						.chat-child-content-other-avatar{
							margin-top: 20rpx;
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
