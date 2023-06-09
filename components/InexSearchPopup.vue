<template>
	<view>
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
		
	</view>
</template>

<script>
	export default {
		name:"InexSearchPopup",
		props:{
	
		},
		data() {
			return {
				show:false,
				search:''
			};
		},
		methods:{
			showPopup(e){
				this.show = !this.show;
			}
		}
	}
</script>

<style>

</style>