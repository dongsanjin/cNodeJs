import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import HomeContext from 'components/homeContext/HomeContext'
import DetailContext from 'components/detailContext/DetailContext'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomeContext',
      component: HomeContext
    },
    {
      path: '/:id',
      name: 'detailContext',
      component: DetailContext
    }
  ]
})
