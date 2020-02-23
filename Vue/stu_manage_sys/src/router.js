import Vue from 'vue'
import Router from 'vue-router'
import stuList from './views/stuList.vue'

Vue.use(Router)

const routes = [
  {
    path: "/stulist",
    component: stuList
  },
  {
    path: "/addstu",
    component: () => import('./views/addStu.vue')
  },
  {
    path: "/",
    redirect: "/stulist",
  },
  {
    path: '*',
    redirect: '/stulist'
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
})