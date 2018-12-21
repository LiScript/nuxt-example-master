import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './assets/img/error.jpg',
  loading: './assets/img/loading.jpg',
  attempt: 3
})
