import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import 'assets/css/reset.css'
import 'assets/css/normalize.css'
import 'assets/css/base.css'
import './plugins/element.js'
import store from './store'

Vue.config.productionTip = false
Vue.set(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
