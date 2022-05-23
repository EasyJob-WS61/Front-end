import { createRouter, createWebHashHistory } from 'vue-router'
import SignInSolicitante from '../signs-in/pages/sign-in-solicitante.vue'
import AnunciosPostulantes from './../anuncios-postulantes/pages/AnunciosPostulante.vue'
import DetallesAnuncio from '../anuncios-postulantes/pages/DetallesAnuncio.vue'
import PostulantProfile from '../postulants/pages/postulant-profile.vue'
import PostulantEditProfile from '../postulants/pages/postulant-edit-profile.vue'
import ProjectView from '../projects/pages/project-view.vue'
import AddProject from '../projects/pages/add-project.vue'

const routes = [
  {
    path: '/',
    name: 'root',
  },
  {
    path: '/sign-in',
    name: 'login-account',
    component: () => import('../authenticate/pages/login-account'),
    props: true
  },
  {
    path: '/postulants/:idUser/notifications/:idNotification/feedback',
    name: "postulant-feedback",
    component: () => import('../postulants/pages/postulant-feedback'),
    props: true
  },
  {
    path: '/applicants/:idUser/profile',
    name: "applicant-profile",
    component: () => import('../applicants/pages/applicant-profile'),
    props: true
  },
  {
    path: '/postulants/:idUser/premium/',
    name: "postulant-premium",
    component: () => import('../postulants/pages/postulant-premium'),
    props: true
  },

  {
    path: '/applicants/:idUser/premium/',
    name: "applicant-premium",
    component: () => import('../applicants/pages/applicant-premium'),
    props: true
  },
  {
    path: '/postulants/:idUser/chat/:idUser2',
    name: "postulant-chat",
    component: () => import('../postulants/pages/postulant-chat'),
    props: true
  },
  {
    path: '/applicants/:idUser/chat/:idUser2',
    name: "applicant-chat",
    component: () => import('../applicants/pages/applicant-chat'),
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
    path: '/applicants/:idUser/search',
    name: 'applicant-busqueda',
    component: () => import('../applicants/pages/applicant-busqueda'),
    props: true
  },
  {
    path: '/postulants/:idUser/profile/',
    name: 'postulant-profile',
    component : PostulantProfile,
    props:true
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
    path: '/postulants/:id/announcements/:a_id',
    name: 'detalles-anuncio',
    component: DetallesAnuncio
  },
  {
    path: '/postulants/:id/edit-profile',
    name: 'postulant-edit-profile',
    component: PostulantEditProfile
  },
  {
    path: '/projects/:id/view',
    name: 'project-view',
    component: ProjectView
  },
  {
    path: '/postulant/:id/add-project',
    name: 'add-project',
    component: AddProject
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
