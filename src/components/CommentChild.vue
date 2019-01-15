<template>
    <div class="comment">
        <div class="link">
            <router-link :to="{}" v-if="comment.by">{{comment.by}} | {{comment.time | moment("from", "now", true)}} ago </router-link>
        </div>
        <div v-html="comment.text"></div>
        <div class="expand" v-if="comment.kids">
            <span  class="toggle-show" @click="show = !show ">{{ show ? '[-]' : '[+]'  }}</span>
        </div>
        <div v-if="comment.comments" v-show="show">
            <comment v-for="comment in comment.comments" :key="comment.id" :comment="comment" class="comment-unstyle"></comment>
        </div>
    </div>
</template>


<script>
export default {
    name: 'comment',
    props: ['comment', 'item'],
    data() {
        return {
            show:true
        }
    },
    methods: {
    }
}
</script>

<style>
 .comment-descendant {
     margin-left: 2rem;
 }
 .comment {
       margin: 2.5rem 1.5rem;
       position: relative;
       z-index: 2;
}
.comment::before {
    content: "";
    display: inline-block;
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -1rem;
    background-color: #eeeeee;
}
.comment-unstyle::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
}
.link {

    margin-bottom: 1rem;
}
.expand {
    margin: 1rem 0;
}
.toggle-show  {
    cursor: pointer;
}
</style>
