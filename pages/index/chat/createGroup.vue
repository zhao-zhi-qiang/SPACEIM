<template>
	<view class="container">
		<u-navbar
				title="创建群组"
				:autoBack="true"
			>
			<view
				class="u-nav-slot"
				slot="left"
				@click="back()"
			>
			<u-icon name="arrow-left" size="28"></u-icon>
			</view>
		</u-navbar>
		<view class="group-avatar">
			<image src="../../../static/public/ad.png" mode="scaleToFill"></image>
		</view>
		<view class="group-name">
			<u--input
			    placeholder="请输入内容"
			    border="surround"
			    clearable
				shape='circle'
				v-model="form.groupTitle"
			  ></u--input>
		</view>
		<view class="friend-box">
			<view class="friend-box-title">
				好友
			</view>
			<scroll-view scroll-y="true" style="height: 68vh;">
				<view class="friend-box-content">
					<view class="friend-box-content-item" v-for="(item, index) in friendsData" :key="index">
						<u-checkbox shape="circle" size="32" :name="item.id" @change="radioChange"></u-checkbox>
						<image :src="item.avatar" mode=""></image>
						<text>{{item.nickname}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="create-btn" @click="saveInfo()">
			创建群组({{num}})
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				form:{
					groupTitle: '',
					groupLogo:'',
					groupMember: []
				},
				friendsData:[
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
					{
						id: 1,
						avatar: 'https://img2.baidu.com/it/u=187839426,1144466515&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500',
						nickname: '张三'
					},
				]
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			radioChange(data){
				console.log('checkData', data);
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
	background-color: ffffff;
	.group-avatar{
		width: 100%;
		height: 20vh;
		display: flex;
		align-items: center;
		justify-content: center;
		image{
			width: 100rpx;
			height: 100rpx;
		}
	}
	.group-name{
		width: 86%;
		height: 5vh;
		margin: 0 7%;
	}
	
	.friend-box{
		width: 100%;
		height: 75vh;
		display: flex;
		flex-direction: column;
		.friend-box-title{
			width: 100%;
			height: 5vh;
			line-height: 5vh;
			padding: 0 7%;
			color: #222222;
			font-weight: 600;
			font-size: 32rpx;
		}
		.friend-box-content{
			width: 100%;
			padding: 1vh 7%;
			display: flex;
			flex-direction: column;
			.friend-box-content-item{
				width: 100%;
				display: grid;
				grid-template-columns: 10% 15% 75%;
				align-items: center;
				margin-bottom: 20rpx;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 10rpx;
				}
			}
		}
	}
	.create-btn{
		width: 60%;
		position: fixed;
		bottom: 100rpx;
		left: 20%;
		background-color: #23a7ff;
		border-radius: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #ffffff;
	}
}
</style>
