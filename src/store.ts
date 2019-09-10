import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yuke: 1,
    logind: false
  },
  mutations: {
    btn1 (state,abc) {
      state.yuke = abc
      console.log(state.yuke)
    }
  },
  actions: {
    btn2 (state,abc) {
      console.log(abc)
      alert('abc')
    },
    shange_logind (state,logind) {
      // commit('show',logind)
      console.log(state.state.logind,logind)
      state.state.logind = logind
      // state.logind = logind
    }
  }
})
