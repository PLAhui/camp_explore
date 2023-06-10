<template>
	<view class="root" :style="{height: height + 'px'}">
		<view class="card" v-for="index in 10" :key="index">
			<view class="location">
				<tn-tag size="lg" shape="circle"  plain backgroundColor="">
					<text class="tn-icon-location"></text>
					180km
				</tn-tag>
			</view>
			<view class="info">
				<view class="score">
					<tn-rate activeColor="#f0953f" inactiveColor="#E7D5FA" v-model="value" :count="count"></tn-rate>
					<text class="tn-padding-left-sm">11评价</text>
				</view>
				<view class="title">二七区南环公园</view>
				<view class="tags">
					<tn-tag shape="circle"  plain backgroundColor="#77624d" margin="10rpx 10rpx 0 0">免费</tn-tag>
					<tn-tag shape="circle"  plain backgroundColor="#77624d" margin="10rpx 10rpx 0 0">免费</tn-tag>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "CampCardList",
		props: {
			height: {
				type: Number,
				default: 0,
			}
		},
		data() {
			return {
				count: 5,
				value: 2
			};
		}
	}
</script>

<style lang="scss" scoped>
	.root {
		// background-color: aqua;
	}

	.card {
		position: relative;
		background-color: chocolate;
		border-radius: 10rpx;
		margin: 20rpx 15rpx;
		height: 300rpx;
		background: url(https://img0.baidu.com/it/u=3511715110,3119766139&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500);

		.location {
			position: absolute;
			width: auto;
			padding: 20rpx;
			top: 20rpx;
			right: 20rpx;
			color: white;
			font-weight: 500;
		}

		.info {
			position: absolute;
			bottom: 0;
			padding: 20rpx;
			color: white;
			font-weight: 500;
			.title{
				font-size: 38rpx;
			}
			.tags{
				display: flex;
				justify-content: flex-start; //左右布局
				flex-wrap: wrap; //如果一行放不下就会自动换行
			}
		}
	}
</style>