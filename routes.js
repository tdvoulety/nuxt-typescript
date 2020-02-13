export default [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/index').then((m) => m.default || m),
  },
  {
    name: 'search',
    path: '/hledani',
    component: () => import('@/pages/search').then((m) => m.default || m),
  },
  {
    name: 'login',
    path: '/prihlaseni',
    component: () => import('@/pages/login').then((m) => m.default || m),
  },
]
