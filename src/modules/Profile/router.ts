export default [
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/modules/Profile/ProfileView.vue'),
    meta: { requiresAuth: true }
  }
]
