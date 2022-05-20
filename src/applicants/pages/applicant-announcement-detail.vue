<template>
  <v-container>
    <div class="ma-0 pa-0 d-flex">
      <v-row wrap>
        <v-col cols="12" class="v-col-md-9">
          <v-card class="height-100 pa-4">
            <v-btn color="warning" disabled class="font-weight-bold">{{this.announcement.ability}}</v-btn>
            <v-card-title class="font-weight-bold text-h5 text-uppercase primary mt-4">{{this.announcement.title}}</v-card-title>
            <v-card-subtitle class="mb-2">{{this.announcement.description}}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-md-3">
          <v-card class="d-flex flex-column pa-4 height-100">
            <v-card-subtitle>Presentado por</v-card-subtitle>
            <div class="d-flex justify-center align-center pt-2"><v-img max-width="150px" :src="this.applicant.photo"></v-img></div>
            <a class="text-decoration-none" :href="this.applicant.website" target="_blank">
              <v-btn block="true" class="mt-6" outlined color="info">Visitar Sitio Web</v-btn>
            </a>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card width="100%" class="pa-4 mt-4">
            <div>
              <v-card-title class="font-weight-bold text-h5 text-uppercase primary mt-4">{{this.applicant.name}}</v-card-title>
              <v-card-subtitle class="mb-2">{{this.applicant.description}}</v-card-subtitle>
              <v-card-subtitle class="mb-2">{{this.applicant.ruc}}</v-card-subtitle>
            </div>
            <div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card width="100%" class="px-8 py-4 my-4">

            <v-card-title class="text-center font-weight-bold primary pl-0">Postulantes</v-card-title>
            <div v-if="this.applications.length === 0" class="d-flex justify-center align-center">
              <p class="font-weight-bold primary">No hay postulantes</p>
            </div>
            <div v-else>
              <v-col v-for="application in applications" v-bind:key="application">
              <div v-for="postulant in postulants" v-bind:key="postulant">
                <row v-if="postulant.id==application.postulant_id">
                <v-col cols="3" class="v-col-md-2 pa-4">
                  <v-img class="rounded" :src="postulant.photo"></v-img>
                </v-col>
                <v-col cols="5" class="v-col-md-7 d-flex flex-column justify-center align-start">
                  <v-card-title>{{postulant.name}} {{postulant.lastname}}</v-card-title>
                  <v-card-subtitle>{{postulant.email}}</v-card-subtitle>
                </v-col>
                <v-col cols="4" class="v-col-md-3 d-flex justify-center align-center">
                  <div v-if="application.state === 'accepted'">
                    <v-btn disabled color="success">Aceptado</v-btn>
                  </div>
                  <div v-else-if="application.state === 'denied'">
                    <v-btn disabled color="error">Rechazado</v-btn>
                  </div>
                  <div v-else-if="application.state === 'pending'">
                    <v-btn @click="processAcceptedPostulant(key, 'accepted', 'aceptar')" icon small color="info" class="mr-2">
                      <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn @click="processAcceptedPostulant(key, 'denied', 'rechazar')" icon small color="error" class="ml-2">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                </row>
              </div>
              <v-dialog
                  transition="dialog-bottom-transition"
                  v-model="confirmAcceptedPostulant"
                  persistent>
                <v-card width="500px" class="px-4 py-8 d-flex flex-column justify-center align-center">
                  <div class="">
                    <v-card-subtitle>¿Esta seguro de {{this.stateES}} a
                      <span class="error pl-1">{{this.selectApplication.postulant.name}} {{this.selectApplication.postulant.lastname}}</span>?
                    </v-card-subtitle>
                  </div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="error" @click="confirmAcceptedPostulant = !confirmAcceptedPostulant">Cancelar</v-btn>
                    <v-btn color="info" @click="updateApplications(this.selectApplicationKey, this.stateEN)">Aceptar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              </v-col>
            </div>

          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ApplicantsAnnouncementService from "@/applicants/services/applicants.announcement.service";
import ApplicantsService from "@/applicants/services/applicants.service";
import ApplicationsService from "@/applicants/services/applications.service";
import ApplicantNotificationService from  "@/applicants/services/applicants.notification.service"
import PostulantsService from "@/postulants/services/postulants.service";
export default {
  name: "applicant-announcement-detail",
  components: {},
  data: () => ({
    selectApplication: [],
    selectApplicationKey: null,
    confirmAcceptedPostulant: false,
    idUser: null,
    stateEN: null,
    stateES: null,
    postulants: [],
    announcement: [],
    applicant: [],
    applications: [],
    errors: [],
  }),
  async created() {
    try {
      const response1 = await ApplicantNotificationService.getByAnnouncementId(this.$route.params.id);
      this.applications = response1.data
      const response2= await PostulantsService.getAll();
      this.postulants = response2.data
      this.getAnnouncement();
      this.getApplicant();
    }
    catch (e)
    {
      console.error(e);
      console.log(this.notifications)
    }
  },
  methods: {
    async getAnnouncement(){
      await ApplicantsAnnouncementService.getById(this.$route.params.id)
          .then(response => {
            this.announcement = response.data;
          })
          .catch(error => {
            this.errors.push(error);
          })
    },
    async getApplicant() {
      await ApplicantsService.getById(this.$route.params.idUser)
          .then(response => {
            this.applicant = response.data;
          })
          .catch(error => {
            this.errors.push(error);
          })
    },
    async getApplicationsByAnnouncementId() {
      await ApplicationsService.getByAnnouncementId(this.$route.params.id)
          .then(response => {
            this.applications = response.data;
            console.log(this.applications);
          })
          .catch(error => {
            this.errors.push(error);
          })
    },
    async updateApplications(key, newState) {
      let applicationUpdated = {
        postulantId: this.applications[key].postulantId,
        announcementId: this.applications[key].announcementId,
        state: newState,
        date: this.applications[key].date
      }
      await ApplicationsService.update(this.applications[key].id, applicationUpdated)
          .then(response => {
            this.applications[key].state = response.data.state;
          })
          .catch(error => {
            this.errors.push(error);
          })
      this.confirmAcceptedPostulant = false;
    },
    processAcceptedPostulant(key, state, stateText) {
      this.selectApplication = this.applications[key];
      this.selectApplicationKey = key;
      this.stateEN = state;
      this.stateES = stateText;
      this.confirmAcceptedPostulant = !this.confirmAcceptedPostulant
    }
  }
}
</script>

<style scoped>
.primary {
  color: #01C4FF;
}
.height-100 {
  height: 100%;
}
</style>
