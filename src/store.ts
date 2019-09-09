import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yuke: 1
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
    }
  }
})
