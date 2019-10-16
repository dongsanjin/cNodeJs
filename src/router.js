import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import HomeContext from 'components/homeContext/HomeContext'
import DetailContext from 'components/detailContext/DetailContext'

Vue.use(Router)

export default new Router({
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
  ],
  // eslint-disable-next-line
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
