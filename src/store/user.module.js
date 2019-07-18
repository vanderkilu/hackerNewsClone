import {FETCH_USER} from './action.types'
import {SET_USER, SET_ERROR} from './mutation.types'
import {fetchUser} from '../services/api.service'

const state = {
    user: {
        id: '',
        submissions: [],
        created: '',
        karma: 0
    },
    hasErrorOccured: false
}

const actions = {
    async [FETCH_USER]({commit}, slug) {
        try {
            const user = await fetchUser(slug)
            commit(SET_USER, user)
        }
        catch {
            commit(SET_ERROR, true)
        }
    }
}

const mutations = {
    [SET_USER](state, user) {
        state.user = user
    },
    [SET_ERROR](state, bool) {
        state.hasErrorOccured = bool
    }
}

const getters = {
    user(state) {
        return state.user
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}