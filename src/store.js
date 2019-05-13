import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    params: {
      tab: 'all',
      page: 1
    }
  },
  mutations: {
    changeTab (state, newTab) {
      state.params.tab = newTab

    },
    changePage (state, newPage) {
      state.params.page = newPage
    },
  },
  actions: {
    changeTab ({ commit }, newTab) {
      commit("changeTab", newTab)
    },
    changePage ({ commit }, newPage) {
      commit("changePage", newPage)
    },
  }
})
