import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('./scss/master.scss')
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 600,
  scale: 1,
  distance: '10px',
  mobile: false
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

