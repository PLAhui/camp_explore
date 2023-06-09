/**
 * API接口
 */
import ajax from '@/libs/utils/http/ajax.js'
//认证微服务
const authService = "/auth-service"


const api = {
	Test: authService+'/auth-sys/test',
	
	/**
	 * 登录接口
	 * 需要再header中增加cType配置标识客户端类型
	 * app登录时传 openID
	 * 微信小程序登录时传code
	 */
	Login: authService+'/auth-sys/login',
	/**
	 * 获取我的用户信息
	 * header中携带token
	 */
	UserInfo:authService+'/auth-sys/userInfo',
	/**
	 * 刷新token
	 * 通过有效的票据获取新的token和票据
	 */
	RefreshToken:authService+'/auth-sys/refreshToken',

}



//接口请求
module.exports = {
	//登录接口，将用户信息放入全局变量中，不需要返回结果
	Login(context,data) {
		return new Promise((resolve) => {
			ajax.post(api.Login,data).then(ress => {
				context.$t.vuex('APP_USER',ress.result.userInfo)
				context.$t.vuex('APP_TOKEN',ress.result.tokenInfo)
			});
		})
	},


	Test(){
		return new Promise((resolve,reject) => {
			ajax.get(api.Test).then(res => {
				resolve(res) //返回给调用者 通过then获取
				// reject("error")//返回异常信息 调用者通过catch捕捉
			});
		})
	}


}
