<template>
	<view class="container">
		<u-navbar
				title="群组公告"
				:autoBack="true"
			>
			<view
				class="u-nav-slot"
				slot="left"
				@click="back()"
			>
			<u-icon name="arrow-left" size="28"></u-icon>
			</view>
			  <view
				class="u-nav-slot"
				slot="right"
			>
				<view class="btn btn-edit" v-if="isEdit == false" @click="changeEdit()">
					编辑
				</view>
				<view class="btn btn-save" v-if="isEdit == true" @click="changeEdit()">
					保存
				</view>
			</view>
		</u-navbar>
		<view class="btn-content">
			<u--textarea v-if="isEdit == true" v-model="value" height="800" placeholder="请输入内容" autoHeight ></u--textarea>
			<u--textarea v-if="isEdit == false" v-model="value" height="800"  placeholder="请输入内容" disabled autoHeight ></u--textarea>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEdit: false,
				value: ''
			};
		},
		methods:{
			changeEdit(){
				this.isEdit = !this.isEdit
			},
			back(){
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
	height: 100vh;
	background-color: #f3f3f3;
	padding-top: 80rpx;
	.btn{
		font-size: 28rpx;
	}
	.btn-edit{
		color: #b0b0b0;
	}
	.btn-save{
		color: #8cb0f3;
	}
	
	.btn-content{
		width: 90%;
		margin: 50rpx 5%;
	}
}
</style>
