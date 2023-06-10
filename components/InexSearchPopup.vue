<!-- 首页搜索定位弹出层 -->
<template>
	<view>
		<tn-popup v-model="show" mode="top" :marginTop="vuex_custom_bar_height" :mask="false" :borderRadius="20">
			<view style="background-color:'';padding: 10rpx;">
				<tn-input v-model="searchKey" type="text" :border="true" :showRightIcon="true"
					placeholder="输入城市,地点名称切换定位" rightIcon="search" style="border-radius:20px"
					@input="changeSearchKey" />

				<view class="tn-margin-sm" v-if="searchKey!=''">
					<view class="tn-padding-top-sm" v-for="(item,index) in result" :key="index"
						@click="changeLocal(item)">{{item.title}}</view>
				</view>

				<view class="tn-margin-sm">
					<!-- <tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag>
					<tn-tag margin="10rpx" shape="radius" backgroundColor="#f6f6f6" fontColor="#737275">标签</tn-tag> -->
				</view>
			</view>
		</tn-popup>

	</view>
</template>

<script>
	export default {
		name: "InexSearchPopup",
		props: {

		},
		data() {
			return {
				show: false,
				searchKey: '',
				result: [],
			};
		},

		methods: {
			changeLocal(e) {
				console.log(e)
				this.$t.vuex('CENTERLATLONG', {
					latitude: e.location.lat,
					longitude: e.location.lng,
					address: e.title
				})
				this.showPopup()
			},
			changeSearchKey() {
				var that = this;
				this.$qqmapsdk.search({
					keyword: this.searchKey,
					auto_extend:"",
					success: function(res) {
						console.log(res);
						that.result = res.data
					},
					fail: function(res) {
						console.log(res);
					},
				});
			},
			showPopup() {
				this.show = !this.show;
			}
		}
	}
</script>

<style>

</style>