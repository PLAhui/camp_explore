<!-- 首页筛选弹出层 -->
<template>
	<view>
		<tn-popup v-model="show" mode="top" :marginTop="marginTop" :mask="false" :borderRadius="20">
			<view style="background-color:'';padding: 10rpx;" v-if="type=='search'">
				<tn-input v-model="search" type="text" :border="true" :showRightIcon="true" placeholder="输入营地,城市名称搜索营地"
					rightIcon="search" style="border-radius:20px" />
				<view class="tn-margin-sm"></view>
			</view>

			<view class="" v-if="type=='type'">
				<view class="CampCards">
					<view class="card" v-for="index in 4">
						<view class="main">
							<view class="avatar">
								<tn-avatar src="xxx.jpg" size="lg"></tn-avatar>
							</view>
							<view class="title">帐篷营地</view>
							<view class="desc">可自带帐篷且设施完善的经营性帐篷营地</view>
						</view>
					</view>
				</view>
			</view>





			<view class="" v-if="type=='more'">
				<uni-collapse>
					<uni-collapse-item v-for="(item, index) in list" :key="index" :title="item.title">
						<view class="checkboxGroup">
							<tn-checkbox-group>
								<tn-checkbox name="选项1">选项</tn-checkbox>
								<tn-checkbox name="选项2">选项选项选项</tn-checkbox>
								<tn-checkbox name="选项3">选项选项项选项</tn-checkbox>
								<tn-checkbox name="选项1">选项选项</tn-checkbox>
								<tn-checkbox name="选项2">选项2</tn-checkbox>
								<tn-checkbox name="选项3">选项3</tn-checkbox>
								<tn-checkbox name="选项1">选项1</tn-checkbox>
								<tn-checkbox name="选项2">选项2</tn-checkbox>
								<tn-checkbox name="选项3">选项3</tn-checkbox>
							</tn-checkbox-group>
						</view>
					</uni-collapse-item>
				</uni-collapse>



				<!-- <tn-collapse>
					<tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title"
						:disabled="item.disabled" open="true">
						<view class="collapse-item-content">
	
							
							
						</view>
					</tn-collapse-item>
				</tn-collapse> -->
			</view>

			<!-- 按钮-->
			<view class="tn-flex tn-flex-row-between" style="margin: 0rpx 0 20rpx 0;">
				<view class="tn-flex-1 justify-content-item  tn-text-center">
					<tn-button backgroundColor="#f8f8f8" padding="40rpx 0" width="95%" shadow fontBold>
						<text class="tn-color-black">取 消</text>
					</tn-button>
				</view>
				<view class="tn-flex-1 justify-content-item  tn-text-center">
					<tn-button backgroundColor="#6bba7f" padding="40rpx 0" width="95%" shadow fontBold
						open-type="share">
						<text class="tn-color-white">确 定</text>
					</tn-button>
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
				type:'',
				show: false,
				search: '',

				list: [{
						title: '常用条件',
						disabled: false
					},
					{
						title: '地面类型',
						disabled: false
					},
					{
						title: '基础设施',
						disabled: false
					}, {
						title: '营区环境',
						disabled: false
					},
					{
						title: '体验活动',
						disabled: false
					}
				],

			};
		},
		methods: {
			//根据类型显示弹出层内容
			showPopup(e) {
				this.type = e;
				this.show = !this.show;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.checkboxGroup {
		padding: 20rpx;
	}
</style>