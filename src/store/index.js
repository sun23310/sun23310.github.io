import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    log: 1,
    fmimg: 0
  },
  getters: {
  },
  mutations: {
    log (state) {
      console.log(3)
      if (state.log === 0) {
        state.log = 1
      } else {
        state.log = 0
      }
      localStorage.setItem('log', state.log)

      window.location.reload()
    }
  },
  actions: {
  },
  modules: {
  }
})
