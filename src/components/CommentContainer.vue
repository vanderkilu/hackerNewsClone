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
        <app-loader v-if="loading"></app-loader>
    </div>
</template>

<script>
import { getMainComment} from '../api/readApi'
import { mapActions } from 'vuex'
import Loader from './Loader.vue'
import CommentChild from './CommentChild.vue'
export default {
    data() {
        return {
            comments: [],
            loading: true,
            item: {kids:''}
        }
    },
    beforeMount() {
        getMainComment(this.$route.params.id)
        .then((data)=> {
            this.item = data
            this.loading = false })
    },
    components: {
        appLoader: Loader,
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
