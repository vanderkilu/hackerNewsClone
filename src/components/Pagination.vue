<template>
    <div class="pagination">
        <span class="pagination__control" @click="next">&lt;prev </span>
        <span class="pagination__text"> </span>
        <span class="pagination__control" @click="previous">more&gt;</span>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
import {PAGINATE_BY} from '../store/action.types'
export default {
    computed: {
        ...mapGetters(['pagInfo'])
    },
    methods: {
        next() {
            const {pagStart, pagEnd, len} = this.pagInfo
            if ((pagEnd >= len)) return
            const start = pagStart + 50
            const end = pagEnd + 50
            this.$store.dispatch(PAGINATE_BY, {pagStart:start, pagEnd:end})
        },
        previous() {
            const {pagStart, pagEnd, len} = this.pagInfo
            if ((pagStart <= 0)) return
            const start = pagStart - 50
            const end = pagEnd - 50
            this.$store.dispatch(PAGINATE_BY, {pagStart:start, pagEnd:end})
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
    .pagination__control {
        cursor: pointer;
    }
    .pagination__control, .pagination__text {
        font-size: 1.7rem;
        color: #4a148c;
    }
    .pagination__text {
        margin: 0 3rem;
    }
</style>