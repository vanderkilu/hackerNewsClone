import {fetchItems} from '../services/api.service'
import { FETCH_POSTS, PAGINATE_BY,RESET_PAGINATION } from './action.types'
import {
    SET_ERROR,
    SET_POSTS,
    SET_ITEM_TYPE,
    FETCH_START,
    FETCH_END,
    SET_RESET_PAGINATION,
    SET_PAGINATION
} from './mutation.types'

const state = {
    items: [],
    type: 'top',
    isLoading: false,
    hasErrorOccured: false, 
    pagStart: 0,
    pagEnd: 50
}

const actions = {
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
    },
    [RESET_PAGINATION](commit){
        commit(SET_RESET_PAGINATION)
    },
    [PAGINATE_BY]({commit}, by) {
        commit(SET_PAGINATION, by)
    }
}

const mutations = {
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
    },
    [SET_POSTS](state,items) {
        state.items = items
    },
    [SET_PAGINATION](state,by) {
        state.pagStart = by.pagStart
        state.pagEnd = by.pagEnd
    },
    [SET_RESET_PAGINATION](state) {
        state.pagStart = 0
        state.pagEnd = 0
    }
}

const getters = {
    items(state) {
        return state.items.slice(state.pagStart,state.pagEnd)
    },
    isLoading(state) {
        return state.isLoading
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