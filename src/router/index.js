import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/docs',
    name: 'docs',
    component: () => import('../views/docs.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/Account.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
