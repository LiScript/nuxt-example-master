import Vue from 'vue'
import Vuex from 'vuex'
import Locale from '~/locales'
import Cookies from 'js-cookie'

Vue.use(Vuex)
import {
  getToken
} from '@/utils/auth'
const store = () => new Vuex.Store({
  state: {
    tel: getToken(),
    locales: Locale(),
    locale: Locale()[1]
  },
  mutations: {
    SET_Tel: (state, tel) => {
      state.tel = tel
    },
    REMOVE_Tel: (state) => {
      state.tel = ''
    },
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        console.log(locale)
        state.locale = locale
      }
    }
  }
})

export default store
