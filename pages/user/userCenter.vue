<template>
	<view class="container">
		<view class="top-bg">
			<view class="top-bg-top" @click="toSet()">
				<image src="../../static/set.png" mode=""></image>
			</view>
			<view class="top-bg-middle">
				<view class="avatar">
					<image src="../../static/public/avatar/7.png" mode="aspectFill"></image>
				</view>
				<view class="account-info">
					<view class="nickname">菠萝吹雪</view>
					<view class="account">123458788@163.com</view>
				</view>
			</view>
		</view>
		<view class="menu-box">
			<view class="menu-item">
				<view class="menu-icon">
					<text class="iconfont icon-schedule" style="font-size: 68rpx; font-weight: 500;"></text>
				</view>
				<view class="menu-title">
					打卡签到
				</view>
			</view>
			<view class="menu-item">
				<view class="menu-icon">
					<text class="iconfont icon-groupctrl" style="font-size: 68rpx; font-weight: 500;"></text>
				</view>
				<view class="menu-title">
					邀请好友
				</view>
			</view>
			<view class="menu-item">
				<view class="menu-icon">
					<text class="iconfont icon-answer" style="font-size: 68rpx; font-weight: 500;"></text>
				</view>
				<view class="menu-title">
					联系我们
				</view>
			</view>
			<view class="menu-item">
				<view class="menu-icon">
					<text class="iconfont icon-safety" style="font-size: 68rpx; font-weight: 500;"></text>
				</view>
				<view class="menu-title">
					申请认证
				</view>
			</view>
		</view>
		<view class="menu-box-dynamic">
			<u-sticky>
				<view class="menu-box-dynamic-nav">
					<view class="menu-box-dynamic-nav-item" @click="changeNav(0)">
						<view class="menu-box-dynamic-nav-icon">
							<text class="iconfont icon-menu" :style="{color: currentNav == 0 ? '#6abfff':'#222222'}"></text>
						</view>
						<view class="menu-box-dynamic-nav-active" v-if="currentNav == 0">
						</view>
					</view>
					<view class="menu-box-dynamic-nav-item" @click="changeNav(1)">
						<view class="menu-box-dynamic-nav-icon">
							<text class="iconfont icon-collection" :style="{color: currentNav == 1 ? '#6abfff':'#222222'}"></text>
						</view>
						<view class="menu-box-dynamic-nav-active" v-if="currentNav == 1">
						</view>
					</view>
				</view>
			</u-sticky>
			<view class="menu-box-dynamic-content">
				<view class="recommend-dynamic-box" v-if="showChild">
					<waterfall v-model="dynamicsData">
						<template v-slot:left="{leftList}">
							<goodsDemo 
							:list="leftList"
						></goodsDemo>
						</template>
						<template v-slot:right="{rightList}">
							<goodsDemo :list="rightList"
							></goodsDemo>
						</template>
					</waterfall>
					<!-- 加载更多 -->
					<!-- <u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="getDynamicsGoods"></u-loadmore> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import waterfall from '@/components/waterfall/waterfall-list.vue'
	import goodsDemo from '@/components/waterfall/waterfall-item.vue'
	export default {
		components:{
			waterfall,
			goodsDemo
		},
		data() {
			return {
				currentNav: 0,
				dynamicsData: [],
				showChild: true,
			};
		},
		onShow() {
			this.dynamicsData = [
					{
						id: 1,
						title: '那个说永远不会离开我的人，早已离开了，那个说爱我的人，牵着的却是别人的手，那个说会等我的人，却跟另一个人走了。还有什么可以相信呢。',
						avatar: 'https://img0.baidu.com/it/u=4196418831,3741244744&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						image: 'https://img1.baidu.com/it/u=3472257836,939234315&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500',
						like: 50,
						nickname: '张三'
					},
					{
						id: 2,
						title: '每次面对美食，我都告诫自己：“吃多了会死。”但结果证明，我根本就不怕死。',
						avatar: 'https://img2.baidu.com/it/u=1285375996,3783960243&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						image: 'https://img1.baidu.com/it/u=145644453,1461388329&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
						like: 50,
						nickname: '张三'
					},
					{
						id: 3,
						title: '万事都要全力以赴，包括开心。',
						avatar: 'https://img2.baidu.com/it/u=2420977058,480384986&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=504',
						image: 'https://img0.baidu.com/it/u=3836144521,2500665936&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
						like: 50,
						nickname: '张三'
					},
					{
						id: 4,
						title: '人间不值得，但火锅烧烤麻辣烫串串烤鸭珍珠奶茶芒果布丁糯米鸡酸菜鱼肉夹馍凉皮虾饺蟹脚灌汤包螺丝粉过桥米线抹茶蛋糕爆米花炸鸡可乐蛋挞手抓饼青团云吞面章鱼丸子肠粉陈村粉烧肉叉烧老婆饼鸡蛋仔鱼蛋碗仔翅车仔面椰子鸡值得。',
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						image: 'https://img2.baidu.com/it/u=2880200998,720122030&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=806',
						like: 50,
						nickname: '张三'
					},
					{
						id: 5,
						title: '我说减肥也就是吓唬吓唬我身上的肉肉们。',
						avatar: 'https://img2.baidu.com/it/u=2857996178,1566414750&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						image: 'https://img1.baidu.com/it/u=3735625936,3013759888&fm=253&fmt=auto&app=138&f=JPEG?w=754&h=500',
						like: 50,
						nickname: '张三'
					},
					{
						id: 6,
						title: '如果你想拥有你从未有过的东西，那么你必须去做你从未做过的事情。努力，勤奋，共勉之！',
						avatar: 'https://img0.baidu.com/it/u=3877428373,4058258485&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						image: 'https://img1.baidu.com/it/u=1002507201,2490577487&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500',
						like: 50,
						nickname: '张三'
					}
				
			]
		},
		methods:{
			changeNav(data){
				this.currentNav = data
			},
			toSet(){
				uni.navigateTo({
					url: '/pages/set/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #f4f4f4;
	.top-bg{
		width: 100%;
		height: 360rpx;
		display: flex;
		flex-direction: column;
		background-image: url('../../static/public/friend-bg.jpg');
		background-size: 100% 100%;
		.top-bg-top{
			width: 100%;
			display: flex;
			justify-content: flex-end;
			image{
				margin: 100rpx 50rpx 0 0;
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
			}
		}
		.top-bg-middle{
			margin: 50rpx 0;
			width: 100%;
			display: grid;
			grid-template-columns: 20% 80%;
			.avatar{
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
			}
			.account-info{
				width: 100%;
				display: flex;
				flex-direction: column;
				.nickname{
					color: #ffffff;
				}
				.account{
					color: #ffffff;
				}
			}
		}
	}
	
	.menu-box{
		width: 100%;
		border-radius: 30rpx 30rpx 0 0;
		background-color: #ffffff;
		display: grid;
		grid-template-columns: repeat(4, 25%);
		margin-top: -30rpx;
		.menu-item{
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.menu-icon{
				// width: 50rpx;
				// height: 50rpx;
				// color: #222222;
				margin: 20rpx 0 15rpx 0;
			}
			.menu-title{
				font-size: 26rpx;
				color: #222222;
				margin-bottom: 15rpx;
			}
		}
	}
	
	.menu-box-dynamic{
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 20rpx 0;
		position: sticky;
		top: -20;
		z-index: 9;
		.menu-box-dynamic-nav{
			width: 100%;
			display: grid;
			grid-template-columns: repeat(4, 25%);
			background-color: #ffffff;
			.menu-box-dynamic-nav-item{
				width: 100%;
				display: flex;
				flex-direction: column;
				margin: 15rpx 0;
				.menu-box-dynamic-nav-icon{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					text{
						font-size: 68rpx;
						font-weight: 500;
					}
				}
				.menu-box-dynamic-nav-active{
					width: 60%;
					height: 10rpx;
					border-radius: 5rpx;
					margin: 0 20%;
					background-color: #6abfff;
				}
			}
		}
		.menu-box-dynamic-content{
			width: 100%;
		}
		
	}
}
</style>
