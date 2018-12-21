
import Vue from 'vue'
import API from '~/axios/index.js'
import {baseUrl} from '~/axios/env.js'
// 全局请求
Vue.prototype.$API = API
Vue.use(API)
// 全局接口地址
Vue.prototype.$baseUrl = baseUrl
