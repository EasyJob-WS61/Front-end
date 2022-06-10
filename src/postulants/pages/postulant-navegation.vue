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
          <div><v-img class="pr-4" width="48px" :src="require('../../core/img/LOGO.png')"></v-img></div>
          <v-toolbar-title class="font-weight-bold text-white">EasyJob</v-toolbar-title>
        </a>
        <v-spacer></v-spacer>
        <v-btn @click="changeTheme" icon><v-icon>{{this.theme}}</v-icon></v-btn>
        <v-btn id="notification-activator" icon><v-icon>mdi-bell</v-icon></v-btn>
        <v-btn id="menu-activator"><v-icon class="pr-2">mdi-account</v-icon>{{userName}}</v-btn>
      </v-container>

      <v-menu activator="#menu-activator">
        <v-list>
          <v-list-item
              v-for="(item, index) in options"
              :key="index"
              :value="index"
          >
            <v-list-item-title @click="goToOptions(item.to)"><v-icon class="mr-4">{{item.icon}}</v-icon>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <postulant-notification></postulant-notification>

    </v-app-bar>
  </v-card>
</template>
<script>
import PostulantNotification from "@/postulants/pages/postulant-notification";
import router from "@/router";
export default {
  name: "postulant-navegation",
  components: {PostulantNotification},
  props: ['themeMain', 'userName'],
  data: () => ({
    theme: 'mdi-lightbulb-on',
    idUser: 1,
    options: [
      {name: "Mi Perfil", icon: "mdi-account", to: "profile"},
      {name: "Mis Postulaciones", icon: "mdi-briefcase", to: "applications"},
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
      router.push({ name: 'postulant-home', params: { id: this.idUser }});
    },
    SignOut() {
      this.$emit("sign-out");
    },
    goToOptions(option) {
      if (option === "profile") router.push({name: 'postulant-profile', params: {idUser: this.idUser }});
      else if (option === "applications") router.push({name: 'postulant-applications', params: {idUser: this.idUser }});
      else if (option === "close") this.SignOut();
    }
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 15px;
}
</style>
