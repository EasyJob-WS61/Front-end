import { createRouter, createWebHashHistory } from 'vue-router'
import SignInSolicitante from '../signs-in/pages/sign-in-solicitante.vue'
import AnunciosPostulantes from './../anuncios-postulantes/pages/AnunciosPostulante.vue'
import DetallesAnuncio from '../anuncios-postulantes/pages/DetallesAnuncio.vue'

const routes = [
  {
    path: '/',
    name: 'login-account',
    component: () => import('../postulants/pages/login-account'),
    props: true
  },

  {
    path: '/postulants/:idUser/notifications/:idNotification/feedback',
    name: "postulant-feedback",
    component: () => import('../postulants/pages/postulant-feedback'),
    props: true
  },
  {
    path: '/postulants/:idUser/premium/',
    name: "postulant-premium",
    component: () => import('../postulants/pages/postulant-premium'),
    props: true
  },
  {
    path: '/postulants/:idUser/chat/:idUser2',
    name: "postulant-chat",
    component: () => import('../postulants/pages/postulant-chat'),
    props: true
  },
  {
    path: '/postulants/:idUser/notifications/',
    name: "postulant-notification",
    component: () => import('../postulants/pages/postulant-notification'),
    props: true
  },
  {
    path: '/applicants/:idUser/notifications/',
    name: "applicant-notification",
    component: () => import('../applicants/pages/applicant-notification'),
    props: true
  },
  {
    path: '/applicants/:idUser/announcements/',
    name: 'applicant-announcement',
    component: () => import('../applicants/pages/applicant-announcement'),
    props: true
  },
  {
    path: '/applicants/:idUser/announcements/:id',
    name: 'applicant-announcement-detail',
    component: () => import('../applicants/pages/applicant-announcement-detail'),
    props: true
  },
  {
    path: '/applicants/:idUser/announcements/add/',
    name: 'applicant-announcement-add',
    component: () => import('../applicants/pages/applicant-announcement-add'),
    props: true
  },
  {
    path: '/signup/applicants',
    name: 'signup',
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
