<template>
  <v-app :theme="theme">
    <div v-if="!isLoggedIn">
      <LoginAccount
          v-on:logged-postulant="LoggedPostulant"
          v-on:logged-applicant="LoggedApplicant"
      ></LoginAccount>
    </div>
    <div v-else>
      <applicant-navigation
          v-if="typeUser === 'applicant'"
          v-bind:theme-main="theme"
          v-on:changeTheme="changeTheme"
          v-on:sign-out="SignOut"
      ></applicant-navigation>
      <postulant-navegation
          v-else
          v-bind:user-name="user.name"
          v-bind:theme-main="theme"
          v-on:changeTheme="changeTheme"
          v-on:sign-out="SignOut"
      ></postulant-navegation>
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import ApplicantNavigation from "@/applicants/pages/applicant-navigation";
import PostulantNavegation from "@/postulants/pages/postulant-navegation";
import LoginAccount from "@/authenticate/pages/login-account";
export default {
  name: 'App',
  components: {ApplicantNavigation, PostulantNavegation, LoginAccount},
  data: () => ({
    theme: 'lightTheme',
    typeUser: null,
    isLoggedIn: false,
    id: null,
    user: { name: "Heber Cordova"},
  }),
  methods: {
    changeTheme() {
      if (this.theme === 'lightTheme') {
        this.theme = 'darkTheme';
      }
      else {
        this.theme = 'lightTheme';
      }
    },
    LoggedPostulant() {
      this.typeUser = "postulant";
      this.isLoggedIn = true;
      this.id = 2;
      this.$router.push({ name: "postulant-home", params: { id: this.id }});
    },
    LoggedApplicant() {
      this.typeUser = "applicant";
      this.isLoggedIn = true;
      this.id = 1;
      this.$router.push({ name: "applicant-announcement", params: { idUser: this.id }});
    },
    SignOut() {
      this.typeUser = null;
      this.isLoggedIn = false;
      this.id = null;
      this.$router.push({ name: "login-account"});
      console.log("here");
    }
  },
  mounted() {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme) this.theme = 'darkTheme';
    else this.theme = 'lightTheme';
  },
}
</script>

<style>

</style>
