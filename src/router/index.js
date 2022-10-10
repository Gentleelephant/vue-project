import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../components/UserLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: UserLogin
    }
  ]
})

export default router
