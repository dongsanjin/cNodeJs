import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    params: {
      tab: 'all',
      page: 1
    },
    topic: {},
    topicId: ''
  },
  mutations: {
    changeTab (state, newTab) {
      state.params.tab = newTab
    },
    changePage (state, newPage) {
      state.params.page = newPage
    },
    setTopicId (state, newId) {
      state.topicId = newId
    },
    setTopic (state, newTopic) {
      state.topic = newTopic
    }
  },
  actions: {
    changeTab ({ commit }, newTab) {
      commit("changeTab", newTab)
    },
    changePage ({ commit }, newPage) {
      commit("changePage", newPage)
    },
    setTopicId ({ commit }, newId) {
      commit("setTopicId", newId)
    },
    setTopic ({commit}, newTopic) {
      commit("setTopic", newTopic)
    }
  }
})
