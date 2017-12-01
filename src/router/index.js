import Vue from 'vue'
import VueRouter from 'vue-router'

import config from './config.js'

Vue.use(VueRouter)

const path = '../../views/'
const router = new VueRouter({
  mode: 'history',
  routes :config
})

export default router