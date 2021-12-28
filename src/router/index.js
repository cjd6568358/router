import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redrict: "/e8820v2"
  },
  {
    path: '/e8820v2',
    name: 'E8820V2',
    component: () => import(/* webpackChunkName: "E8820V2" */ '../views/E8820V2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
