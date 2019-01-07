import Vue from 'vue'
import Vuex from 'vuex'
import  { fetch } from './api/readApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    ids: []
  },
  mutations: {
    'SET_IDS'(state, ids) {
      state.ids = ids
    },

  },
  actions: {
    setIds({commit}, ids) {
      commit('SET_IDS', ids)
    },
    generateItems({state, commit}) {
      return fetch(state.ids).then(items => state.items = items)
    }
  },
  getters: {
    items(state) {
      return state.items; 
    }
  }
})
