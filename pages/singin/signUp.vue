<template>
	<view class="container">
		<view class="content-box">
			<view class="top">
				<image src="../../static/icon.png" mode=""></image>
			</view>
			<view class="middle">
				<view class="title">
					注册
				</view>
			</view>
			<view class="bottom">
				<u--form
					labelPosition="top"
					:model="model"
					:rules="rules"
					ref="form"
				>
					<u-form-item
						label="账号"
						labelWidth="auto"
						prop="account"
						borderBottom
						ref="item1"
					>
						<u--input
							v-model="model.account"
							border="none"
							placeholder="请输入手机号或邮箱"
						></u--input>
					</u-form-item>
					<u-form-item
						labelWidth="auto"
						label="密码"
						prop="password"
						borderBottom
						ref="item1"
					>
						<u--input
							v-model="model.password"
							border="none"
							placeholder="字母开头长度为6到15包含数字字母下划线"
						></u--input>
					</u-form-item>
					<u-form-item
						labelWidth="auto"
						label="确认密码"
						prop="checkPass"
						borderBottom
						ref="item1"
					>
						<u--input
							v-model="model.checkPass"
							border="none"
							placeholder="请确认你的密码"
						></u--input>
					</u-form-item>
				</u--form>
				<u-button type="primary" style="margin-top: 50rpx;" shape="circle" text="注册" @click="signUp()"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {signIn} from '@/utils/api/user.js'
	export default {
		data() {
			return {
				model: {
					account: '',
					password: '',
					checkPass:''
				},
				rules: {
					account: [
						{
							type: 'string',
							required: true,
							message: '请填写账号',
							trigger: ['blur', 'change']
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// uni.$u.test.mobile()就是返回true或者false的
								return uni.$u.test.mobile(value) || uni.$u.test.email(value);
							},
							message: '账号格式不正确',
							// 触发器可以同时用blur和change
							trigger: ['change','blur'],
						},
					],
					password: [
						{
							type: 'string',
							required: true,
							message: '请填写密码',
							trigger: ['blur', 'change']
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								let reg = /^[a-zA-Z](?![a-zA-Z]+$)\w{5,16}$/
								return new RegExp(reg).test(value)
							},
							message: '账号格式不正确',
							// 触发器可以同时用blur和change
							trigger: ['change','blur'],
						},
					],
					checkPass: [
						{
							type: 'string',
							required: true,
							message: '请与密码保持一致',
							trigger: ['blur', 'change']
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								return value == this.model.password
							},
							message: '请与密码保持一致',
							// 触发器可以同时用blur和change
							trigger: ['change','blur'],
						}
					]
				},
			};
		},
		methods:{
			signUp(){
				this.$refs.form.validate().then(res => {
					console.log('res',res);
					signIn(this.model).then(result => {
						console.log(result);
					}).catch(err => {
						
					})
					uni.$u.toast('校验通过')
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/singin/login'
						})
					}, 1000)
				}).catch(errors => {
					console.log('errors',errors);
					uni.$u.toast('请检查信息是否填写完成')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	
	.content-box{
		width: 100%;
		height: 70vh;
		.top{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 80rpx;
				height: 80rpx;
			}
		}
		
		.middle{
			width: 80%;
			margin: 50rpx auto;
			.title{
				font-weight: bold;
				font-size: 48rpx;
			}
			.tag{
				margin-top: 10rpx;
				font-size: 32rpx;
				color: rgba(39,40,50,0.50);
				font-weight: 400;
			}
		}
		.bottom{
			width: 80%;
			margin: 0 auto;
			text-align: center;
			text{
				display: inline-block;
				color: #55aaff;
				margin-top: 30rpx;
			}
			.signup-box{
				color: #b4b4b4;
				margin-top: 30rpx;
			}
		}
	}
	
	
	
}
</style>
