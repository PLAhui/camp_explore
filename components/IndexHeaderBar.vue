<!-- 首页头部筛选栏组件 -->
<template>
	<view class="">
		<view class="tn-flex tn-flex-row-between tn-margin-left-sm tn-margin-right-sm"
			:style="{paddingTop: vuex_custom_bar_height + 'px'}" ref="myheader" id="myheader">
			<view class="justify-content-item">
				<tn-button shape="icon" shadow fontBold fontColor="#737275" @click="showPopup('search')"> <text
						class="tn-icon-search"></text></tn-button>
				<tn-button shape="round" shadow margin="10rpx" fontColor="#737275" @click="showPopup('type')">类型</tn-button>
				<tn-button shape="round" shadow fontColor="#737275" @click="showPopup('more')">更多筛选</tn-button>
			</view>
			<view class="justify-content-item">
				<tn-button shape="icon" shadow margin="10rpx" fontBold 
				fontColor="#737275" @click="showPopup(3)" v-if="false"> 
					<text class="tn-icon-set"></text>
				</tn-button>
			</view>
		</view>
		<InexSelectPopup ref="InexSelectPopup" :marginTop="height" />
	</view>
</template>

<script>
	import InexSelectPopup from '@/components/InexSelectPopup.vue'
	export default {
		name:"IndexHeaderBar",
		components: {
			InexSelectPopup,
		},
		props:{
			height:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				
			};
		},
		mounted() {

		},
		methods:{
			//显示选择弹出层
			showPopup(type) {
				this.$refs.InexSelectPopup.showPopup(type);
			},
		}
	}
</script>

<style>

</style>