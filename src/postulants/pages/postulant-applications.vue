<template>
  <v-container>
    <v-row class="mt-2">
      <v-col cols="12" class="v-col-md-9">
        <h1>Mis Postulaciones</h1>
        <v-card v-for="(application, index) in announcements" v-bind:key="index" class="mt-8 v-col-12">
          <v-row>
            <v-img class="v-col-12 v-col-md-4" height="200" cover="true" :src="application.enterprisePhoto"></v-img>
            <v-card-content class="v-col-12 v-col-md-8 d-flex align-center">
              <div>
                <div class="w-100 d-flex">
                  <v-card-title class="mr-2">{{application.announcement.title}}</v-card-title>
                  <v-chip
                      v-if="application.status === 'pending'"
                      class="ma-2 d-none d-md-flex"
                      color="blue"
                      label
                      text-color="white"
                  >
                    <v-icon start icon="mdi-label"></v-icon>
                    {{application.status}}
                  </v-chip>
                  <v-chip
                      v-if="application.status === 'denied'"
                      class="ma-2 d-none d-md-flex"
                      color="green"
                      label
                      text-color="white"
                  >
                    <v-icon start icon="mdi-label"></v-icon>
                    {{application.status}}
                  </v-chip>
                  <v-chip
                      v-if="application.status === 'accepted'"
                      class="ma-2 d-none d-md-flex"
                      color="green"
                      label
                      text-color="white"
                  >
                    <v-icon start icon="mdi-label"></v-icon>
                    {{application.status}}
                  </v-chip>
                </div>
                <v-card-subtitle>{{application.enterpriseName}}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="success">Ver detalle</v-btn>
                </v-card-actions>
              </div>
            </v-card-content>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-none d-md-flex v-col-md-3">
        <postulant-premium class="position-fixed"></postulant-premium>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostulantPremium from "@/subscription/pages/susbcription-ad.vue";
import PostulantApplicationsService from "@/postulants/services/postulant-applications.service.js";
import EnterpriseService from "@/anuncios-postulantes/services/enterprise.service.js";
export default {
  name: "postulant-applications",
  components: { PostulantPremium },
  data() {
    return {
      userId: null,
      announcementId: null,
      announcements: [],
      errors: [],
    }
  },
  methods: {
    async getApplications() {
      await PostulantApplicationsService.getByPostulantId(this.userId)
        .then((response) => {
          this.announcements = response.data;
          response.data.forEach(async (application, index) => {
            await EnterpriseService.getByApplicantId(application.announcement.applicantId)
              .then(resp => {
                this.announcements.at(index).enterpriseName = resp.data.at(0).name;
                this.announcements.at(index).enterprisePhoto = resp.data.at(0).photo;
              })
              .catch(error => {
                this.errors.push(error.message);
              })
          })
        })
        .catch(error => {
          this.errors.push(error.message);
        })
    }
  },
  mounted() {
    this.$nextTick(async () => {
      this.userId = this.$route.params.idUser;
      await this.getApplications();
      console.log(this.announcements);
    });
  }
}
</script>

<style scoped>

</style>
