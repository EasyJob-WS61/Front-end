<template>
  <v-container>
    <v-row justify="center">
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
        <v-btn class="text-white mt-4 mb-8 block" color="success">Aplicar</v-btn>
        <p class="mb-4">{{announcement.description}}</p>
        <div class="d-flex align-center mb-8">
          <v-avatar
              color="info"
              size="x-large"
              class="mx-4"
          >
            <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            ></v-img>
          </v-avatar>
          <div>
            <h3>Elizabeth Nina</h3>
            <p>Reclutadora de Gloria SAC</p>
          </div>
        </div>
        <v-card-content class="mx-md-8">
          <v-card class="w-100">
            <v-row>
              <v-img cover="true" class="v-col-12 v-col-md-4" height="200px" src="https://www.gloria.com.pe/images/lineaTiempo/logo.jpg"></v-img>
              <div class="v-col-12 v-col-md-8 d-flex flex-column justify-center">
                <v-card-title>Gloria SAC</v-card-title>
                <v-card-subtitle class="mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</v-card-subtitle>
                <div class="d-flex justify-space-evenly mx-8">
                  <p>RUC: 765 4354 1232</p>
                  <P>Telefono: 543 878 909</P>
                </div>
              </div>
            </v-row>
          </v-card>
        </v-card-content>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="1000px">
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
import ApplicantNotificationService from "@/applicants/services/applicants.notification.service";
export default {
  name: "DetallesAnuncio",


  data: () => ({
    dialog: false,
    announcement: "",
    notification: {}
  }),

  async mounted() {
    const id = this.$route.params.id;
    const announcementResponse = await AnnouncesService.getById(id);
    this.announcement = await announcementResponse.data;
  },
  methods:{
    postular(){
      this.notification.applicantId= parseInt(this.announcement.applicantId);
      this.notification.announcement_id= parseInt(this.$route.params.a_id);
      this.notification.postulant_id= parseInt(this.$route.params.id);
      this.notification.date=Date().toLocaleString();
      this.notification.state="pending";
      this.notification.title="Has aplicado para "+this.announcement.title;
      this.notification.description="Te avisaremos en cuanto haya una actualización del solicitador del empleo";
      this.notification.feedback="";
      ApplicantNotificationService.create(this.notification);
    }
  }
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
