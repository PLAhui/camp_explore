<template>
	<view class="template-edit tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
			<view>这个营地在哪？叫什么？</view>
		</tn-nav-bar>

		<view class="tn-safe-area-inset-bottom" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">营地位置</view>
				</view>
			</view>
			<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<input placeholder="👉🏻戳快速定位营地导航位置" name="input" placeholder-style="color:#AAAAAA" ></input>
			</view>
			
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">营地名称</view>
				</view>
			</view>
			<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<input placeholder="给营地起个名称" name="input" placeholder-style="color:#AAAAAA" ></input>
			</view>

			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">营地简介</view>
				</view>
			</view>

			<view class="tn-margin tn-bg-gray--light tn-padding" style="border-radius: 10rpx;">
				<textarea maxlength="500" placeholder="介绍一下这个营地吧" placeholder-style="color:#AAAAAA"></textarea>
			</view>

			<view class="tn-flex tn-flex-row-between tn-flex-col-center  tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">封面图</view>
				</view>
			</view>

			<view class="tn-margin-left tn-padding-top-xs">
				<tn-image-upload-drag ref="imageUpload" :action="action" :width="236" :height="236" :formData="formData"
					:fileList="fileList" :disabled="disabled" :autoUpload="autoUpload" :maxCount="1"
					:showUploadList="showUploadList" :showProgress="showProgress" :deleteable="deleteable"
					:customBtn="customBtn" @sort-list="onSortList" />

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
			submit(){
				uni.navigateTo({
					url:'/campPages/result?title='+'提交成功'+'&desc='+'感谢您的分享，审核通过后将公开显示。'+'&btnText='+'我知道了'
				})
			},
			next(){
				uni.navigateTo({
					url:'/campPages/campInfoType/campInfoType'
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