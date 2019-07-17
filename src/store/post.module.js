import {fetchComments} from '../services/api.service'
import {
    FETCH_POST_AND_COMMENTS
} from './action.types'
import {
    SET_ERROR,
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
        try {
            const item = await fetchComments(itemId)
            return commit(SET_POST, item)
        }
        catch {
            return commit(SET_ERROR, true)
        }
    }
}

const mutations = {
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