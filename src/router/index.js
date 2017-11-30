import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home/index.vue'

Vue.use(VueRouter)

const path = '../../views/'
const router = new VueRouter({
  mode: 'history',
  routes :[
	{ path: '/', component:home }
  ]
})

export default router