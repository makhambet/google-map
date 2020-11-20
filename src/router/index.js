import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
    meta: { layout: 'main' }
  },
  {
    path: '/id/:id',
    name: 'Tracking',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
    meta: { layout: 'main' }
  },
  {
    path: '/signin',
    name: 'Signin',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "signin" */ '../views/sign/signin')
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "singup" */ '../views/sign/signup')
  },
  {
    path: '/cats',
    name: 'Cats',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "singup" */ '../views/Cats')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "home" */ '../views/Profile'),
    meta: { layout: 'main' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
