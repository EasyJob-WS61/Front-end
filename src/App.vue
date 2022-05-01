<template>
  <v-app :theme="theme">
    <applicant-navigation v-bind:theme-main="theme" v-on:changeTheme="changeTheme"></applicant-navigation>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import ApplicantNavigation from "@/applicants/pages/applicant-navigation";
export default {
  name: 'App',
  components: {ApplicantNavigation},
  data: () => ({
    theme: 'lightTheme',
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
