import Vue from 'vue'
import VueRouter from 'vue-router'

import config from './config.js'

Vue.use(VueRouter)

const router = new VueRouter({
 // mode: 'history',// 有服务器配合的 
  routes :config
})

export default router