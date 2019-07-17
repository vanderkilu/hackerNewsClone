<template>
    <div class="pagination">
        <span class="pagination__control" >&lt;prev </span>
        <span class="pagination__text"> </span>
        <span class="pagination__control">more&gt;</span>
    </div>
</template>


<script>
export default {
    
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