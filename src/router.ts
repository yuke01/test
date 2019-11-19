import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import home from './views/home.vue'
import luru from './views/luru.vue'
import chakan from './views/chakan.vue'
import gjctxt from './views/gjc-txt.vue'
import wztxt from './views/wz-txt.vue'
import yttxt from './views/yt-txt.vue'
import cctxt from './views/cc-txt.vue'
import wz from './views/wz.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/luru',
      name: 'luru',
      component: luru
    },
    {
      path: '/chakan',
      name: 'chakan',
      component: chakan
    },
    {
      path: '/gjc-txt',
      name: 'gjc-txt',
      component: gjctxt
    },
    {
      path: '/wz-txt',
      name: 'wz-txt',
      component: wztxt
    },
    {
      path: '/yt-txt',
      name: 'yt-txt',
      component: yttxt
    },
    {
      path: '/cc-txt',
      name: 'cc-txt',
      component: cctxt
    },
    {
      path: '/wz',
      name: 'wz',
      component: wz
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
