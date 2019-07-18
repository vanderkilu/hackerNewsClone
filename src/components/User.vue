<template>
    <div class="container">
        <h3 class="m-sm">{{user.id}}</h3>
        <h5 class="m-sm">{{user.submitted.length}}  <span  class="color-v">submissions</span> </h5>
        <h5 class="m-sm"> <span class="color-v"> created </span> {{user.created |  moment("from", "now", true)}} ago </h5>
        <h5 class="m-sm"> {{user.karma}} <span class="color-v"> karma(s)</span></h5>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

}
</script>

<style scoped>
    .container {
        width: 60%;
        margin: 10rem auto;
        padding: 3rem;
        background-color: white;
        font-size: 1.4rem;
        font-family: 'Ubuntu', sans-serif;
        color: #424242;
        font-weight: 200;
    }
    .m-sm {
        margin: 2rem;
    }
    .color-v {
        color: #4a148c;
    }
    @media (max-width: 900px) {
        .container {
            width: 80%;
        }
    }
</style>
