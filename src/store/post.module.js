import {fetchComments} from '../services/api.service'
import {
    FETCH_POST_AND_COMMENTS
} from './action.types'
import {
    SET_ERROR,
    FETCH_START,
    FETCH_END,
    SET_POST
} from './mutation.types'

export const state = {
    item: {
        by: '',
        descendants: '',
        score: '',
        title: '',
        type: '',
        url: '',
        comments: []
    },    
    isLoading: false,
    hasErrorOccured: false
}

export const actions = {
    [FETCH_POST_AND_COMMENTS]({commit}, itemId) {
        commit(FETCH_START)
        try {
            const item = await fetchComments(itemId)
            commit(SET_POST, item)
            commit(FETCH_END)
        }
        catch {
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
    [SET_ERROR](state,bool) {
        state.hasErrorOccured = bool
    }
}
export const getters = {
    item(state) {
        return state.item
    }
}