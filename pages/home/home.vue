<template>
	<view>
		<tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="">
			<view slot="back" class='tn-custom-nav-bar__back' @click="ShowLocalSelect">
				<text class='tn-icon tn-icon-location' style="font-size: 36rpx;"></text>
				<text>中原区<span class="tn-icon-right"></span></text>
			</view>
			<view slot="default" class='tn-custom-nav-bar__back' id="title">
				附近的营地
			</view>
		</tn-nav-bar>
		<view class="tn-flex tn-flex-row-between tn-margin-left-sm tn-margin-right-sm"
			:style="{paddingTop: vuex_custom_bar_height + 'px'}" ref="myheader" id="myheader">
			<view class="justify-content-item">
				<tn-button shape="icon" shadow fontBold fontColor="#737275" @click="showPopup(0)"> <text
						class="tn-icon-search"></text></tn-button>
				<tn-button shape="round" shadow margin="10rpx" fontColor="#737275" @click="showPopup(1)">类型</tn-button>
				<tn-button shape="round" shadow fontColor="#737275" @click="showPopup(2)">更多筛选</tn-button>
			</view>
			<view class="justify-content-item">
				<tn-button shape="icon" shadow margin="10rpx" fontBold fontColor="#737275" @click="showPopup(3)"> <text
						class="tn-icon-set"></text></tn-button>
			</view>
		</view>
		<InexSearchPopup ref="InexSearchPopup" />
		<InexSelectPopup ref="InexSelectPopup" :marginTop="myheaderH" />


		<view class="">
			<map style="width: 100%;" :style="{height: bodyH + 'px'}" :latitude="latitude" :longitude="longitude">
			</map>
		</view>


	</view>
</template>

<script>
	import InexSearchPopup from '@/components/InexSearchPopup.vue'
	import InexSelectPopup from '@/components/InexSelectPopup.vue'

	import methods_mixin from '@/libs/mixin/methods_mixin.js'
	export default {
		mixins: [methods_mixin],
		components: {
			InexSearchPopup,
			InexSelectPopup
		},
		name: 'Index',
		data() {
			return {
				myheaderH: 0, //筛选栏卡片高度
				bodyH: 0, //页面主体高度


				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				// covers: [{
				// 	latitude: 39.909,
				// 	longitude: 116.39742,
				// 	iconPath: '../../../static/logo.png'
				// }, {
				// 	latitude: 39.90,
				// 	longitude: 116.39,
				// 	iconPath: '../../../static/logo.png'
				// }]
			}
		},
		mounted() {
			var that = this;
			// #ifdef H5
			uni.createSelectorQuery().in(this).select('#myheader').boundingClientRect(res => {
				that.myheaderH = res.height
			}).exec()
			uni.getSystemInfo({
				success: function(res) {
					that.bodyH = res.windowHeight - that.myheaderH - that.vuex_custom_bar_height - 10;
				}
			});
			// #endif
		},
		onReady() {
			var that = this;
			// #ifdef MP-WEIXIN
			uni.createSelectorQuery().in(this).select('#myheader').boundingClientRect(res => {
				that.myheaderH = res.height
			}).exec()
			uni.getSystemInfo({
				success: function(res) {
					that.bodyH = res.windowHeight - that.myheaderH - that.vuex_custom_bar_height - 80;
				}
			});
			// #endif
		},

		methods: {
			//显示选择弹出层
			showPopup(type) {
				this.$refs.InexSelectPopup.showPopup();
			},
			//显示切换位置弹出层
			ShowLocalSelect() {
				this.$refs.InexSearchPopup.showPopup();
			},

		}
	}
</script>

<style lang="scss" scoped>
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
	/* 自定义导航栏内容 end */
</style>