<template>
	<view class="template-index tn-safe-area-inset-bottom">
		<view class='tn-tabbar-height' style="background-color:cadetblue;"></view>
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha :isBack="false" :bottomShadow="false">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<!-- 图标logo -->
				<view class="custom-nav__back" @click="tn('/homePages/about')">
					<view class="logo-pic tn-shadow-blur"
						style="background-image:url('https://tnuiimage.tnkjapp.com/logo/logo2.png')">
						<view class="logo-image">
						</view>
					</view>
					<!-- <view class="tn-icon-left"></view> -->
				</view>
				<!-- 搜索框 -->
				<view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center"
					@click="tn('/homePages/search')">
					<view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left"
						style="background-color: rgba(230,230,230,0.3);">
						<view class="custom-nav__search__icon tn-icon-search tn-color-white"></view>
						<view class="custom-nav__search__text tn-padding-left-xs tn-color-white">搜索 xxxx</view>
					</view>
				</view>
			</view>
		</tn-nav-bar>
	</view>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {
				cardCur: 0,
			}
		},
		beforeCreate(){console.log("beforeCreate home")},
		created() {console.log("created home")},
		methods: {
			tn(url) {
				console.log("跳转搜索页", this.$api)
				this.$api.petsList().then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-index {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}


	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 0 60rpx;
				font-size: 24rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				// color: #AAAAAA;
			}
		}
	}

	.logo-image {
		width: 65rpx;
		height: 65rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 自定义导航栏内容 end */
</style>
