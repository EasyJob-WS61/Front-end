<template>

  <row class="ma-0 pa-0 d-flex " style="height: 680px " >

    <v-col cols="18" class="ma-0 pa-4  " style="margin-top: 100px">
      <v-card class="py-2 mb-4 ">
        <p class="font-weight-bold text-h5 text-uppercase text-center wight-100 primary">Notificaciones</p>
      </v-card>
      <v-raw v-for="notification in notifications" :key="notification" cols="8" class="ma-0 pa-4  max-wight-100 " >
          <v-card v-if="notification.postulant_id==idUser"  class="pa-4 mb-3" >

            <p class="font-weight-medium blackletter" style="font-size: 12px; text-align: right">{{notification.date}}</p>

            <v-row>
              <v-col v-if="notification.success===1" cols="1">
                <v-img class="mx-auto" width="50px" v-bind:src="require('../../core/img/check.png')" alt="premium"></v-img>
              </v-col>
              <v-col v-if="notification.refused===1" cols="1">
                <v-img class="mx-auto" width="60px" v-bind:src="require('../../core/img/Frame 1.png')" alt="premium"></v-img>
              </v-col>
              <v-col>
                <v-card-title class="primary">{{notification.title}}</v-card-title>
                <p class="font-weight-medium blackletter" style="margin-left: 20px">{{notification.description}}</p>
              </v-col>
            </v-row>

            <v-card-actions class="justify-end " v-if="notification.refused===1">
               <v-btn class="rounded-lg btn-info" @click="goToFeedback(notification.id)" >Más información</v-btn>
             </v-card-actions>

          </v-card>
      </v-raw>
    </v-col>
  </row>
</template>

<script>
import NotificationService from  "@/postulants/services/postulants.notification.service";
import router from "@/router";
export default {
  name: "postulant-notification",
  components: {},
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
  },
  methods: {
    goToFeedback(id) {
      router.push({ name: 'postulant-feedback', params: {idUser: this.$route.params.idUser, idNotification: id} })    },
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