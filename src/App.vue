<template>
  <v-app :theme="theme" class="scroll overflow-hidden">
    <v-main>
      <postulant-navegation v-if="this.$route.name!=='login-account'"></postulant-navegation>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import PostulantNavegation from "@/postulants/pages/postulant-navegation";
export default {
  name: 'App',
  components: {PostulantNavegation},
  data: () => ({
    theme: 'lightTheme' //darkTheme lightTheme
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
.scroll {
  overflow-x:hidden;
}
</style>
