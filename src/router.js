import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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
      path: '/codigo-de-conducta',
      name: 'conducta',
      component: () => import('./views/ConductCode.vue') 
    },
    { 
      path: "*", 
      component: () => import('./views/PageNotFound.vue') 
    }
  ]
})
