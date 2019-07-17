import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts.module'
import post from './post.module'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        posts,
        post
    }
})
