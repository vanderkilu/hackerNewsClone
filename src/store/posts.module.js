import {fetchItems} from '../services/api.service'
import { FETCH_POSTS } from './action.types'
import {
    SET_ERROR,
    SET_POSTS,
    SET_ITEM_TYPE,
    FETCH_START,
    FETCH_END
} from './mutation.types'

export const state = {
    items: [],
    type: 'top',
    isLoading: false,
    hasErrorOccured: false, 
}

export const actions = {
    async [FETCH_POSTS]({commit}, type) {
        commit(FETCH_START)
        commit(SET_ITEM_TYPE, type)
        try {
            const items = await fetchItems(type)
            commit(SET_POSTS, items)
            commit(FETCH_END)
        }
        catch(err) {
            commit(SET_ERROR, true)
        }
    }
}

export const mutations = {
    [FETCH_START](state) {
        state.isLoading = true
    },
    [FETCH_END](state) {
        state.isLoading = false
    },
    [SET_ITEM_TYPE](state, type) {
        state.type = type
    },
    [SET_ERROR](state, bool) {
        state.hasErrorOccured = bool
    }
}

export const getters = {
    items(state) {
        return state.items
    }
}