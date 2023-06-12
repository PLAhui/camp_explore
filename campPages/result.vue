<template>
	<view class="result">
		<view class="img">
			<image src="../static/logo.png" mode=""></image>
		</view>
		<view class="title">{{title}}</view>
		<view class="desc">{{desc}}</view>
		<tn-button @click="tn" shape="round" class="btn" backgroundColor="#01BEFF"
			fontColor="#080808">{{btnText}}</tn-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				desc: '',
				btnText: '',
			}
		},
		onLoad(e) {
			this.title = e.title;
			this.desc = e.desc;
			this.btnText = e.btnText;
		},
		methods: {
			tn() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.result {
		margin-top: 30%;
		text-align: center;

		.img {
			width: 150rpx;
			height: 150rpx;
			margin: 0 auto;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.title {
			font-size: 42rpx;
			padding: 15rpx;
		}

		.desc {
			padding: 10rpx;
			font-size: 32rpx;
		}

		.btn {
			margin: 20rpx;
		}
	}
</style>