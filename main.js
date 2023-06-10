import App from './App'
import store from './store'

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

// //引入ajax
// import ajax from '@/libs/utils/http/ajax.js'
// Vue.prototype.$ajax = ajax
//引入api接口
import api from "@/libs/utils/http/api.js"
Vue.prototype.$api = api
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)

// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$t.mixin.js')
Vue.mixin(vuexStore)

// 引入TuniaoUI对小程序分享的mixin封装
let mpShare = require('tuniao-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)

var QQMapWX = require('@/sdk/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js');
Vue.prototype.$qqmapsdk = new QQMapWX({
	key: 'NE4BZ-ELIWB-JC3UY-J4FBD-2FPX2-RSBU7'
});

const app = new Vue({
	store,
	...App
})

app.$mount()