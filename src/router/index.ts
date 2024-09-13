import DefaultLayout from '@/layouts/Default/DefaultLayout.vue'
import aboutRoute from '@/modules/About/router'
import homeRoute from '@/modules/Home/router'
import mapRoute from '@/modules/Map/router'
import newsRoute from '@/modules/News/router'

import { createRouter, createWebHistory } from 'vue-router'

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
      children: [...homeRoute, ...newsRoute, ...aboutRoute]
    },
    { ...mapRoute[0] },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('@/modules/NotFound/NotFoundView.vue')
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
