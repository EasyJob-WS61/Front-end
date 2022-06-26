<template>
  <v-card
      class="overflow-hidden"
      width="auto"
  >
    <v-app-bar
        app
        color="primary"
        prominent
        class="text-white"
    >
      <v-container class="d-flex justify-center align-center">
        <a @click="goToHome" class="text-decoration-none d-flex">
          <div><v-img class="pr-4" width="48px" :src="require('../core/img/LOGO.png')"></v-img></div>
          <v-toolbar-title class="font-weight-bold text-white">EasyJob</v-toolbar-title>
        </a>
        <v-spacer></v-spacer>
        <v-btn @click="changeTheme" icon><v-icon>{{this.theme}}</v-icon></v-btn>
        <v-btn id="notification-activator" icon><v-icon>mdi-bell</v-icon></v-btn>
        <v-btn id="menu-activator"><v-icon class="pr-2">mdi-account</v-icon>{{currentUser.name}} {{currentUser.lastname}}</v-btn>
      </v-container>

      <v-menu v-if="currentUser.userType.toLowerCase() === 'postulant'" activator="#menu-activator">
        <v-list>
          <v-list-item
              v-for="(item, index) in postulantNavigation"
              :key="index"
              :value="index"
          >
            <v-list-item-title @click="goToOptions(item.to)"><v-icon class="mr-4">{{item.icon}}</v-icon>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu v-else-if="currentUser.userType.toLowerCase() === 'applicant'" activator="#menu-activator">
        <v-list>
          <v-list-item
              v-for="(item, index) in applicantNavigation"
              :key="index"
              :value="index"
          >
            <v-list-item-title @click="goToOptions(item.to)"><v-icon class="mr-4">{{item.icon}}</v-icon>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <app-notifications></app-notifications>
    </v-app-bar>
  </v-card>
</template>
<script>
import AppNotifications from "@/notifications/pages/app-notifications";
import router from "@/router";
export default {
  name: "postulant-navegation",
  components: {AppNotifications},
  typeUser: null,
  props: ['themeMain', 'userName', 'typeUser'],
  computed: {
    navigationItems() {
      return this.typeUser === 'postulant'? this.postulantNavigation : this.applicantNavigation;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data: () => ({
    theme: 'mdi-lightbulb-on',
    postulantNavigation: [
      {name: "Mi Perfil", icon: "mdi-account", to: "profile"},
      {name: "Mis Postulaciones", icon: "mdi-briefcase", to: "applications"},
      {name: "Cerrar sesión", icon: "mdi-location-exit", to: "close"}
    ],
    applicantNavigation: [
      {name: "Mi Perfil", icon: "mdi-account", to: "profile"},
      {name: "Mis Anuncios", icon: "mdi-briefcase", to: "announcement"},
      {name: "Cerrar sesión", icon: "mdi-location-exit", to: "close"}
    ]
  }),
  methods: {
    changeTheme: function () {
      if (this.theme === "mdi-lightbulb-on") {
        this.theme = 'mdi-lightbulb-off';
      } else {
        this.theme = 'mdi-lightbulb-on';
      }
      this.$emit('changeTheme');
    },
    goToHome() {
      if (this.typeUser === "postulant")
        router.push({ name: 'postulant-home', params: { id: this.currentUser.id }});
      else if (this.typeUser === "applicant")
        router.push({ name: 'applicant-home', params: { id: this.currentUser.id }});
    },
    async logout (){
      await this.$store.dispatch('auth/logout');
      await router.push({name: "login-account"});
    },
    goToOptions(option) {
      if (this.typeUser === "postulant") {
        if (option === "profile") router.push({name: 'postulant-profile', params: {idUser: this.currentUser.id }});
        else if (option === "applications") router.push({name: 'postulant-applications', params: {idUser: this.currentUser.id }});
        else if (option === "close") this.logout();
      } else if (this.typeUser === "applicant") {
        if (option === "profile") router.push({name: 'applicant-profile', params: {idUser: this.currentUser.id }});
        else if (option === "announcement") router.push({name: 'applicant-announcement', params: {idUser: this.currentUser.id }});
        else if (option === "close") this.logout();
      }
    }
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 15px;
}
</style>
