import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PhdStudentEntry from '../views/PhDStudentEntry.vue'
import TaskRegister from '../views/TaskRegister.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PhdStudentnEtry',
    name: 'PhdStudentEntry',
    component:PhdStudentEntry

  },
  {
    path: '/TaskRegister',
    name: 'TaskRegister',
    component:TaskRegister

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
