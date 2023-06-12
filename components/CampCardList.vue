<template>
	<view class="root" :style="{height: height + 'px'}">







		<view class="card" v-for="index in 10" :key="index" v-if="true">
			<view class="location">
				<tn-tag size="lg" shape="circle" backgroundColor="rgb(255,255,255,0.2)">
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
					<tn-tag shape="circle" backgroundColor="rgb(255,255,255,0.2)" margin="10rpx 10rpx 0 0">免费</tn-tag>
					<tn-tag shape="circle" backgroundColor="rgb(255,255,255,0.2)" margin="10rpx 10rpx 0 0">免费</tn-tag>
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
				value: 2,
				
			};
		},
		methods: {
			
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
		//背景图片显示完整
		background: url(https://s1.ax1x.com/2023/06/12/pCZdOQP.jpg) no-repeat center;
		background-size: 100% 100%;

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

			.title {
				font-size: 38rpx;
			}

			.tags {
				display: flex;
				justify-content: flex-start; //左右布局
				flex-wrap: wrap; //如果一行放不下就会自动换行
			}
		}
	}
</style>