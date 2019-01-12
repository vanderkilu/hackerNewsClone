<template>
    <div>
        <nav class="navbar">
            <router-link class="navbar__link" :to="{name:'top'}">Top</router-link>
            <router-link class="navbar__link" :to="{name:'new'}">New</router-link>
            <router-link class="navbar__link" :to="{name:'show'}">Show</router-link>
            <router-link class="navbar__link" :to="{name:'ask'}">Ask</router-link>
            <router-link class="navbar__link" :to="{name:'job'}">Jobs</router-link>
        </nav>
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
        z-index: 5;
    }
    .navbar__link {
        margin-left: 1rem;
        font-size: 1.7rem;
        color: white !important;
    }
</style>