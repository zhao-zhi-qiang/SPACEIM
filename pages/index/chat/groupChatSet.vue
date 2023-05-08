<template>
	<view class="container">
		<view class="group-user-box">
			<view class="group-user">
				<view class="group-user-item" v-for="(item, index) in groupUser.slice(0, num)" :key="index">
					<image :src="item.avatar" mode=""></image>
					<view class="user-nickname">{{item.nickname}}</view>
				</view>
				<view class="group-user-item">
					<view class="group-user-item-icon">
						<u-icon name="plus"></u-icon>
					</view>
				</view>
				<view class="group-user-item">
					<view class="group-user-item-icon">
						<u-icon name="minus"></u-icon>
					</view>
				</view>
			</view>
			<view class="loder-more" @click="loadMore()">
				查看更多群组成员<u-icon name="arrow-right" size="24"></u-icon>
			</view>
		</view>
		<view class="group-set">
			<view class="group-set-item">
				<view class="group-set-item-tag">
					群组名称
				</view>
				<view class="group-set-item-content" @click="editGroupInfo(1)">
					<view class="content">
						有福同享, 有难同当
					</view><u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
			<view class="group-set-item">
				<view class="group-set-item-tag" >
					群组简介
				</view>
				<view class="group-set-item-content"  @click="editGroupInfo(2)">
					<view class="content">友好交流互助群
					</view><u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
			<view class="group-set-item">
				<view class="group-set-item-tag">
					群组公告
				</view>
				<view class="group-set-item-content" @click="editAd()">
					<view class="content">
						群组公告
					</view><u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
			<view class="group-set-item">
				<view class="group-set-item-tag">
					群组头像
				</view>
				<view class="group-set-item-content">
					<view class="content">
						<image src="../../../static/public/friend-bg.jpg" mode="aspectFill"></image>
					</view><u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
			<view class="group-set-item">
				<view class="group-set-item-tag">
					群内昵称
				</view>
				<view class="group-set-item-content" @click="editGroupInfo(3)">
					<view class="content">
						狂拽酷仔
					</view><u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
		</view>
		
		<view class="bottom-btn-group">
			<view class="bottom-btn-group-item">
				解散群组
			</view>
			<view class="bottom-btn-group-item">
				退出群组
			</view>
		</view>
		<u-popup :show="show" mode="center" :round="10">
			<view>
				<view class="popup-box">
					<view class="popup-title">
						{{popupTtile}}
					</view>
					<view class="popup-content">
						  <u--input
						    placeholder="请输入内容"
						    border="surround"
						    v-model="value"
						  ></u--input>
					</view>
					<view class="popup-btn">
						<view class="popup-btn-item" style="color: #83c5ff;" @click="save()">
							确定
						</view>
						<view class="popup-btn-item" @click="close()">
							取消
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
				num: 8,
				popupTtile: '',
				show: false,
				value:'',
				groupUser:[
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					},{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						nickname: '张三',
					}
				]
			};
		},
		methods:{
			close() {
			  this.show = false
			  // console.log('close');
			},
			save(){
				 this.show = false
			},
			loadMore(){
				this.num = this.groupUser.length
			},
			editAd(){
				uni.navigateTo({
					url:'/pages/index/chat/groupChatAd'
				})
			},
			editGroupInfo(data){
				if(data == 1){
					this.popupTtile = '修改群组名称'
					this.show = true
				} else if(data == 2){
					this.popupTtile = '修改群组简介'
					this.show = true
				} else if(data == 3){
					this.popupTtile = '修改群内昵称'
					this.show = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	background-color: #f3f3f3;
	.group-user-box{
		width: 100%;
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		margin: 10rpx 0;
		.group-user{
			width: 100%;
			display: grid;
			grid-template-columns: repeat(5, 20%);
			.group-user-item{
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 15rpx 0;
				image{
					width: 90rpx;
					height: 90rpx;
					border-radius: 10rpx;
				}
				.user-nickname{
					margin-top: 10rpx;
					font-size: 24rpx;
				}
				.group-user-item-icon{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					border: 1rpx dashed #d8d8d8;
					width: 90rpx;
					height: 90rpx;
					border-radius: 10rpx;
				}
			}
		}
		
		.loder-more{
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;
			margin: 15rpx 0;
			color: #616161;
		}
	}
	
	
	.group-set{
		width: 100%;
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		margin-bottom: 10rpx;
		.group-set-item{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx 0;
			border-bottom: 1rpx solid #f0f0f0;
			.group-set-item-tag{
				width: 25%;
				display: flex;
				justify-content: flex-end;
			}
			.group-set-item-content{
				width: 75%;
				display: grid;
				grid-template-columns:85% 10% 5%;
				.content{
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;				
					text-overflow: ellipsis;		
					display: -webkit-box;			
					-webkit-line-clamp: 1;			
					line-clamp: 1;					
					-webkit-box-orient: vertical;
					text-align: right;
					image{
						width: 80rpx;
						height: 80rpx;
						border-radius: 10rpx;
						margin-right: 10rpx;
					}
				}
			}
		}
	}
	
	.bottom-btn-group{
		width: 100%;
		display: flex;
		flex-direction: column;
		.bottom-btn-group-item{
			width: 100%;
			text-align: center;
			line-height: 100rpx;
			color: #fe1f02;
			background-color: #ffffff;
			margin-bottom: 1rpx;
		}
	}
	
	.popup-box{
		width: 560rpx;
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		padding: 30rpx;
		.popup-title{
			width: 100%;
			text-align: center;
			line-height: 80rpx;
		}
		.popup-content{
			margin: 15rpx 0;
		}
		.popup-btn{
			width: 100%;
			display: grid;
			grid-template-columns: repeat(2, 50%);
			margin-top: 30rpx;
			.popup-btn-item{
				text-align: center;
			}
		}
	}
}
</style>
