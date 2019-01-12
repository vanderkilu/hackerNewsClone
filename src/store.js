import Vue from 'vue'
import Vuex from 'vuex'
import  { fetch } from './api/readApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
    activeType: null,
    items: [],
    ids: [],
    type: {
      top: {
        prev: 0,
        next: 50
      },
      new: {
        prev: 0,
        next: 50
      },
      show: {
        prev: 0,
        next: 50
      },
      ask: {
        prev: 0,
        next: 50
      },
      job: {
        prev: 0,
        next: 50
      },
    }
  },
  mutations: {
    'SET_IDS'(state, ids) {
      state.ids = ids
    },
    'SET_CONTROL_COUNT'(state, obj) {
       state.type[state.activeType].prev = obj.prev
       state.type[state.activeType].next = obj.next
    },
    'SET_ACTIVE_TYPE'(state,type) {
      state.activeType = type
    },
    'SET_COMMENT'(state, comment) {
      state.comments.push(comment)
    }

  },
  actions: {
    setIds({commit}, ids) {
      commit('SET_IDS', ids)
    },
    setActiveType({commit},type) {
      commit('SET_ACTIVE_TYPE',type)
    },
    generateItems({state}) {
      return fetch(state.ids)
            .then((items) => {
              state.items = items
              return  state.items
            })
    },
    setControlCount({commit}, obj) {
      commit('SET_CONTROL_COUNT',obj)
    },
    setComment({commit}, comment) {
      commit('SET_COMMENT',comment )
    }
  },
  getters: {
    list(state) {
      return state.items; 
    },
    controls(state) {
      return {
        prev: state.type[state.activeType].prev,
        next:  state.type[state.activeType].next 
      }
    }
  }
})
