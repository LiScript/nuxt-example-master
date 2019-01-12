/**
 * add by Poli 
 * 
 * axios统一管理
 */
import * as axios from 'axios' 
import qs from 'qs'
import {baseUrl} from './env.js'

let options = {
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000
}
options.baseURL = baseUrl
const service = axios.create(options) // 创建实例

// 请求拦截
// service.interceptors.request.use(
//   config => {
//     // Do something before request is sent
//     if (store.getters.token) {
//       // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//       config.headers['X-Token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )

// 返回拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    // 用户不存在的拦截
    if (res.code === '1001002') {
      console.log('这里换成跳转你们的登录地址')
    } else {
      if (res.isSuccess === false) {
        // res 回包失败时包装成一个Error对象
        const err = new Error(res.msg)
        err.res = res
        return Promise.reject(err)
      }
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
