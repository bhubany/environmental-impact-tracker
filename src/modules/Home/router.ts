import HomeView from '@/views/HomeView.vue'

const homeRoute = {
  path: '/',
  component: HomeView
}

export default (router) => {
  router.addRoutes([homeRoute])
}
