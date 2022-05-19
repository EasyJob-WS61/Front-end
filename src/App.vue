<template>
  <v-app :theme="theme">
    <applicant-navigation v-if="typeUser === 'applicants'" v-bind:theme-main="theme" v-on:changeTheme="changeTheme"></applicant-navigation>
    <postulant-navegation v-else></postulant-navegation>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import ApplicantNavigation from "@/applicants/pages/applicant-navigation";
import PostulantNavegation from "@/postulants/pages/postulant-navegation";
export default {
  name: 'App',
  components: {ApplicantNavigation, PostulantNavegation},
  data: () => ({
    theme: 'lightTheme',
    typeUser: "applicants",
  }),
  methods: {
    changeTheme() {
      if (this.theme === 'lightTheme') {
        this.theme = 'darkTheme';
      }
      else {
        this.theme = 'lightTheme';
      }
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
