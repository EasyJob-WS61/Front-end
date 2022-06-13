import { createRouter, createWebHashHistory } from 'vue-router'
import AnnouncementDetail from '../anuncios-postulantes/pages/announcement-detail.vue'
import PostulantProfile from '../postulants/pages/postulant-profile.vue'
import PostulantEditProfile from '../postulants/pages/postulant-edit-profile.vue'
import ProjectView from '../postulants/pages/postulant-projects.vue'
import AddProject from '../postulants/pages/postulant-add-project.vue'
import AppHome from "@/views/app-home";
import PostulantApplications from "@/postulants/pages/postulant-applications";

const routes = [
  {
    path: '/',
    name: 'root',
  },
  {
    path: "/sign-up",
    name: "signup-account",
    component: () => import('../authenticate/pages/signup-account.vue'),
    props: true
  },
  {
    path: '/sign-in',
    name: 'login-account',
    component: () => import('../authenticate/pages/login-account.vue'),
    props: true
  },
  {
    path: '/postulants/:id/home',
    name: 'postulant-home',
    component: AppHome,
    props: true
  },
  {
    path: '/applicants/:id/home',
    name: 'applicant-home',
    component: AppHome,
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
    component: () => import('../subscription/pages/susbcription-ad'),
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
    component: () => import('../notifications/pages/app-notifications'),
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
    component: PostulantProfile,
    props: true
  },
  {
    path: '/postulants/:id/announcements/:announcementId',
    name: 'detalles-anuncio',
    component: AnnouncementDetail,
    props: true
  },
  {
    path: '/postulants/:id/edit-profile',
    name: 'postulant-edit-profile',
    component: PostulantEditProfile
    ,
    props: true
  },
  {
    path: '/postulant/:idUser/projects/:idProject',
    name: 'project-view',
    component: ProjectView,
    props: true
  },
  {
    path: '/postulant/:idUser/applications',
    name: 'postulant-applications',
    component: PostulantApplications,
    props: true
  },
  {
    path: '/postulant/:id/add-project',
    name: 'add-project',
    component: AddProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/sign-in', '/sign-up'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/sign-in');
  } else {
    next();
  }
});

export default router
