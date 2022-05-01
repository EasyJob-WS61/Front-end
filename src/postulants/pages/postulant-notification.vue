<template>
  <row class="ma-0 pa-0 d-flex">

    <v-col cols="4" class="ma-0 pa-0">
      <postulant-navegation></postulant-navegation>
    </v-col>

    <v-col cols="8" class="ma-0 pa-4 background max-wight-100">
      <v-card class="py-2 mb-4 ">
        <p class="font-weight-bold text-h5 text-uppercase text-center wight-100 primary">Notificaciones</p>
      </v-card>
      <v-raw v-for="notification in notifications" :key="notification" cols="8" class="ma-0 pa-4  max-wight-100 " >
          <v-card v-if="notification.postulant_id==idUser"  class="pa-4 mb-3" >
            <p class="font-weight-medium blackletter">{{notification.date}}</p>
            <v-card-title class="primary">{{notification.title}}</v-card-title>
            <p class="font-weight-medium blackletter">{{notification.description}}</p>

            <v-card-actions class="justify-end " v-if="notification.refused===1">
               <v-btn class="rounded-lg btn-info">Más información</v-btn>
             </v-card-actions>
          </v-card>
      </v-raw>
    </v-col>
  </row>
</template>

<script>
import NotificationService from  "@/postulants/services/postulants.notification.service";
import PostulantNavegation from "@/postulants/pages/postulant-navegation";
export default {
  name: "postulant-notification",
  components: {PostulantNavegation},
  data: () => ({
    notifications: [],
    items: [],
    idUser:0,
  }),
  async created() {
    try {
      const response1 = await NotificationService.getAll();
      this.notifications = response1.data;
      this.idUser=this.$route.params.idUser;
    }
    catch (e)
    {
      console.error(e);
      console.log(this.notifications)
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url("../../core/img/BACKGROUND.png");
  background-size: cover;
}
.primary {
  color: #01C4FF;
  font-size: 25px;
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