import Vue from 'vue'
import Router from 'vue-router'
import ticket from '@/page/ticket/ticket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ticket
    }
  ]
})
