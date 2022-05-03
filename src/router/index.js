import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInSolicitante from '../signs-in/pages/sign-in-solicitante.vue'
import AnunciosPostulantes from './../anuncios-postulantes/pages/AnunciosPostulante.vue'
import DetallesAnuncio from '../anuncios-postulantes/pages/DetallesAnuncio.vue'

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
    path: '/signin',
    name: 'signin',
    component: SignInSolicitante
  }, 
  {
    path: '/postulants/:id/announcements',
    name: 'anuncios-postulantes',
    component: AnunciosPostulantes
  },
  {
    path: '/postulants/:id/announcements/:id',
    name: 'detalles-anuncio',
    component: DetallesAnuncio
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
