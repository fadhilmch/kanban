import Vue from 'vue'
import Router from 'vue-router'
import KanbanHome from '@/components/KanbanHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KanbanHome',
      component: KanbanHome
    }
  ]
})
