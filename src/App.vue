<template>
  <v-app :theme="theme">
    <app-navigation
        v-if="loggedIn"
        v-bind:type-user="typeUser"
        v-bind:theme-main="theme"
        v-on:changeTheme="changeTheme"
        v-on:sign-out="logOut"
    ></app-navigation>
    <v-main>
      <router-view v-on:log-in-success-full="logInSuccessFull"></router-view>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from "@/views/app-navegation";
import AppFooter from "@/views/app-footer";
import router from "@/router";
export default {
  name: 'App',
  components: {AppNavigation, AppFooter},
  data: () => ({
    theme: 'lightTheme',
    typeUser: null,
    id: null,
    name: null,
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    changeTheme() {
      if (this.theme === 'lightTheme') {
        this.theme = 'darkTheme';
      }
      else {
        this.theme = 'lightTheme';
      }
    },
    logInSuccessFull() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.typeUser = user.userType.toLowerCase();
      this.name = user.name + " " + user.lastname;
      this.id = user.id;
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.typeUser = null;
      this.id = null;
    },
  },
  mounted() {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme) this.theme = 'darkTheme';
    else this.theme = 'lightTheme';

    if (this.currentUser) {
      const user = this.currentUser;
      this.typeUser = user.userType.toLowerCase();
      this.name = user.name + " " + user.lastname;
      this.id = user.id;
    } else {
      router.push({name: "login-account"});
    }
  },
}
</script>

<style>

</style>
