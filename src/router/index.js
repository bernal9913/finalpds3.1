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
  },
  {
    path: "/amigos",
    name: "amigos",
    component: () => import('../views/FriendList.vue')
  },
  {
    path: "/followers",
    name: "followers",
    component: () => import("../views/Followers")
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
