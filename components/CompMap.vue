<!-- 首页地图组件 -->
<template>
	<view class="">
		<map style="width: 100%;" :style="{height: height + 'px'}" :latitude="CENTERLATLONG.latitude"
			:longitude="CENTERLATLONG.longitude">
		</map>
	</view>
</template>

<script>
	export default {
		name: "CompMap",
		props: {
			height: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				// covers: [{
				// 	latitude: 39.909,
				// 	longitude: 116.39742,
				// 	iconPath: '../../../static/logo.png'
				// }, {
				// 	latitude: 39.90,
				// 	longitude: 116.39,
				// 	iconPath: '../../../static/logo.png'
				// }]
			};
		},
		methods: {
			getLocation() {
				var that = this;
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						console.log(res)
						// that.latitude = res.latitude
						// that.longitude = res.longitude
						that.$qqmapsdk.reverseGeocoder({
							location: {
								latitude: res.latitude,
								longitude: res.longitude
							},
							success: function(ress) {
								console.log(ress);
								that.$t.vuex('CENTERLATLONG', {
									latitude: res.latitude,
									longitude: res.longitude,
									address: ress.result.address_component.district
								})
							},
							fail: function(res) {
								console.log(res);
							},
						});

					},
					fail(res) {
						console.log(res)
					}
				});
			}

		}
	}
</script>

<style>

</style>