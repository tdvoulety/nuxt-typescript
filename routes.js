export default [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/index').then((m) => m.default || m),
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('@/pages/search').then((m) => m.default || m),
  },
]
