const routes = [

  {
    path: '/',
    component: () => import('../pages/Index.vue'),
  },
  {
    path: '/home',
    component: () => import('../pages/Index.vue'),
  },
  {
    path: '/playground',
    component: () => import('../pages/Playground.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404.vue')
  }

]

export default routes
