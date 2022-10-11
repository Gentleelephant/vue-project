import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/UserLogin.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/HomePage.vue'),
      children: [
        {
            path: 'users',
            name: 'users',
            component: () => import('../components/UserList.vue')
        }
      ]
    }
  ]
})

export default router
