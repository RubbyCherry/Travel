import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('./views/Home.vue')//实现异步加载
    },
    {
      path: '/City',
      name: 'City',
      component: ()=> import('./views/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: ()=> import('./views/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
