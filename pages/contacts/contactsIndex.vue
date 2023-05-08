<template>
	<view class="container">
		<view class="contacts-box">
			<u-index-list :index-list="indexList" style="height: 100vh;">
				<template v-for="(item, index) in contactsData" style="height: 100vh;">
					<!-- #ifdef APP-NVUE -->
					<u-index-anchor :text="indexList[index]"></u-index-anchor>
					<!-- #endif -->
					<u-index-item>
						<!-- #ifndef APP-NVUE -->
						<u-index-anchor :text="indexList[index]"></u-index-anchor>
						<!-- #endif -->
						<view class="list-cell" v-for="(cell, index) in item">
							<view class="contacts-item">
								<view class="contacts-avatar">
									<image :src="cell.avatar" mode="scaleToFill"></image>
								</view>
								<view class="contacts-title">
									{{cell.nickname}}
								</view>
							</view>
						</view>
					</u-index-item>
				</template>
			</u-index-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: ["","A", "B", "C","D","E","F","G","H","I","J","K","L"],
				contactsData: [
					[
						{
							id: 1,
							nickname: '群组',
							avatar: 'https://img2.baidu.com/it/u=260392975,4042156557&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						}
					],
					[
						{
							id: 1,
							nickname: '安恩',
							avatar: 'https://img2.baidu.com/it/u=1285375996,3783960243&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						},
						{
							id: 2,
							nickname: '阿真',
							avatar: 'https://img0.baidu.com/it/u=2686830122,2626764524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						}
					],
					[
						{
							id: 3,
							nickname: '卜健',
							avatar: 'https://img0.baidu.com/it/u=2556841078,3045963903&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						},
						{
							id: 4,
							nickname: '布隆',
							avatar: 'https://img2.baidu.com/it/u=678147894,3846377462&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						},
						{
							id: 5,
							nickname: '不一样的烟花',
							avatar: 'https://img1.baidu.com/it/u=2004980926,670048445&fm=253&fmt=auto&app=138&f=JPEG?w=502&h=500'
						},
						{
							id: 6,
							nickname: '波比',
							avatar: 'https://img1.baidu.com/it/u=3791990802,2436391927&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						}
					],
					[
						{
							id: 7,
							nickname: '超人强',
							avatar: 'https://img0.baidu.com/it/u=723247665,900033109&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						},
						{
							id: 8,
							nickname: '超超',
							avatar: 'https://img0.baidu.com/it/u=3503539438,3698924609&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						},
						{
							id: 9,
							nickname: '超越人生',
							avatar: 'https://img2.baidu.com/it/u=1532174908,576730749&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						},
						{
							id: 10,
							nickname: 'Change',
							avatar: 'https://img2.baidu.com/it/u=3959172845,931824298&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						}
					]
				],
				itemArr: [
					['列表A1','列表A2','列表A3'],
					['列表B1','列表B2','列表B3'],
					['列表C1','列表C2','列表C3'],
					['列表D1','列表D2','列表D3'],
					['列表E1','列表E2','列表E3'],
					['列表F1','列表F2','列表F3'],
					['列表G1','列表G2','列表G3'],
					['列表H1','列表H2','列表H3'],
					['列表I1','列表I2','列表I3'],
					['列表J1','列表J2','列表J3'],
					['列表K1','列表K2','列表K3'],
					['列表L1','列表L2','列表L3']
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	height: 100vh;
	background-color: #f3f3f3;
	.contacts-box{
		width: 100%;
		height: 100vh;
		.list-cell {
			display: flex;
			box-sizing: border-box;
			width: 100%;
			overflow: hidden;
			color: #323233;
			background-color: #fff;
			.contacts-item{
				width: 90%;
				padding: 15rpx 5%;
				border-bottom: 1rpx solid #f3f3f3;
				display: flex;
				flex-direction: row;
				align-items: center;
				.contacts-avatar{
					image{
						width: 80rpx;
						height: 80rpx;
						border-radius: 10rpx;
					}
				}
				.contacts-title{
					margin-left: 15rpx;
				}
			}
		}
	}
}
	
</style>