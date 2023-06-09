<!-- 首页横向滚动卡片 -->
<template>
	<view class="root">
		<view class="card"></view>
	</view>
</template>

<script>
	export default {
		name: "IndexCardsHorizontalScrol",
		data() {
			return {
				list: [{
						image: 'https://tnuiimage.tnkjapp.com/swiper/spring.jpg',
						title: '春天'
					},
					{
						image: 'https://tnuiimage.tnkjapp.com/swiper/summer.jpg',
						title: '夏天'
					},
					{
						image: 'https://tnuiimage.tnkjapp.com/swiper/autumn.jpg',
						title: '秋天'
					},
					{
						image: 'https://tnuiimage.tnkjapp.com/swiper/winter.jpg',
						title: '冬天'
					},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.root {
		// background-color: aquamarine;
		// height: 200px;
		position: fixed;
		bottom: 50px;
		width: 100%;
		margin-bottom: 30px;

		.card {
			width: 350px;
			height: 250px;
			background-image: url(https://tnuiimage.tnkjapp.com/swiper/spring.jpg);
			margin: 20px;
			border-radius: 20rpx;
		}
	}
</style>