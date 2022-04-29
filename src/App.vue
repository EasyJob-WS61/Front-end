<template>
  <v-app :theme="theme" class="scroll overflow-hidden">
    <v-main>
      <applicant-announcement></applicant-announcement>
    </v-main>
  </v-app>
</template>

<script>

import ApplicantAnnouncement from "@/applicants/pages/applicant-announcement";
export default {
  name: 'App',
  components: {ApplicantAnnouncement},
  data: () => ({
    theme: 'darkTheme' //darkTheme lightTheme
  }),
}
</script>

<style>
.scroll {
  overflow-x:hidden;
}
</style>
