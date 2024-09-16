import DefaultLayout from '@/layouts/Default/DefaultLayout.vue'
import aboutRoute from '@/modules/About/router'
import contactRoute from '@/modules/Contact/router'
import homeRoute from '@/modules/Home/router'
import loginRoute from '@/modules/Login/router'
import mapRoute from '@/modules/Map/router'
import newsRoute from '@/modules/News/router'
import profileRoute from '@/modules/Profile/router'
import { isUserAuthenticated } from '@/utils/authenticationUtils'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: DefaultLayout,
      redirect: '/',
      children: [
        ...homeRoute,
        ...newsRoute,
        ...aboutRoute,
        ...loginRoute,
        ...contactRoute,
        ...mapRoute,
        ...profileRoute
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('@/modules/NotFound/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  to.meta.requiresAuth && !isUserAuthenticated() ? next({ name: 'login' }) : next()
})

export default router
