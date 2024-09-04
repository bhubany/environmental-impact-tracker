import DefaultLayout from '@/layouts/Default/DefaultLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: DefaultLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../modules/NotFound/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
