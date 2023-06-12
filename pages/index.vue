<template>
	<view class="start-index">
		<view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<home ref="home"></home>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<circle-page ref="circleRef"></circle-page>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<activity ref="activity"></activity>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<preferred ref="preferredRef"></preferred>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[4]" :style="{display: currentIndex === 4 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<mine ref="mine"></mine>
			</scroll-view>
		</view>


		<tn-popup v-model="showAddPopup" mode="bottom" :borderRadius="20" safeAreaInsetBottom>
			<view class="btns">
				<view class="btn">
					<view class="icon tn-icon-star"></view>
					<view class="title">写评价</view>
				</view>
				<view class="btn">
					<view class="icon tn-icon-location"></view>
					<view class="title">新营地</view>
				</view>
			</view>
		</tn-popup>

		<tn-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#838383" inactiveColor="#AAAAAA"
			activeIconColor="#FBBD12" :animation="true" :safeAreaInsetBottom="true" @change="switchTabbar"
			:beforeSwitch="beforeSwitch"></tn-tabbar>
	</view>
</template>

<script>
	import Home from './home/home.vue'
	import CirclePage from './circle/circle.vue'
	import Activity from './activity/activity.vue'
	import Preferred from './preferred/preferred.vue'
	import Mine from './mine/mine.vue'

	export default {
		components: {
			Home,
			CirclePage,
			Activity,
			Preferred,
			Mine
		},
		data() {
			return {
				showAddPopup: false, //发布弹出层
				// 底部tabbar菜单数据
				tabbarList: [{
						title: '营地',
						activeIcon: '/static/tabbar/home_tnnew.png',
						inactiveIcon: '/static/tabbar/home_tn.png'
					},
					{
						title: '发现',
						activeIcon: '/static/tabbar/circle_tnnew.png',
						inactiveIcon: '/static/tabbar/circle_tn.png'
					},
					{
						title: '发布',
						activeIcon: 'menu-circle',
						inactiveIcon: 'rocket',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true
					},
					{
						title: '收藏',
						activeIcon: '/static/tabbar/preferred_tnnew.png',
						inactiveIcon: '/static/tabbar/preferred_tn.png',
					},
					{
						title: '我的',
						activeIcon: '/static/tabbar/mine_tnnew.png',
						inactiveIcon: '/static/tabbar/mine_tn.png'
					}
				],
				// tabbar当前被选中的序号
				currentIndex: 0,
				// 自定义底栏对应页面的加载情况
				tabberPageLoadFlag: []
			}
		},
		onLoad(options) {
			const index = Number(options.index || 0)
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
				return index === tabbar_index
			})
			this.switchTabbar(index)
		},
		methods: {
			beforeSwitch(index) {
				//阻止页面切换，显示弹窗
				if (index == 2) {
					this.showAddPopup = true;
					return false;
				}
				return true;
			},
			// 切换导航,切换导航页面
			switchTabbar(index) {
				var that = this;
				const selectPageFlag = this.tabberPageLoadFlag[index]
				if (selectPageFlag === undefined) {
					return
				}
				if (selectPageFlag === false) {
					this.tabberPageLoadFlag[index] = true
				}
				this.currentIndex = index
				this.$nextTick(() => {
					that.runPageMethod(index)
				})
			},
			//切换是调用页面组件的方法
			runPageMethod(index) {
				if (index == 4) {
					this.$refs.mine.homeOnShow()
				}
			},
			// 导航页面滚动到底部
			tabbarPageScrollLower(e) {
				console.log("导航页面滚动到底部")
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.btns {
		padding: 60rpx 20rpx;
		// width: 100%;
		display: flex;
		justify-content: space-evenly; //左右布局
		flex-wrap: wrap; //如果一行放不下就会自动换行
		align-content: flex-start; //紧揍排列

		.btn {
			// background-color: blueviolet;
			// height: 50px;
			// width: 100px;
			text-align: center;

			.icon {
				font-size: 48rpx;
			}

			.title {
				font-size: 36rpx;
			}
		}
	}
</style>