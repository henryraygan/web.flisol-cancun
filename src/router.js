import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/participa',
      name: 'participa',
      component: () => import('./views/Join.vue') 
    },
    { 
      path: "*", 
      component: () => import('./views/PageNotFound.vue') 
    }
  ]
})
