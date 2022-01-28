import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '../views/Index/index.vue')
  },
  {
    path: '/zte/eeprom/e8820v2',
    name: 'E8820V2',
    component: () => import(/* webpackChunkName: "E8820V2" */ '../views/E8820V2/index.vue')
  },
  {
    path: '/zte/eeprom/e8820s',
    name: 'E8820S',
    component: () => import(/* webpackChunkName: "E8820S" */ '../views/E8820S/index.vue')
  },
  {
    path: '/tplink/eeprom/wdr7300',
    name: 'WDR7300',
    component: () => import(/* webpackChunkName: "WDR7300" */ '../views/WDR7300/index.vue')
  },
  {
    path: '*',
    redirect: "/index"
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
