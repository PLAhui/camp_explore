<!-- 首页搜索定位弹出层 -->
<template>
	<view>
		<tn-popup v-model="show" mode="top" :marginTop="vuex_custom_bar_height" :mask="false" :borderRadius="20">
			<view style="background-color:'';padding: 10rpx;">
				<tn-input v-model="searchKey" type="text" :border="true" :showRightIcon="true"
					placeholder="输入城市,地点名称切换定位" rightIcon="search" style="border-radius:20px"
					@input="changeSearchKey" />

				<view class="tn-margin-sm">
					<view class="tn-padding-top-sm" v-for="(item,index) in result" :key="index"
						@click="changeLocal(item)">{{item.title}}</view>
				</view>

				<view v-if="HISTORY_LOCATION!=null && result.length==0 && searchKey==''" class="tn-padding-bottom blogger__desc tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left">
					<view v-for="(item,label_index) in HISTORY_LOCATION" :key="label_index" @click="changeLocal(item)"
						class="blogger__desc__label tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
						<text class="tn-text-df">{{ item.title }}</text>
					</view>
				</view>
			</view>
		</tn-popup>

	</view>
</template>

<script>
	import methods_mixin from '@/libs/mixin/methods_mixin.js'
	export default {
		mixins: [methods_mixin],
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
			/**
			 * 选择定位
			 * 1.修改全局中位置信息
			 * 2.缓存中增加定位记录
			 * @param {Object} e
			 */
			changeLocal(e) {
				console.log("选择了:", e)
				this.insert_HISTORY_LOCATION(e)
				this.$t.vuex('CENTERLATLONG', {
					latitude: e.location.lat,
					longitude: e.location.lng,
					address: e.title,
					scale: 12,
				})
				this.showPopup()
			},
			changeSearchKey() {
				var that = this;
				that.result = [];
				console.log(that.result)
				this.$qqmapsdk.getSuggestion({
					keyword: this.searchKey,
					auto_extend: "",
					success: function(res) {
						console.log(res);
						that.result = res.data
					},
					fail: function(res) {
						console.log(res);
						uni.showToast({
							title:res.message,icon:'none'
						})
						//这里要去掉
						if(that.searchKey!=''){
							that.result = [{
									location: {
										lat: 39.909,
										lng: 116.39742
									},
									title: '二七区嵩山南路'
								},
								{
									location: {
										lat: 39.909,
										lng: 116.39742
									},
									title: '郑州市动物园'
								}
							]
						}
					},
				});
			},
			showPopup() {
				this.show = !this.show;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag {
		background-color: aquamarine;
		padding: 16rpx;
		margin: 10rpx;
	}
</style>