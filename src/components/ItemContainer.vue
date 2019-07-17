<template>
    <div>
    <app-pagination></app-pagination>
    <div class="container">
        <transition-group name="flip-list">
        <div class="item-list" v-for="item in items" :key="item.id">
            <h3 class="item-list__score">{{item.score}}</h3>
            <a :href="item.url" class="item-list__link">
                <span class="item-list__title">{{item.title}}</span> ({{item.url | extractLinkTitle }})</a>
            <p class="faint">
                by <router-link :to="{name:'user', params: {slug: item.by}}" class="item-list__link">{{item.by}} </router-link>
                {{ item.time | moment("from", "now", true) }} ago |
                <router-link :to="{name:'commentContainer', params: {id: item.id}}" class="item-list__link">{{ item.descendants }} comments</router-link>
            </p>
        </div>
        </transition-group>
        <app-loader v-if="isLoading"></app-loader>
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {FETCH_POSTS,  RESET_PAGINATION} from '../store/action.types'
import {fetchItemsIds} from '../services/api.service'
import Loader from './Loader'
import Pagination from './Pagination'
export default {
    data() {
        return {
            isLoading: true
        }
    },
    filters: {
        extractLinkTitle(value) {
            if (value)
            return value.split('/')[2].replace('www.', '');
        }
    },
    computed: {
       ...mapGetters(['items'])
    },
    beforeMount() {
        const type = this.$route.name
        this.unwatchUpdates = fetchItemsIds(type, (err, ids)=> {
            this.$store.dispatch(FETCH_POSTS, ids).then(()=> this.isLoading = false)
        })
    },
    beforeDestroy() {
        this.unwatchUpdates()
        this.$store.dispatch(RESET_PAGINATION)
    },
    components: {
        appLoader: Loader,
        appPagination: Pagination
    }
}
</script>

<style scoped>
    .container {
        width: 60%;
        margin: 3rem auto;
    }
    .item-list {
        padding: 2rem;
        background-color: white;
        border-radius: 2px;
        text-align: left;
        font-size: 1.2rem;
        display: grid;
        grid-template-columns: 2rem 1fr;
        grid-column-gap: 3rem;
        grid-row-gap: 0.5rem;
        align-items: center;
        margin: 0.2rem 0;
    }
    .item-list__score {
        grid-row: 1 / span 2; 
        color: #4a148c;
        font-weight: 800;
        font-size: 1.7rem;
    }
    .item-list__link {
        color: gray;
        font-size: 1.2rem;
        transition: all 0.2s;
    }
    .item-list__link:hover {
        color: #4a148c;
    }
    .item-list__title {
        color: black;
        font-weight: 400px;
        font-size: 1.4rem;
    }
    .faint {
        color: gray;
    }

    .flip-list-move {
        transition: all 1s;
    }
    @media (max-width: 900px) {
        .container {
            width: 100%;
        }
    }
</style>
