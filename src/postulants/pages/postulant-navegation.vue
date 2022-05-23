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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold" v-if="!this.drawer">EasyJob</v-toolbar-title>
      <v-toolbar-title v-else></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" icon><v-icon>{{this.theme}}</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-cog</v-icon></v-btn>

    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        bottom
        class="text-white "
        temporary="false"
        hide-overlay
        height="100%"
    >
      <v-list
          nav="true"
          dense
      >
        <div class="d-flex flex-column justify-center align-center pa-4">
          <v-img width="100px" :src="require('../../core/img/LOGO.png')"></v-img>
          <p  class="primary font-weight-bold " style="font-size: 30px">EasyJob</p>
        </div>

        <v-list-item-group
            v-model="group"
            class="d-flex flex-column align-center"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="d-flex flex-column">
            <v-list-item-title class="pa-4 border-item-menu">
              <router-link :to="{ name: 'anuncios-postulantes', params: { id: this.idUser }}" class="text-decoration-none color-text-items">Inicio</router-link>
            </v-list-item-title>
            <v-list-item-title class="pa-4 border-item-menu">
              <router-link to="" class="text-decoration-none color-text-items">Perfil</router-link>
            </v-list-item-title>
            <v-list-item-title class="pa-4 border-item-menu">
              <router-link :to="{name: 'postulant-notification', params:{idUser: this.idUser}}" class="text-decoration-none color-text-items">Notificaciones</router-link>
            </v-list-item-title>
            <v-list-item-title class="pa-4 border-item-menu">
              <router-link :to="{name: 'postulant-chat', params:{idUser: this.idUser, idUser2: 0}}" class="text-decoration-none color-text-items">Mensajes</router-link>
            </v-list-item-title>
            <v-list-item-title class="pa-4 border-item-menu ">
              <router-link :to="{name: 'postulant-premium', params:{idUser: this.idUser}}"  class="text-decoration-none color-text-items">Premium</router-link>
            </v-list-item-title>
            <v-list-item-title class="pa-4 border-item-menu-logout" @click="SignOut">
              <p class="color-text-items">Cerrar Sesion</p>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: "postulant-navegation",
  props: ['themeMain'],
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Inicio', to: 'mdi-clock' },
      { text: 'Perfil', to: 'mdi-account' },
      { text: 'Notificaciones', to: 'mdi-flag' },
      { text: 'Mensajes', to: 'mdi-flag' },
      { text: 'Premium', to: 'mdi-flag' }
    ],
    drawer: false,
    group: null,
    theme: 'mdi-lightbulb-on',
    idUser: 1
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
      this.routes.push("hello");
    },
    SignOut() {
      this.$emit("sign-out");
    }
  },
}
</script>

<style scoped>
.border-item-menu {
  border-bottom: 3px solid #8C8C8C;
  cursor: pointer;
}
.border-item-menu:hover {
  border-bottom: 3px solid #01C4FF;
  color: #01C4FF;
}
.border-item-menu-logout {
  border-bottom: 3px solid #8C8C8C;
  cursor: pointer;
}
.border-item-menu-logout:hover {
  border-bottom: 3px solid #FF5A5A;
  color: #FF5A5A;
}
.color-text-items {
  color: inherit;
}
::-webkit-scrollbar {
  width: 15px;
}
.primary {
  color: #01C4FF;
}
</style>
