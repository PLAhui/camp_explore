<!-- 首页筛选弹出层 -->
<template>
	<view>
		<tn-popup v-model="show" mode="top" :marginTop="marginTop" :mask="false" :borderRadius="20">
			<view style="background-color:'';padding: 10rpx;">
				<tn-input v-model="search" type="text" :border="true" :showRightIcon="true" placeholder="输入营地,城市名称搜索营地"
					rightIcon="search" style="border-radius:20px" />
				<view class="tn-margin-sm">

				</view>
			</view>
		</tn-popup>

	</view>
</template>

<script>
	export default {
		name: "InexSelectPopup",
		props: {
			marginTop: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				show: false,
				search: ''
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