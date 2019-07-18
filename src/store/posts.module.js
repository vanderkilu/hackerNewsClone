import {fetchItems} from '../services/api.service'
import { FETCH_POSTS, PAGINATE_BY,RESET_PAGINATION } from './action.types'
import {
    SET_ERROR,
    SET_POSTS,
    SET_RESET_PAGINATION,
    SET_PAGINATION
} from './mutation.types'

const state = {
    items: [],
    hasErrorOccured: false, 
    pagStart: 0,
    pagEnd: 50
}

const actions = {
    async [FETCH_POSTS]({commit}, ids) {
        try {
            const items = await fetchItems(ids)
            return commit(SET_POSTS, items)
        }
        catch(err) {
            return commit(SET_ERROR, true)
        }
    },
    [RESET_PAGINATION]({commit}){
        commit(SET_RESET_PAGINATION)
    },
    [PAGINATE_BY]({commit}, by) {
        commit(SET_PAGINATION, by)
    }
}

const mutations = {

    [SET_ERROR](state, bool) {
        state.hasErrorOccured = bool
    },
    [SET_POSTS](state,items) {
        const nonNullItems = items.filter(i => i !== null)
        state.items = nonNullItems
    },
    [SET_PAGINATION](state,by) {
        state.pagStart = by.pagStart
        state.pagEnd = by.pagEnd
    },
    [SET_RESET_PAGINATION](state) {
        state.pagStart = 0
        state.pagEnd = 50
    }
}

const getters = {
    items(state) {
        return state.items.slice(state.pagStart,state.pagEnd)
    },
    pagInfo(state) {
        return {
            len: state.items.length,
            pagStart:state.pagStart,
            pagEnd: state.pagEnd
        }
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}