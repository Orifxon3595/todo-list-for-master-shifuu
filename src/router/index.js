import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import UserUpdate from '@/views/UserUpdate.vue'
import ToDoList from '../views/ToDoList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/todo',
    name: 'todo',
    component: ToDoList,
  },
  {
    path: '/userupdate',
    name: 'userupdate',
    component: UserUpdate
  }
]

// Navigation Guard

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
