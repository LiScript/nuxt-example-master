
import Vue from 'vue'
import API from '~/axios/index.js'

Vue.prototype.$API = API
Vue.use(API)
