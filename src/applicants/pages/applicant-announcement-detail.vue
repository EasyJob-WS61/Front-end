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
                <v-col cols="8" class="v-col-md-3 d-flex justify-center align-center">
                  <div v-if="application.state === 'accepted'">
                    <v-btn disabled color="success">Aceptado</v-btn>
                  </div>
                  <div v-else-if="application.state === 'denied'">
                    <v-btn disabled color="error">Rechazado</v-btn>
                  </div>

                  <v-row v-else-if="application.state === 'pending'" class="justify-center">
                    <v-btn @click.stop="confirmAcceptedPostulant = true" icon small color="info" class="mr-2">
                      <v-icon>mdi-check</v-icon>
                    </v-btn>

                    <v-dialog
                        v-model="confirmAcceptedPostulant">
                      <v-card width="500px" class="px-4 py-8 d-flex flex-column justify-center align-center">
                        <v-card-subtitle>¿Esta seguro de aceptar a
                            <span class="error pl-1">{{postulant.name}} {{postulant.lastname}}</span>?
                        </v-card-subtitle>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                          <v-btn color="error" @click="confirmAcceptedPostulant = !confirmAcceptedPostulant">Cancelar</v-btn>
                          <v-btn color="info" @click="aceptar(application.applicantId, application.announcement_id, application.postulant_id, application.date,application.id),confirmAcceptedPostulant = !confirmAcceptedPostulant ">Aceptar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-btn @click="cancel(application.applicantId, application.announcement_id, application.postulant_id, application.date,application.id)" icon small color="error" class="ml-2">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
                </row>
              </div>
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
import ApplicantNotificationService from  "@/applicants/services/applicants.notification.service"
import PostulantsService from "@/postulants/services/postulants.service";
import router from "@/router";
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
    errors: [],
  }),
  async created() {
    try {
      //const response1 = await ApplicantNotificationService.getByAnnouncementId(this.$route.params.id);
      //this.applications = response1.data
      const response2= await PostulantsService.getAll();
      this.postulants = response2.data
      await this.getAnnouncement();
      await this.getApplicant();
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
            console.log(this.announcement)
          })
          .catch(error => {
            console.log(error)
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
    aceptar(applicant_id,announcementid, postulantid, date, id){
      ApplicantNotificationService.getById().then(response=>{
        this.aux= response.data;
      });
      this.aux.state= "accepted";
      this.aux.applicantId= applicant_id;
      this.aux.announcement_id= announcementid;
      this.aux.postulant_id= postulantid;
      this.aux.date=date;
      this.aux.title="¡En hora buena! Fuiste aceptado para un puesto laboral";
      this.aux.description="Fuiste elegido por "+this.applicant.name;
      this.aux.feedback="";
      ApplicantNotificationService.update(id,this.aux);

      ApplicantNotificationService.getByAnnouncementId(this.$route.params.id).then(response=>{
        this.applications= response.data;
      });
      PostulantsService.getAll().then(response=>{
        this.postulants= response.data;
      });
      router.replace(this.$route.params)
    },
    cancel(applicant_id,announcementid, postulantid, date, id){
      ApplicantNotificationService.getById().then(response=>{
        this.aux= response.data;
      });
      this.aux.state= "denied";
      this.aux.applicantId= applicant_id;
      this.aux.announcement_id= announcementid;
      this.aux.postulant_id= postulantid;
      this.aux.date=date;
      this.aux.title="¡Sigue intentando!";
      this.aux.description="Revisa el feedback para mejorar tus habilidades";
      this.aux.feedback="Hemos recibido tu candidatura para el proceso de selección y hemos decidido no proceder con tu candidatura. En estos momentos necesitamos incorporar a alguien que se ajuste mejor al perfil definido.\n\nNo obstante, te animamos a que nos sigas la pista, a nosotros/as y a nuestra vacantes, ya que estamos en pleno proceso de crecimiento, y quizás en otra ocasión nuestras motivaciones se alineen.\n\n¡Gracias por tu confianza y mucha suerte!";
      ApplicantNotificationService.update(id,this.aux);

      ApplicantNotificationService.getByAnnouncementId(this.$route.params.id).then(response=>{
        this.applications= response.data;
      });
      PostulantsService.getAll().then(response=>{
        this.postulants= response.data;
      });
      router.replace(this.$route.params)
    },
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
