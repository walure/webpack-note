import Vue from 'vue'
import App from './App'
import router from './router/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
console.log(9999)
new Vue({
	el:'#App',
	router,
	render: h => h(App)
})