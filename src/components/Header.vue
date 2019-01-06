<template>
    <div>
        <nav class="navbar">
            <router-link class="navbar__link" :to={}>Top</router-link>
            <router-link class="navbar__link" :to={}>New</router-link>
            <router-link class="navbar__link" :to={}>Show</router-link>
            <router-link class="navbar__link" :to={}>Ask</router-link>
            <router-link class="navbar__link" :to={}>Jobs</router-link>
        </nav>
        <div class="pagination">
            <span class="pagination__control">&lt;prev </span>
            <span class="pagination__text"> 1/10 </span>
            <span class="pagination__control">more&gt;</span>
        </div>
    </div>
</template>


<style scoped>
    .navbar {
        position: fixed;
        width: 100%;
        top: 0;
        left:0;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4a148c;
    }
    .navbar__link {
        margin-left: 1rem;
        font-size: 1.7rem;
    }
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