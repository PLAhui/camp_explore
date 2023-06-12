<template>
	<view class="template-edit tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<view class="tn-safe-area-inset-bottom" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="tn-text-bold tn-text-lg tn-padding-sm">这个营区在什么环境中？</view>


			<view class="">
				<view class="tn-text-lg tn-padding-sm">营区环境</view>
				<view class="CampDetailCards">
					<view class="card border-content tn-border-solid" v-for="index in 6">
						<view class="rightTopTag tn-icon-success-circle tn-color-green"></view>
						<view class="avatar">
							<tn-avatar src="xxx.jpg" size="lg"></tn-avatar>
						</view>
						<view class="title">帐地</view>
					</view>

				</view>
			</view>



			<!-- 悬浮按钮-->
			<view class="tn-flex tn-footerfixed">
				<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
					<tn-button backgroundColor="" padding="40rpx 0" width="100%" shadow fontBold @click="submit">
						<text class="tn-color-black">完 成</text>
						<text class="tn-padding-left-xs tn-color-black"></text>
					</tn-button>
				</view>
				<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
					<tn-button backgroundColor="#6bba7f" padding="40rpx 0" width="100%" shadow fontBold @click="next">
						<text class="tn-color-white">继续完善</text>
						<text class="tn-padding-left-xs tn-color-black"></text>
					</tn-button>
				</view>
			</view>

		</view>

		<view class='tn-tabbar-height'></view>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateEdit',
		mixins: [template_page_mixin],
		data() {
			return {
				action: 'https://www.hualigs.cn/api/upload',
				// action: '',
				formData: {
					apiType: 'this,ali',
					token: 'dffc1e06e636cff0fdf7d877b6ae6a2e',
					image: null
				},
				fileList: [],
				showUploadList: true,
				customBtn: false,
				autoUpload: true,
				showProgress: false,
				deleteable: true,
				customStyle: false,
				maxCount: 9,
				disabled: false,
			}
		},
		onLoad() {

		},
		methods: {
			submit() {
				uni.navigateTo({
					url: '/campPages/result?title=' + '提交成功' + '&desc=' + '感谢您的分享，审核通过后将公开显示。' + '&btnText=' +
						'我知道了'
				})
			},
			next() {
				uni.navigateTo({
					url: '/campPages/campInfoType/campInfoType'
				})
			},
			tn() {
				uni.navigateTo({
					url: '/campPages/campInfoType/campInfoSelect'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-edit {}

	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.15);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		color: #FFFFFF;
		font-size: 18px;

		.icon {
			display: block;
			flex: 1;
			margin: auto;
			text-align: center;
		}

		&:before {
			content: " ";
			width: 1rpx;
			height: 110%;
			position: absolute;
			top: 22.5%;
			left: 0;
			right: 0;
			margin: auto;
			transform: scale(0.5);
			transform-origin: 0 0;
			pointer-events: none;
			box-sizing: border-box;
			opacity: 0.7;
			background-color: #FFFFFF;
		}
	}

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 45rpx;
			padding: 10rpx 30rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 标签内容 end*/
</style>