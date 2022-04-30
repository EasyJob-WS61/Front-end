import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/postulants/:idUser/chat/',
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
