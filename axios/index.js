/**
 * api接口统一管理
 * import API from 'API'
 * Vue.prototype.$API = API
 * Vue.use(API)
 *
 * this.$API.Login()
 */
import service from './http'

export default {
  post (url, data, config) {
    return service.post(url, data, config)
  },
  get (url,config) {
    return service.get(url,config)
  }
}

