<template>
    <div class="container">
        <transition-group name="flip-list">
        <div class="item-list" v-for="item in items" :key="item.id">
            <h3 class="item-list__score">{{item.score}}</h3>
            <a :href="item.url" class="item-list__link">
                <span class="item-list__title">{{item.title}}</span> ({{item.url | extractLinkTitle }})</a>
            <p class="faint">
                by <router-link :to={} class="item-list__link">{{item.by}} </router-link>
                {{ item.time | moment("from", "now", true) }} ago |
                <router-link :to={} class="item-list__link">{{ item.kids ? item.kids.length : 0 }} comments</router-link>
            </p>
        </div>
        </transition-group>
        <div class="loader" v-if="loading"></div>
    </div>
</template>

<script>
import { prefetch } from '../api/readApi.js'
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            items: [],
            loading: true
        }
    },
    filters: {
        extractLinkTitle(value) {
            if (value)
            return value.split('/')[2].replace('www.', '');
        }
    },
    methods: {
        ...mapActions([
            'setIds',
            'generateItems',
        ])
    },
    mounted() {
        prefetch(this.$route.name, (err, ids) => {
            this.setIds(ids.slice(0,50));
            console.log(ids);
            this.generateItems()
            .then(()=> {
                 this.loading = false;
                 this.items = this.$store.getters.items
            })
        })
    },
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
        transform: all 1s;
    }
    .flip-list-enter, .flip-list-leave-to {
        opacity: 0;
        transform: translateY(1rem);
    }
    .flip-list-enter-active, .flip-list-leave-to {
        transition: all 1s;
    }
    .flip-list-leave-to {
        position: absolute;
    }
    .loader {
        border: 16px solid #f3f3f3; 
        border-top: 16px solid #4a148c; 
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        position: fixed;
        top: 50vh;
        left: 50vw;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }



    @media (max-width: 900px) {
        .container {
            width: 100%;
        }
    }
</style>
