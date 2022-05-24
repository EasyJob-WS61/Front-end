<template>
  <v-row style="margin-top: 30px;margin-left: 30px">
    <v-btn @click="goBack" flat class="elevation-0">
      <v-img class="mx-auto" width="60px" v-bind:src="require('../../core/img/flecha-izquierda.png')" alt="premium"></v-img>

    </v-btn>
  </v-row>
  <v-row v-for="notification in notifications" :key="notification"  style="margin-top: 30px; justify-content: center" class="ma-2 pa-0" >
    <v-col v-if="notification.id==actualid && notification.state==='denied'" cols="7">
      <v-card>
        <v-card>
        <v-row>
          <v-col cols="1" style="margin-left: 20px">
            <v-img class="mx-auto" width="60px" v-bind:src="require('../../core/img/Frame 1.png')" alt="premium"></v-img>

          </v-col>
          <v-col cols="8">
            <v-card-title class="p font-weight-bold text-h5 text-uppercase text-left wight-100"> {{notification.title}}</v-card-title>
          </v-col>
        </v-row>
      </v-card>
        <br/>
        <v-card-content class="letter font-weight-medium">
          <p class="p font-weight-bold text-h5 text-uppercase text-left wight-100">Feedback</p>

          {{notification.feedback}}
        </v-card-content>
        <br/>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import router from "@/router";
import ApplicantNotificationService from "@/applicants/services/applicants.notification.service";

export default {
  name: "postulant-feedback",
  data: () => ({
    notifications: [],
    actualid:0,
    items: [],
  }),
  async created() {
    try {
      const response1 = await ApplicantNotificationService.getAll();
      this.notifications = response1.data;

      this.actualid=this.$route.params.idNotification;
    }
    catch (e)
    {
      console.error(e);
      console.log(this.notifications)
    }
  },
  methods: {
    goBack() {
      router.back()
    }
  }
}
</script>

<style scoped>
.p{
  color: #01C4FF;
  font-size: 20px;
  font-family: Roboto;
}
.letter{
  color: #6c6b6b;
  font-family: Roboto;
}
</style>