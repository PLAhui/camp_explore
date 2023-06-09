import ajax from 'uni-ajax'
import store from '@/store'
// 创建请求实例
const instance = ajax.create({
	baseURL: 'http://localhost:9999'
})

var access_token;
var refresh_token;
// 添加请求拦截器
instance.interceptors.request.use(
	config => {
		 try{
		 	access_token = uni.getStorageSync('lifeData').APP_TOKEN.accessToken
		 }catch(e){
		 	access_token = null;
		 }
		
		config.timeout = 3000
		//#ifdef H5
		config.header['cType'] = 'h5'
		// config.header['cType'] = 'wxmp'
		//#endif
		//#ifdef MP-WEIXIN
		config.header['cType'] = 'wxmp'
		//#endif
		config.header['X-Access-Token'] = access_token
		return config
	}, error => {
		console.error("请求错误", error)
		return Promise.reject(error)
	}
)

/**
 * 添加响应拦截器
 * 500 后端返回的通用异常
 * 601 token不存在
 * 602 token过期，需要刷新token
 * 603 凭证过期，需要重新登陆
 */
instance.interceptors.response.use(
	response => {
		if (response.data.code == 200) {
			return response.data
		}
		if (response.data.code == 601) {

		}
		if (response.data.code == 602) {
			return refreshToken(response.config);
		}
		if (response.data.code == 603) {
			uni.showToast({
				title: response.data.message,
				icon: 'none'
			})
		}
		// if (response.data.code == 9999) {
		// 	uni.showToast({
		// 		title: response.data.message,
		// 		icon: 'none'
		// 	})
		// 	setTimeout(() => {
		// 		uni.navigateTo({
		// 			url: '/minePages/login'
		// 		})
		// 	}, 1000)
		// 	return Promise.reject(response.data.message)
		// }
		if (response.data.code == 500) {
			uni.showToast({
				title: response.data.message,
				icon: 'none'
			})
		}
		return Promise.reject(response.data.message)
	},
	error => {
		console.error(error)
		if (error.statusCode != undefined && error.statusCode != 200) {
			uni.showToast({
				title: "错误代码：" + error.statusCode,
				icon: 'none'
			})
		}
		// 对响应错误做些什么
		if (error.errMsg == 'request:fail timeout') {
			uni.showToast({
				title: '请求超时!',
				icon: 'none'
			})
		}
		if (error.errMsg == 'request:fail') {
			uni.showToast({
				title: '错误连接被拒绝!',
				icon: 'none'
			})
		}
		return Promise.reject(error)
	}
)



/**
 * 刷新 access_token 的接口
 * 1.保存token
 * 2.重新发起请求
 * @param {*} config 
 * @returns 
 */
const refreshToken = (config) => {
	try{
		refresh_token = uni.getStorageSync('lifeData').APP_TOKEN.refreshToken
	}catch(e){
		refresh_token = null;
		uni.showToast({
			title: '无refresh_token，请重新登录!',
			icon: 'none'
		})
		return;
	}
    return instance.post('/auth-service/auth-sys/refreshToken',{refreshToken:refresh_token}).then(res=>{
		store.commit('$tStore',{"name":"APP_TOKEN","value":res.result})
        config.header['X-Access-Token'] = store.state.APP_TOKEN.accessToken
        return instance(config)
    }).catch(err => {
        console.error(err)
    });
}



// 导出 create 创建后的实例
export default instance
