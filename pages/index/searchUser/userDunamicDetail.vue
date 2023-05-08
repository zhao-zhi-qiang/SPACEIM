<template>
	<view class="container">
		<u-navbar
				:title="title"
				:autoBack="true"
				:bgColor="bgColor"
			>
			<view
				class="u-nav-slot"
				slot="left"
				@click="back()"
			>
			<u-icon name="arrow-left" size="28"></u-icon>
			</view>
		</u-navbar>
		<view class="top-box">
			<image src="../../../static/public/friend-bg.jpg" mode="scaleToFill"></image>
		</view>
		<view class="dynamic-box">
			<view class="user-info">
				<view class="user-nickname">
					没有什么能够阻挡
				</view>
				<view class="user-avatar">
					<image src="../../../static/public/avatar/3.png" mode=""></image>
				</view>
			</view>
			<view class="dynamic-content">
				<view class="dynamic-content-item" v-for="(item, index) in dynamicData" :key="index">
					<view class="dynamic-content-item-one" v-if="item.image && item.image.length >= 4">
						<view class="dynamic-time">
							<view class="dynamic-time-year">
								{{parseTime(item.time, 'year')}}
							</view>
							<view class="dynamic-time-month">
								{{parseTime(item.time, 'month')}}
							</view>
						</view>
						<view class="dynamic-detail">
							<image :src="child" mode="aspectFill" v-for="(child, index) in item.image.slice(0, 4)"></image>
						</view>
						<view class="dynamic-title">
							{{item.title}}
						</view>
					</view>
					<view class="dynamic-content-item-two" v-if="item.image && item.image.length > 1 && item.image.length <= 3 ">
						<view class="dynamic-time">
							<view class="dynamic-time-year">
								{{parseTime(item.time, 'year')}}
							</view>
							<view class="dynamic-time-month">
								{{parseTime(item.time, 'month')}}
							</view>
						</view>
						<view class="dynamic-detail">
							<image :src="child" mode="aspectFill" v-for="(child, index) in item.image.slice(0, 4)"></image>
						</view>
						<view class="dynamic-title">
							{{item.title}}
						</view>
					</view>
					<view class="dynamic-content-item-three" v-if="item.image && item.image.length == 1">
						<view class="dynamic-time">
							<view class="dynamic-time-year">
								{{parseTime(item.time, 'year')}}
							</view>
							<view class="dynamic-time-month">
								{{parseTime(item.time, 'month')}}
							</view>
						</view>
						<view class="dynamic-detail">
							<image :src="item.image[0]" mode="aspectFill"></image>
						</view>
						<view class="dynamic-title">
							{{item.title}}
						</view>
					</view>
					<view class="dynamic-content-item-four" v-if="item.video">
						<view class="dynamic-time">
							<view class="dynamic-time-year">
								{{parseTime(item.time, 'year')}}
							</view>
							<view class="dynamic-time-month">
								{{parseTime(item.time, 'month')}}
							</view>
						</view>
						<view class="dynamic-detail" :style="{backgroundImage: 'url('+item.coverImg+')'}" @click="playVideo(item)">
							<u-icon class="play-btn" name="play-circle" color="#ffffff" size="36"></u-icon>
						</view>
						<view class="dynamic-title">
							{{item.title}}
						</view>
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
				bgColor: '',
				title: '',
				dynamicData: [
					{	
						id: 1,
						time: '2023-02',
						title: '阳光，森林，湖水，草地，慢节奏的舒适感，看得我想去旅游了。',
						image: [
							'https://img2.baidu.com/it/u=1681482734,1616463568&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
							'https://img0.baidu.com/it/u=2480353319,2641247138&fm=253&fmt=auto&app=138&f=JPEG?w=786&h=500',
							'https://img0.baidu.com/it/u=4151823500,4135342708&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=398',
							'https://img2.baidu.com/it/u=3406579662,2107692040&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
							'https://img1.baidu.com/it/u=914956749,3256339640&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=308',
							'https://img2.baidu.com/it/u=1479447549,2677743489&fm=253&fmt=auto&app=120&f=JPEG?w=1574&h=800',
							'https://img2.baidu.com/it/u=252874825,2828446548&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
							'https://img0.baidu.com/it/u=118440038,250822156&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
							'https://img1.baidu.com/it/u=3720944424,2805480992&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
						],
					},
					{
						id: 2,
						time: '2023-02',
						title: '人生最好的旅行，就是让你发现一种久违的感动。不受羁绊，没有约束的幸福感，唯有在路上才能感受。',
						image: [
							'https://img1.baidu.com/it/u=914956749,3256339640&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=308',
							'https://img2.baidu.com/it/u=1479447549,2677743489&fm=253&fmt=auto&app=120&f=JPEG?w=1574&h=800',
						],
					},
					{
						id: 3,
						time: '2023-02',
						title: '然后去哪里？去特列切亚科夫斯基画廊。我教你，教呀教，可一点作用也没有。那里都是到首都来出差和旅游的。我看的是画，又不是人。',
						image: [
							'https://img1.baidu.com/it/u=3720944424,2805480992&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
						],
					},
					{
						id: 4,
						time: '2023-02',
						title: '因为旅行让你认识到有些东西重于满足眼欲。你会意识到自己的无知，总沉迷于自己的小世界。旅行教会你成长，成为与以往不同的自己，一个更好的自己。',
						image: [
							'https://img2.baidu.com/it/u=3406579662,2107692040&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
							'https://img1.baidu.com/it/u=914956749,3256339640&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=308',
							'https://img2.baidu.com/it/u=1479447549,2677743489&fm=253&fmt=auto&app=120&f=JPEG?w=1574&h=800',
							'https://img2.baidu.com/it/u=252874825,2828446548&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
							'https://img0.baidu.com/it/u=118440038,250822156&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
							'https://img1.baidu.com/it/u=3720944424,2805480992&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
						],
					},
					{
						id: 4,
						time: '2023-02',
						title: '阳光，森林，湖水，草地，慢节奏的舒适感，看得我想去旅游了。',
						image: [
							'https://img2.baidu.com/it/u=1681482734,1616463568&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
							'https://img0.baidu.com/it/u=2480353319,2641247138&fm=253&fmt=auto&app=138&f=JPEG?w=786&h=500',
							'https://img0.baidu.com/it/u=4151823500,4135342708&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=398',
							'https://img2.baidu.com/it/u=3406579662,2107692040&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
							'https://img1.baidu.com/it/u=914956749,3256339640&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=308',
							'https://img2.baidu.com/it/u=1479447549,2677743489&fm=253&fmt=auto&app=120&f=JPEG?w=1574&h=800',
							'https://img2.baidu.com/it/u=252874825,2828446548&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
							'https://img0.baidu.com/it/u=118440038,250822156&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
							'https://img1.baidu.com/it/u=3720944424,2805480992&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
						],
					},
					{
						id: 4,
						time: '2023-02',
						title: '我期望有一个人能够陪我去我想去的地方，一齐牵手看沿途的风景，即使他没空陪我，在我跟朋友去游玩回来，侃侃而谈的跟他讲一路上趣事。',
						image: [
							'https://img2.baidu.com/it/u=1681482734,1616463568&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
							'https://img0.baidu.com/it/u=2480353319,2641247138&fm=253&fmt=auto&app=138&f=JPEG?w=786&h=500',
							'https://img0.baidu.com/it/u=4151823500,4135342708&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=398',
							'https://img2.baidu.com/it/u=3406579662,2107692040&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
							'https://img1.baidu.com/it/u=914956749,3256339640&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=308',
							'https://img2.baidu.com/it/u=1479447549,2677743489&fm=253&fmt=auto&app=120&f=JPEG?w=1574&h=800',
							'https://img2.baidu.com/it/u=252874825,2828446548&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
							'https://img0.baidu.com/it/u=118440038,250822156&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
							'https://img1.baidu.com/it/u=3720944424,2805480992&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
						],
					},
					{
						id: 4,
						time: '2023-02',
						title: '旅游是另一种生活，生活是一场旅游，行进的脚步永不停歇的捡拾生命的完美与苍砣，让旅游多了生活的意义，让生活多了旅游的心境。',
						video: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
						coverImg: 'https://img2.baidu.com/it/u=252874825,2828446548&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
					},
					{
						id: 4,
						time: '2023-02',
						title: '旅游是另一种生活，生活是一场旅游，行进的脚步永不停歇的捡拾生命的完美与苍砣，让旅游多了生活的意义，让生活多了旅游的心境。',
						image: [
							'https://img2.baidu.com/it/u=1681482734,1616463568&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
							'https://img0.baidu.com/it/u=2480353319,2641247138&fm=253&fmt=auto&app=138&f=JPEG?w=786&h=500',
							'https://img0.baidu.com/it/u=4151823500,4135342708&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=398',
							'https://img2.baidu.com/it/u=3406579662,2107692040&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
							'https://img1.baidu.com/it/u=914956749,3256339640&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=308',
							'https://img2.baidu.com/it/u=1479447549,2677743489&fm=253&fmt=auto&app=120&f=JPEG?w=1574&h=800',
							'https://img2.baidu.com/it/u=252874825,2828446548&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
							'https://img0.baidu.com/it/u=118440038,250822156&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
							'https://img1.baidu.com/it/u=3720944424,2805480992&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
						],
					},
					{
						id: 4,
						time: '2023-02',
						title: '人生就像一场旅游，不必在乎目的地，在乎的是沿途的风景以及看风景的心境，让心灵去旅游！',
						image: [
							'https://img2.baidu.com/it/u=1681482734,1616463568&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
							'https://img0.baidu.com/it/u=2480353319,2641247138&fm=253&fmt=auto&app=138&f=JPEG?w=786&h=500',
							'https://img0.baidu.com/it/u=4151823500,4135342708&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=398',
							'https://img2.baidu.com/it/u=3406579662,2107692040&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
							'https://img1.baidu.com/it/u=914956749,3256339640&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=308',
							'https://img2.baidu.com/it/u=1479447549,2677743489&fm=253&fmt=auto&app=120&f=JPEG?w=1574&h=800',
							'https://img2.baidu.com/it/u=252874825,2828446548&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
							'https://img0.baidu.com/it/u=118440038,250822156&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
							'https://img1.baidu.com/it/u=3720944424,2805480992&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
						],
					}
				]
			};
		},
		computed:{
			parseTime(){
				return function(time, type){
					// console.log('type', type);
					let timeStr = ''
					if(type == 'year'){
						// console.log('time', time.split('-')[0]);
						timeStr = time.split('-')[0].substr(0, 2) + '年'
					} else if(type == 'month'){
						// console.log('time', time.split('-')[1]);
						timeStr = time.split('-')[1] + '月'
					}
					return timeStr
				}
			}
		},
		onLoad() {
			this.bgColor = 'rgba(255,255,255,0)'
			this.title = ''
		},
		onPageScroll : function(e) {
			console.log("滚动距离为：" + e.scrollTop);
			if(e.scrollTop >= 480){
				this.bgColor = 'rgba(255,255,255,1)'
				this.title = '动态圈'
			} else {
				this.bgColor = 'rgba(255,255,255,0)'
				this.title = '动态圈'
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			playVideo(data){
				uni.navigateTo({
					url: '/pages/index/searchUser/userDynamicVideo?url='+ data.video
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	.top-box{
		width: 100%;
		height: 480rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.dynamic-box{
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: -80rpx;
		.user-info{
			width: 90%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			padding: 0 5%;
			.user-nickname{
				font-size: 28rpx;
				color: #ffffff;
				z-index: 9;
				margin-right: 15rpx;
			}
			.user-avatar{
				width: 110rpx;
				height: 110rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
		.dynamic-content{
			width: 90%;
			padding: 30rpx 5%;
			.dynamic-content-item{
				width: 100%;
				margin: 30rpx 0;
				.dynamic-content-item-one{
					width: 100%;
					display: grid;
					grid-template-columns: 20% 20% 60%;
					align-items: flex-start;
					.dynamic-time{
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: flex-end;
						font-weight: 600;
						.dynamic-time-year{
							font-size: 32rpx;
						}
						.dynamic-time-month{
							font-size: 26rpx;
						}
					}
					.dynamic-detail{
						width: 140rpx;
						height: 140rpx;
						image{
							width: 70rpx;
							height: 70rpx;
						}
					}
					.dynamic-title{
						font-size: 24rpx;
						padding: 0 15rpx;
						line-height: 30rpx;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;				
						text-overflow: ellipsis;		
						display: -webkit-box;			
						-webkit-line-clamp: 3;			
						line-clamp: 3;					
						-webkit-box-orient: vertical;	
					}
				}
				
				.dynamic-content-item-two{
					width: 100%;
					display: grid;
					grid-template-columns: 20% 20% 60%;
					align-items: flex-start;
					.dynamic-time{
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: flex-end;
						font-weight: 600;
						.dynamic-time-year{
							font-size: 32rpx;
						}
						.dynamic-time-month{
							font-size: 26rpx;
						}
					}
					.dynamic-detail{
						width: 140rpx;
						height: 140rpx;
						image{
							width: 70rpx;
							height: 140rpx;
						}
					}
					.dynamic-title{
						font-size: 24rpx;
						padding: 0 15rpx;
						line-height: 30rpx;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;				
						text-overflow: ellipsis;		
						display: -webkit-box;			
						-webkit-line-clamp: 3;			
						line-clamp: 3;					
						-webkit-box-orient: vertical;	
					}
				}
				
				.dynamic-content-item-three{
					width: 100%;
					display: grid;
					grid-template-columns: 20% 20% 60%;
					align-items: flex-start;
					.dynamic-time{
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: flex-end;
						font-weight: 600;
						.dynamic-time-year{
							font-size: 32rpx;
						}
						.dynamic-time-month{
							font-size: 26rpx;
						}
					}
					.dynamic-detail{
						width: 140rpx;
						height: 140rpx;
						image{
							width: 140rpx;
							height: 140rpx;
						}
					}
					.dynamic-title{
						font-size: 24rpx;
						padding: 0 15rpx;
						line-height: 30rpx;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;				
						text-overflow: ellipsis;		
						display: -webkit-box;			
						-webkit-line-clamp: 3;			
						line-clamp: 3;					
						-webkit-box-orient: vertical;	
					}
				}
				
				.dynamic-content-item-four{
					width: 100%;
					display: grid;
					grid-template-columns: 20% 20% 60%;
					align-items: flex-start;
					.dynamic-time{
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: flex-end;
						font-weight: 600;
						.dynamic-time-year{
							font-size: 32rpx;
						}
						.dynamic-time-month{
							font-size: 26rpx;
						}
					}
					.dynamic-detail{
						width: 140rpx;
						height: 140rpx;
						background-size: 100% 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						.play-btn{
						}
					}
					.dynamic-title{
						font-size: 24rpx;
						padding: 0 15rpx;
						line-height: 30rpx;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;				
						text-overflow: ellipsis;		
						display: -webkit-box;			
						-webkit-line-clamp: 3;			
						line-clamp: 3;					
						-webkit-box-orient: vertical;	
					}
				}
			}
		}
	}
}
</style>
