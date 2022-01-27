import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/zte/e8820v2"
  },
  {
    path: '/e8820v2',
    redirect: "/zte/e8820v2"
  },
  {
    path: '/zte/e8820v2',
    name: 'E8820V2',
    component: () => import(/* webpackChunkName: "E8820V2" */ '../views/E8820V2/index.vue')
  },
  {
    path: '/zte/e8820s',
    name: 'E8820S',
    component: () => import(/* webpackChunkName: "E8820S" */ '../views/E8820S/index.vue')
  },
  {
    path: '/tplink/wdr7300',
    name: 'WDR7300',
    component: () => import(/* webpackChunkName: "WDR7300" */ '../views/WDR7300/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
