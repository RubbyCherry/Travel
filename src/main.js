import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@styles/reset.css'
import '@styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
fastClick.attach(document.getElementById('app'))
Vue.use(VueAwesomeSwiper)
require('../mock')
Vue.prototype.$axios=axios;

if ('addEventListener' in document) {      document.addEventListener('DOMContentLoaded', function() {          fastClick.attach(document.body);      }, false);  }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
