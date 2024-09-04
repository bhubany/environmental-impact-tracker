import HomeView from '@/views/HomeView.vue'
import type { Router } from 'vue-router'

const homeRoute = {
  path: '/',
  component: HomeView
}

export default (router: Router) => {
  // router.addRoutes([homeRoute])
}
