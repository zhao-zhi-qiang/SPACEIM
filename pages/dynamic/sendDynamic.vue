<template>
	<view class="container">
		<view class="option-box" v-if="isShow == false">
			<view class="option-item" @click="chooseImg()">
				<text class="iconfont icon-tupian" style="font-size: 68rpx; font-weight: 500;"></text>
			</view>
			<view class="option-item">
				<text class="iconfont icon-paizhao" style="font-size: 68rpx; font-weight: 500;"></text>
			</view>
		</view>
		<view class="dynamic-box" v-if="isShow == true">
			<view class="dynamic-img-box">
				<view class="dynamic-img-box-item" v-for="(item, index) in imgTimp" 
				:key="index" @tap="ViewImage($event,item.src)" :data-url="imgTimp[index]">
					<image :src="imgTimp[index]" mode="scaleToFill"></image>
					<view class="del-img" @tap.stop="DelImg" :data-index="index">
						<u-icon name="trash" size="56" color="#ff5500"></u-icon>
					</view>
				</view>
				<view class="dynamic-img-box-item-not" v-if="imgTimp.length < 9">
					<u-icon name="plus" size="56"></u-icon>
				</view>
			</view>
			<view class="dynamic-video-box">
				
			</view>
			<view class="dynamic-img-content">
				<u--textarea v-model="value" placeholder="请输入内容" border="bottom" autoHeight ></u--textarea>
			</view>
		</view>
		
		<view class="save-btn" v-if="isShow == true">
			发布
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				imgList: [],
				imgTimp: [],
				value:''
			};
		},
		methods:{
			// 预览照片
			ViewImage(e,data){
				uni.previewImage({
					urls: data,
					current: e.currentTarget.dataset.url
				});
			},
			// 删除照片
			DelImg(e){
				uni.showModal({
					title:'提示',
					content: '确定删除吗?',
					cancelText: '取消',
					confirmText: '确认',
					success: res => {
						if(res.confirm){
							this.imgTimp.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			chooseImg(){
				this.isShow = true
				let that = this
				uni.chooseImage({
					count: 9, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log('图片res',res);
						if(this.imgTimp.length!=0){
							this.imgTimp = this.imgTimp.concat(res.tempFilePaths)
						} else {
							this.imgTimp = res.tempFilePaths
						}
						console.log("图片地址", this.imgTimp)
						// this.url = this.imgTimp
					},
					fail:function(err){
						uni.showToast({
							title: '没有授权相机无法使用相机功能，如果有需要使用请到手机设置里面选择相机允许',
							icon: 'none',
							duration:3000
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	.option-box{
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 50%);
		align-items: center;
		.option-item{
			width: 250rpx;
			height: 250rpx;
			border-radius: 10rpx;
			border: 1rpx dashed #ababaa;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 50rpx auto;
		}
		.option-item:nth-child(1){
			background-color: #d4b0ff;
		}
		.option-item:nth-child(2){
			background-color: #ffff7f;
		}
	}
	
	.dynamic-box{
		width: 100%;
		display: flex;
		flex-direction: column;
		.dynamic-img-box{
			width: 90%;
			margin: 30rpx 5%;
			display: grid;
			grid-template-columns: repeat(3, 33.3%);
			.dynamic-img-box-item{
				width: 200rpx;
				height: 200rpx;
				margin: 20rpx 0;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
				.del-img{
					position: relative;
					z-index: 999;
					top: -200rpx;
					right: -150rpx;
					font-size: 56rpx;
					width: 100rpx;
					height: 100rpx;
					color: #ff0000;
				}
			}
			.dynamic-img-box-item-not{
				width: 200rpx;
				height: 200rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 10rpx;
				border: 1rpx dashed #ababaa;
			}
		}
		.dynamic-video-box{
			
		}
		.dynamic-img-content{
			width: 90%;
			margin: 30rpx 5%;
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
