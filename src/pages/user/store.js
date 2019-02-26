import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'user',
  },
  mutations: {
    set(state, payload) {
      state.message = payload.message
    }
  },
})