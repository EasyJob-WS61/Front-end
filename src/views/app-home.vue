<template>
  <v-container>
    <v-row class="mt-2">
      <v-col cols="12" class="v-col-md-9">
        <app-announcement></app-announcement>
      </v-col>
      <v-col cols="12" class="v-col-md-3">
        <subscription-ad class="position-fixed"></subscription-ad>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubscriptionAd from "@/core/pages/susbcription-ad";
import AppAnnouncement from "@/announcements/pages/announcement-list"
export default {
  name: "postulant-home",
  components: {SubscriptionAd, AppAnnouncement}
}
</script>

<style scoped>
</style>
