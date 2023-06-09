<template>
	<view class="template-index tn-safe-area-inset-bottom">
		<tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="">
			<view slot="back" class='tn-custom-nav-bar__back' @click="ShowLocalSelect">
				<text class='tn-icon tn-icon-location' style="font-size: 36rpx;"></text>
				<text>中原区<span class="tn-icon-right"></span></text>
			</view>
			<view slot="default" class='tn-custom-nav-bar__back' id="title">
				附近的营地
			</view>
		</tn-nav-bar>
		<view @click="showModel" class="tn-flex tn-flex-row-between tn-margin-left-sm tn-margin-right-sm"
			:style="{paddingTop: vuex_custom_bar_height + 'px'}" ref="myheader" id="myheader">
			<view class="justify-content-item">
				<tn-button shape="icon" shadow fontBold fontColor="#737275"> <text
						class="tn-icon-search"></text></tn-button>
				<tn-button shape="round" shadow margin="10rpx" fontColor="#737275">类型</tn-button>
				<tn-button shape="round" shadow fontColor="#737275">更多筛选</tn-button>
			</view>
			<view class="justify-content-item">
				<tn-button shape="icon" shadow margin="10rpx" fontBold fontColor="#737275"> <text
						class="tn-icon-set"></text></tn-button>
			</view>
		</view>

		<tn-popup v-model="show" mode="top" :marginTop="vuex_custom_bar_height" :mask="false" :borderRadius="20">
			<view style="background-color:'';padding: 10rpx;">
				<tn-input v-model="search" type="text" :border="true" :showRightIcon="true" placeholder="输入城市,地点名称切换定位"
					rightIcon="search" style="border-radius:20px" />
				<view class="tn-margin-sm">
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
				</view>
			</view>
		</tn-popup>

		<tn-popup v-model="show1" mode="top" :marginTop="myheaderH" :mask="false" :borderRadius="20">
			<view style="background-color:'';padding: 10rpx;">
				<tn-input v-model="search" type="text" :border="true" :showRightIcon="true" placeholder="输入城市,地点名称切换定位"
					rightIcon="search" style="border-radius:20px" />
				<view class="tn-margin-sm">
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
				</view>
			</view>
		</tn-popup>


		<!-- <view class="page-section page-section-gap">
			<map style="width: 100%; height: 600px;" :latitude="latitude" :longitude="longitude">
			</map>
		</view> -->


	</view>
</template>

<script>
	import methods_mixin from '@/libs/mixin/methods_mixin.js'
	export default {
		mixins: [methods_mixin],
		name: 'Index',
		data() {
			return {
				myheaderH: 0,
				search: '',
				show: false,
				show1: false,

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
			// #endif
		},
		onReady() {
			var that = this;
			// #ifdef MP-WEIXIN
			uni.createSelectorQuery().in(this).select('#myheader').boundingClientRect(res => {
				that.myheaderH = res.height
			}).exec()
			// #endif
		},
		beforeCreate() {
			console.log("beforeCreate home")
		},
		created() {
			console.log("created home")
		},
		methods: {
			ShowLocalSelect() {
				this.show = !this.show
			},
			showModel() {
				this.show1 = true
			},
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