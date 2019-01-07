<template>
  <div id="app">
    <app-header></app-header>
    <router-view :key="$route.name"/>
  </div>
</template>

<style>
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  font-family: inherit;
}

body {
  font-family: 'Raleway', sans-serif;
  background-color: whitesmoke;
}
a:link, a:visited {
  text-decoration: none;
  color: white;
}
</style>


<script>
import Header from './components/Header.vue'
export default {
  components: {
    appHeader: Header
  }
}
</script>


