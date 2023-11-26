import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ContactCard',
    component: () => import('../components/ContactCard.vue')
  },
  {
    path: '/HomePublicaciones',
    component: () => import('../components/HomePublicaciones.vue')
  },
  {
    path: '/Chat',
    component: () => import('../components/ChatFake.vue')
  },
  {
    path: '/NuevaEntrada',
    component: () => import('../components/BlogForm.vue')
  },
  {
    path: '/entradas',
    component: () => import('../components/ListaEntradas.vue')
  },
  {
    path: '/entrada/:id',
    name: 'entrada-detalle',
    component: () => import('../components/EntradaDetalle.vue')
  },
  {
    path: '/usuario/:id',
    name: 'usuarios',
    component: () =>import('../views/UserProfile.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
