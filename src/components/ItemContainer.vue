<template>
    <div class="container">
        <div class="item-list" v-for="item in items" :key="item.id">
            <h3 class="item-list__score">{{item.score}}</h3>
            <a :href="item.url" class="item-list__link">
                <span class="item-list__title">{{item.title}}</span> ({{item.url | extractLinkTitle }})</a>
            <p class="faint">
                by <router-link :to={} class="item-list__link">{{item.by}} </router-link>
                {{ item.time | moment("from", "now", true) }} ago |
                <router-link :to={} class="item-list__link">{{ item.kids.length }} comments</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    "by" : "dhouston",
                    "descendants" : 71,
                    "id" : 8863,
                    "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
                    "score" : 111,
                    "time" : 1175714200,
                    "title" : "My YC app: Dropbox - Throw away your USB drive",
                    "type" : "story",
                    "url" : "http://www.getdropbox.com/u/2/screencast.html"
                },
                {
                    "by" : "dhouston",
                    "descendants" : 71,
                    "id" : 8863,
                    "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
                    "score" : 111,
                    "time" : 1175714200,
                    "title" : "My YC app: Dropbox - Throw away your USB drive",
                    "type" : "story",
                    "url" : "http://www.getdropbox.com/u/2/screencast.html"
                }
            ]
        }
    },
    filters: {
        extractLinkTitle(value) {
            if (value)
            return value.split('/')[2].replace('www.', '');
        }
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
    @media (max-width: 900px) {
        .container {
            width: 100%;
        }
    }
</style>
