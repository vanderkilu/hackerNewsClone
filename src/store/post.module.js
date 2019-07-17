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

const state = {
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

const actions = {
    async [FETCH_POST_AND_COMMENTS]({commit}, itemId) {
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

const mutations = {
    [FETCH_START](state) {
        state.isLoading = true
    },
    [FETCH_END](state) {
        state.isLoading = false
    },
    [SET_ERROR](state,bool) {
        state.hasErrorOccured = bool
    },
    [SET_POST](state, item) {
        state.item = item
    }
}
const getters = {
    item(state) {
        return state.item
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}