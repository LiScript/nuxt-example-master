
// axios配置
import * as axios from 'axios' // 引入axios
// import qs from 'qs' // 引入qs模块，用来序列化post类型的数据，后面会提到
import {baseUrl} from './env.js'

let options = {
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000
}
options.baseURL = baseUrl

export default axios.create(options)
