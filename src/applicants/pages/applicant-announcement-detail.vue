<template>
  <v-container>
    <div class="ma-0 pa-0 d-flex">
      <v-row wrap>
        <v-col cols="12" class="v-col-md-9">
          <v-card class="height-100 pa-4">
            <v-btn color="warning" disabled class="font-weight-bold">{{this.announcement.ability}}</v-btn>
            <v-card-title class="font-weight-bold text-h5 text-uppercase primary mt-4">{{this.announcement.title}}</v-card-title>
            <v-card-subtitle class="mb-2">{{this.announcement.description}}</v-card-subtitle>
            <div class="ml-4 my-2">
              <div class="d-flex mb-2">
                <v-icon class="mr-4" large>mdi-map-marker</v-icon>
                <p>{{announcement.place}}</p>
              </div>
              <div class="d-flex mb-2">
                <v-icon class="mr-4" large>mdi-clock-outline</v-icon>
                <p>{{announcement.period}}</p>
              </div>
              <div class="d-flex mb-2">
                <v-icon class="mr-4" large>mdi-currency-usd</v-icon>
                <p>{{announcement.salary}}</p>
              </div>
            </div>
            <div class="d-flex mt-6">
              <div class="v-col-12 v-col-md-4">
                <v-img :src="this.applicant.photo"></v-img>
              </div>
              <div class="v-col-12 v-col-md-8 d-flex flex-column justify-center">
                <v-card-title class="font-weight-bold text-h5 text-uppercase primary mt-4">{{this.applicant.name}}</v-card-title>
                <v-card-subtitle class="mb-2">{{this.applicant.description}}</v-card-subtitle>
                <v-card-subtitle class="mb-2">{{this.applicant.ruc}}</v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-md-3">
          <v-card class="d-flex flex-column pa-4 height-100">
            <v-card-subtitle class="pl-0">Presentado por</v-card-subtitle>
            <v-card-content>
              <div class="d-flex justify-center align-center pt-2"><v-img cover :src="this.enterprise.photo"></v-img></div>
              <a class="text-decoration-none" :href="this.enterprise.website" target="_blank">
                <v-btn block="true" class="mt-6" outlined color="info">Visitar Sitio Web</v-btn>
              </a>
            </v-card-content>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card width="100%" class="px-8 pt-4 pb-8 mb-8">
            <h2 class="font-weight-bold primary pl-0 mb-4">Postulantes</h2>
            <div v-if="this.applications.length === 0" class="d-flex justify-center align-center">
              <p class="font-weight-bold primary">No hay postulantes</p>
            </div>
            <div v-else>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="w-100 d-flex justify-space-between">
                      <p>Paso 1: Selecciona</p>
                      <p class="px-6 text-uppercase info">Postulantes: {{this.applications.length}}</p>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div v-for="(application, index) in applications" v-bind:key="index">
                      <v-row class="ma-3 pa-2 border-solid rounded-lg border-dotted">
                        <v-col cols="12" class="d-flex align-center justify-center v-col-md-2">
                          <v-img
                              :src="application.postulant.photo"
                              :alt="application.postulant.name"
                              cover="true"
                              max-width="150"
                          ></v-img>
                        </v-col>
                        <v-col cols="12" class="v-col-md-10">
                          <h3 class="w-100" style="max-height: 48px">{{application.postulant.name}} {{application.postulant.lastname}}</h3>
                          <p>{{application.postulant.description}}</p>
                          <div v-if="application.status === 'pending'"  class="mt-4 d-flex d-md-inline-block flex-column">
                            <v-btn
                                prepend-icon="mdi-check"
                                color="green"
                                class="mr-md-4 mb-4 mb-md-0"
                                @click="changeStatusPostulant(application.id, index, 'accepted')"
                            >Aceptar</v-btn>
                            <v-btn
                                prepend-icon="mdi-minus"
                                color="error"
                                @click="changeStatusPostulant(application.id, index, 'denied')"
                            >Rechazar</v-btn>
                          </div>
                          <div v-else-if="application.status === 'accepted'" class="mt-4 d-flex d-md-inline-block flex-column">
                            <v-btn
                                prepend-icon="mdi-check"
                                color="info"
                            >Aceptado</v-btn>
                          </div>
                          <div v-else-if="application.status === 'denied'" class="mt-4 d-flex d-md-inline-block flex-column">
                            <v-btn
                                prepend-icon="mdi-check"
                                color="error"
                            >Rechazado</v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="w-100 d-flex justify-space-between">
                      <p>Paso 2: Entrevista</p>
                      <p class="px-6 text-uppercase error">¡Aun no disponible!</p>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="d-flex justify-center align-center">
                      No hay Postulantes disponibles
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="w-100 d-flex justify-space-between">
                      <p>Paso 3: Elige</p>
                      <p class="px-6 text-uppercase error">¡Aun no disponible!</p>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="d-flex justify-center align-center">
                      No hay Postulantes disponibles
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
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
import EnterpriseService from "@/announcements/services/enterprise.service.js";
import ApplicationsService from "@/applicants/services/applications.service";
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
    announcement: {},
    applicant: [],
    aux: {},
    applications: [],
    enterprise: {},
    errors: [],
  }),
  async created() {
    try {
      await this.getAnnouncement();
      await this.getApplicant();
      await this.getEnterpriseByApplicantId();
      await this.getApplicationsByApplicantAndAnnouncementId();
    }
    catch (e)
    {
      this.errors.push(e.message);
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
    async getEnterpriseByApplicantId() {
      await EnterpriseService.getByApplicantId(this.applicant.id)
          .then(response => {
            this.enterprise = response.data.at(0);
          })
          .catch(error => {
            this.errors.push(error.message);
          })
    },
    async getApplicationsByApplicantAndAnnouncementId() {
      await ApplicationsService.getByApplicantAndAnnouncementId(this.$route.params.idUser, this.$route.params.id)
        .then(response => {
          this.applications = response.data;
        })
        .catch(error => {
          this.errors.push(error.message);
        })
    },
    async changeStatusPostulant(applicationId, index, status) {
      const applicationDto = {
        announcementId: this.applications.at(index).announcementId,
        postulantId: this.applications.at(index).postulantId,
        date: this.applications.at(index).date,
        status: status,
        id: this.applications.at(index).id
      }
      await ApplicationsService.update(applicationId, applicationDto)
        .then(response => {
          this.applications.at(index).status = response.data.status;
        })
        .catch(error => {
          this.errors.push(error);
        })
    }
  }
}
</script>

<style scoped>
.primary {
  color: #01C4FF;
}
.error {
  color: #d9534f;
}
.info {
  color: #5bc0de;
}
.height-100 {
  height: 100%;
}
</style>
