<!-- 首页右侧悬浮按钮 -->
<template>
	<view class="root">
		<tn-button size="lg" shape="icon" shadow margin="10rpx" fontBold fontColor="#737275" @click="changeCompsType"> 
			<text class="tn-icon-menu-list" style="font-size: 20px;"></text>
		</tn-button>
	</view>
</template>

<script>
	export default {
		name: "IndexRightFabButton",
		data() {
			return {}
		},
		methods:{
			changeCompsType(){
				this.$emit('changeCompsType')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.root {
		position: fixed;
		bottom: 20%;
		right: 3%;
	}
</style>