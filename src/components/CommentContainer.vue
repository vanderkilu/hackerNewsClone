<template>
    <div class="comment-main">
        <div class="comment-header">
            <h1 class="comment-text-bold"> 
                <a :href="item.url">{{item.title}}</a>
            </h1>
            <router-link :to="{name:'user', params: {slug: item.by}}">by {{item.by}}  </router-link> 
            <span> | {{item.descendants}} comments | {{item.score}} points </span>
        </div>
        <div class="comment-container">
             <app-comment v-for="comment in item.comments" :key="comment.id" :comment="comment"></app-comment>
        </div>
    </div> 
</template>
<script>

import CommentChild from './CommentChild.vue'
import {FETCH_POST_AND_COMMENTS} from '../store/action.types'
import store from '../store'
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['item'])
    },
    beforeRouteEnter (to, from, next) {
        store.dispatch(FETCH_POST_AND_COMMENTS, to.params.id)
             .then(()=> next())
    },
    components: {
        appComment: CommentChild,
    }
}
</script>

<style scoped>
    .comment-main {
        font-size: 1.3rem;
        width: 60%;
        margin: 8rem auto;
        font-family: 'Ubuntu', sans-serif;
        color: #424242;
        line-height: 1.6;
    }
   .comment-container {
       background-color: white;
       padding: 3rem;
       margin-top: 3rem;
   }
   .comment-header {
       background-color: white;
       padding: 3rem;
   }
   @media (max-width: 900px) {
        .comment-main {
            width: 100%;
            overflow: hidden;
        }
        .comment-container, .comment-header {
            padding: 2rem;
        }
    }
</style>
