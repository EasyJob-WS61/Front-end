<template>
  <v-container>
    <v-row class="mt-2">
      <v-col cols="12" class="v-col-md-9">
        <postulant-announcement></postulant-announcement>
      </v-col>
      <v-col cols="12" class="v-col-md-3">
        <postulant-premium class="position-fixed"></postulant-premium>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostulantPremium from "@/postulants/pages/postulant-premium";
import PostulantAnnouncement from "@/anuncios-postulantes/pages/announcement-list"
export default {
  name: "postulant-home",
  components: {PostulantPremium, PostulantAnnouncement}
}
</script>

<style scoped>
</style>
