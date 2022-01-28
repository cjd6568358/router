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
    component: () => import(/* webpackChunkName: "E8820V2" */ '../views/ZTE/E8820V2/index.vue')
  },
  {
    path: '/zte/eeprom/e8820s',
    name: 'E8820S',
    component: () => import(/* webpackChunkName: "E8820S" */ '../views/ZTE/E8820S/index.vue')
  },
  {
    path: '/tplink/eeprom/wdr7300',
    name: 'WDR7300',
    component: () => import(/* webpackChunkName: "WDR7300" */ '../views/TPLINK/WDR7300/index.vue')
  },
  {
    path: '/tplink/eeprom/wdr8620',
    name: 'WDR8620',
    component: () => import(/* webpackChunkName: "WDR8620" */ '../views/TPLINK/WDR8620/index.vue')
  },
  {
    path: '/tplink/eeprom/mw300rv6',
    name: 'MW300RV6',
    component: () => import(/* webpackChunkName: "MW300RV6" */ '../views/TPLINK/MW300RV6/index.vue')
  },
  {
    path: '/tplink/eeprom/fwr310v4',
    name: 'FWR310V4',
    component: () => import(/* webpackChunkName: "FWR310V4" */ '../views/TPLINK/FWR310V4/index.vue')
  },
  {
    path: '/xiaomi/eeprom/r4a',
    name: 'R4A',
    component: () => import(/* webpackChunkName: "R4A" */ '../views/XIAOMI/R4A/index.vue')
  },
  {
    path: '/newifi/eeprom/y1',
    name: 'Y1',
    component: () => import(/* webpackChunkName: "Y1" */ '../views/NEWIFI/Y1/index.vue')
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
