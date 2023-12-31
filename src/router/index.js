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
    name: 'about us',
    component: ()=> import('../components/AboutUs.vue')
  },
  {
    path: '/ContactCard',
    component: () => import('../components/ContactCard.vue')
  },
  {
    path: '/mi-perfil',
    component: () => import('../components/MyProfile.vue')
  },
  {
    path: '/editable-profile',
    name: 'editable-profile',
    component: () => import('../components/EditableProfile.vue')
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
    component: () => import('../views/ListaEntradas.vue')
  },
  {
    path: '/entrada/:id',
    name: 'entrada-detalle',
    component: () => import('../views/EntradaDetalle.vue')
  },
  {
    path: '/usuario/:id',
    name: 'usuarios',
    component: () =>import('../views/UserProfile.vue')
  },
  {
    path: "/amigos",
    component: () => import('../views/FriendList.vue')
  },
  {
    path: "/followers",
    component: () => import("../views/FollowersList.vue")
  },
  {
    path: "/ajustes",
    component: () => import("../components/PrivacySettings.vue")
  },
  {
    path: "/login",
    name: "Iniciar sesion",
    component: ()=> import("../components/LoginUser.vue")
  },
  {
    path: "/signup",
    name: "Registrarse",
    component: () => import("../components/UserRegister.vue")
  },
  {
    path: "/olvidar-contrasena",
    name: "Olvidaste la contraseña?",
    component: ()=> import("../components/SoyRetard.vue")
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
