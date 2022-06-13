<template>
  <v-container>
    <v-row justify="center" class="h-screen">
      <v-col cols="12">
        <h1 class="mt-4">{{announcement.title}}</h1>
        <div class="d-flex">
          <h3 class="mr-4">{{announcement.place}}</h3>
          <h3 class="success-color">Publicado {{announcement.date}}</h3>
        </div>
        <div class="ml-4 my-2">
          <div class="d-flex mb-2">
            <v-icon class="mr-4" large>mdi-clock-outline</v-icon>
            <p>{{announcement.period}}</p>
          </div>
          <div class="d-flex mb-2">
            <v-icon class="mr-4" large>mdi-head</v-icon>
            <p>{{announcement.ability}}</p>
          </div>
          <div class="d-flex mb-2">
            <v-icon class="mr-4" large>mdi-currency-usd</v-icon>
            <p>{{announcement.salary}}</p>
          </div>
        </div>
        <v-btn v-if="currentUser.userType.toLowerCase() === 'postulant'" :disabled="active" @click="apply" class="text-white mt-4 mb-8 block" color="success">Aplicar</v-btn>
        <p class="mb-4">{{announcement.description}}</p>
        <div class="d-flex align-center mb-8">
          <v-avatar
              color="info"
              size="x-large"
              class="mx-4"
          >
            <v-img
                cover="true"
                :src="applicant.photo"
                alt="John"
            ></v-img>
          </v-avatar>
          <div>
            <h3>{{applicant.name}}</h3>
            <p>{{applicant.position}}</p>
          </div>
        </div>
        <v-card-content class="mx-md-8 mt-4 mb-4">
          <v-card class="w-100">
            <v-row>
              <v-img cover="true" class="v-col-12 v-col-md-4" height="200px" :src="enterprise.photo"></v-img>
              <div class="v-col-12 v-col-md-8 d-flex flex-column justify-center">
                <v-card-title>{{enterprise.name}}</v-card-title>
                <v-card-subtitle class="mb-2">{{enterprise.description}}</v-card-subtitle>
                <div class="d-flex justify-space-evenly mx-8">
                  <p>RUC: {{enterprise.ruc}}</p>
                  <P>Telefono: {{enterprise.phone}}</P>
                </div>
              </div>
            </v-row>
          </v-card>
        </v-card-content>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card class="card-dialog">
        <v-card-title class="col-center">
          <h2 style="text-align:center;">¡Estas postulando!</h2>
        </v-card-title>
        <v-card-text>
          <h4>
            Hemos enviado tu perfil profesional al solicitante. ¡Suerte!
          </h4>
        </v-card-text>
        <v-card-actions class="col-center">
          <v-btn color="primary" @click="dialog = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AnnouncesService from "../services/announcement.service";
import EnterpriseService from "@/anuncios-postulantes/services/enterprise.service";
import ApplicantService from "@/anuncios-postulantes/services/applicant.service";
import ApplicationService from "@/anuncios-postulantes/services/application.service";
export default {
  name: "DetallesAnuncio",
  data: () => ({
    userType: null,
    dialog: false,
    active: true,
    announcement: "",
    enterprise: "",
    applicant: "",
    notification: {},
    errors: []
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  async mounted() {
    const id = this.$route.params.announcementId;
    const announcementResponse = await AnnouncesService.getById(id);
    this.announcement = await announcementResponse.data;
    const enterpriseResponse = await this.getEnterprise(this.announcement.applicantId);
    this.enterprise = new Object(enterpriseResponse.data.at(0));
    const applicantResponse = await this.getApplicantById(this.announcement.applicantId)
    this.applicant = await applicantResponse.data;
    await this.existingApply();
  },
  methods:{
    async getEnterprise(applicantId) {
      return EnterpriseService.getByApplicantId(applicantId)
        .then(response => {
          return response;
        })
        .catch(error => {
          this.errors.push(error);
        })
    },
    async getApplicantById(id) {
      return ApplicantService.getById(id)
          .then(response => {
            return response;
          })
          .catch(error => {
            this.errors.push(error);
          })
    },
    async existingApply() {
      const announcementId = parseInt(this.$route.params.announcementId);
      const postulantId= parseInt(this.currentUser.id);
      console.log(announcementId);
      console.log(postulantId)
      await ApplicationService.getByPostulantAndAnnouncementId(postulantId, announcementId)
        .then(response => {
          if (response.data.length === 0)
            this.active = false;
          else this.active = true;
          console.log(response);
        })
        .catch(error => {
          this.active = false;
          console.log(error);
        })
    },
    async createApplication() {

    },
    apply(){
      this.notification.announcementId = parseInt(this.$route.params.announcementId);
      this.notification.postulantId= parseInt(this.currentUser.id);
      this.notification.date = Date().toLocaleString();
      this.notification.status = "pending";
      ApplicationService.create(this.notification);
      this.dialog = true;
      this.active = true;
    }
  },
};
</script>

<style scoped>
.success-color {
  color: #02edb3;
}
.container {
  width: 100%;
}

.col-center {
  display: flex;
  justify-content: center;
}

.containter-anuncio h2 {
  color: #01c4ff;
}
.containter-anuncio p {
  color: #ffffff;
}
img {
  width: 10.1rem;
  height: 10rem;
  max-width: 100% !important;
}
.block {
  width: 100%;
}
@media (min-width: 768px) {
  .block {
    width: auto;
  }
}
.card-dialog button{
    color:white !important;
    margin: 1pc 0px;
}
</style>
