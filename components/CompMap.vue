<!-- 首页地图组件 -->
<template>
	<view class="">
		<map style="width: 100%;" :style="{height: height + 'px'}" :latitude="latitude" :longitude="longitude">
		</map>
	</view>
</template>

<script>
	export default {
		name:"CompMap",
		props:{
			height:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
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
			};
		}
	}
</script>

<style>

</style>