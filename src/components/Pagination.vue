<template>
    <div class="pagination">
        <span class="pagination__control" @click="moveBack()">&lt;prev </span>
        <span class="pagination__text"> 1 / {{itemCount}} </span>
        <span class="pagination__control" @click="moveFront()">more&gt;</span>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            prev: 0,
            next: 50,
            pageCount: 1
        }
    },
    computed: {
        ...mapGetters([
            'list'
        ]),
        itemCount() {
            return Math.floor(this.list.length / 50)
        },
    },
    methods: {
        ...mapActions([
            'setControlCount',
        ])
        ,
        moveFront() {
            if (this.next >= this.list.length) return
            this.prev = this.next
            this.next += 50
            this.setControlCount({prev:this.prev ,next:this.next})

        },
        moveBack() {
            if (this.prev <= 0 ) return 
            this.prev -= 50
            this.next -= 50
            this.setControlCount({prev:this.prev ,next:this.next})
        }
    }
}
</script>
<style scoped>
    .pagination {
        background-color: white;
        padding: 2rem;
        text-align: center;
        margin-top: 6rem;
    }
    .pagination__control, .pagination__text {
        font-size: 1.7rem;
        color: #4a148c;
    }
    .pagination__text {
        margin: 0 3rem;
    }
</style>