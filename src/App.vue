<template>
  <v-app :theme="theme" class="scroll overflow-hidden">
    <v-main>
      <postulant-premium></postulant-premium>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import PostulantPremium from "@/postulants/pages/postulant-premium";
export default {
  name: 'App',
  components: {PostulantPremium},
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
