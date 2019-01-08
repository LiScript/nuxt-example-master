import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { getToken } from '@/utils/auth'
const store = () => new Vuex.Store({
  state: {
    tel: getToken()
  },
  mutations: {
    SET_Tel: (state, tel) => {
      state.tel = tel
    },
    REMOVE_Tel: (state) => {
      state.tel = ''
    },
  }
})

export default store
