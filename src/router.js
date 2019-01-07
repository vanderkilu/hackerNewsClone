import Vue from 'vue'
import Router from 'vue-router'
import ItemContainer from './components/ItemContainer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: ItemContainer
    },
    {
      path: '/new',
      name: 'new',
      component: ItemContainer
    },
    {
      path: '/show',
      name: 'show',
      component: ItemContainer
    },
    {
      path: '/ask',
      name: 'ask',
      component: ItemContainer
    },
    {
      path: '/job',
      name: 'job',
      component: ItemContainer
    }
  ]
})
