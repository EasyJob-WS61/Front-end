<template>
  <v-container>
    <row class="ma-0 pa-0 d-flex" style="height: 680px " >

      <v-col cols="18" class="ma-0 pa-4  " style="margin-top: 100px">
        <v-card class="py-2 mb-4 ">
          <p class="font-weight-bold text-h5 text-uppercase text-center wight-100 primary">Notificaciones</p>
        </v-card>
        <v-raw v-for="notification in notifications" :key="notification" cols="8" class="ma-0 pa-4  max-wight-100 " >
          <v-card v-if="notification.applicantId==idUser"  class="pa-4 mb-3" >
            <p class="font-weight-medium blackletter" style="font-size: 12px; text-align: right">{{notification.date}}</p>

            <v-row>
              <v-col v-for="postulant in postulants" :key="postulant" >
                <v-row v-if="postulant.id==notification.postulant_id">

                  <v-card-title  class="primary">
                    {{postulant.name}} {{postulant.lastname}} ha postulado a un anuncio tuyo</v-card-title>

                  <br>
                  <v-row v-for="anuncio in anuncios" :key="anuncio">

                    <p v-if="anuncio.id==notification.announcement_id" class="font-weight-medium blackletter"
                       style="margin-left: 30px">"{{anuncio.title}}"  tiene un nuevo postulante</p>
                  </v-row>
                  <br>
                </v-row>
              </v-col>
            </v-row>

            <v-card-actions class="justify-end " >
              <v-btn class="rounded-lg btn-info" @click="goToAnoun(notification.announcement_id)" >Ir a detalles del anuncio</v-btn>
            </v-card-actions>
          </v-card>
        </v-raw>
      </v-col>
    </row>
  </v-container>
</template>

<script>
import ApplicantNotificationService from "@/applicants/services/applicants.notification.service";
import PostulantsService from "@/postulants/services/postulants.service";
import CustomersService from "@/applicants/services/applicants.announcement.service"
import router from "@/router";
export default {
  name: "applicant-notification",
  components: {},
  data: () => ({
    notifications: [],
    postulants: [],
    anuncios: [],
    items: [],
    idUser:0,
  }),
  async created() {
    try {
      const response1 = await ApplicantNotificationService.getAll();
      const response2 = await PostulantsService.getAll();
      const response3 = await CustomersService.getAll();
      this.notifications = response1.data;
      this.postulants = response2.data;
      this.anuncios= response3.data;
      this.idUser=this.$route.params.idUser;
    }
    catch (e)
    {
      console.error(e);
      console.log(this.notifications)
    }
  },
  methods: {
    goToAnoun(id) {
      router.push({ name: 'applicant-announcement-detail', params: {idUser: this.$route.params.idUser, id: id}})
    },
  }
}
</script>

<style scoped>

.primary {
  color: #01C4FF;
  font-size: 20px;
  font-family: Roboto;
}
.blackletter{
  color: #6c6b6b;
  font-family: Roboto;
}
.btn-info {
  background-color: #02EDB3;
  color: white;
}
</style>
