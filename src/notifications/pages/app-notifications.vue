<template>
  <v-menu activator="#notification-activator">
    <v-list max-width="350px" class="pa-6">
      <div v-for="notification in notifications" :key="notification" class="d-flex flex-column">
        <div class="py-3">
          <div v-if="notification.state==='accepted'" class="success">{{notification.title}}</div>
          <div v-else-if="notification.state==='denied'" class="error2">{{notification.title}}</div>
          <div v-else-if="notification.state==='pending'" class="info">{{notification.title}}</div>
          <div>{{notification.description}}</div>
        </div>
        <v-divider></v-divider>
      </div>
      <v-btn block="true" color="info" flat="true">Ver más</v-btn>
    </v-list>
  </v-menu>
</template>

<script>
import NotificationService from "@/notifications/services/notification.service";
export default {
  name: "postulant-notification",
  components: {},
  data: () => ({
    notifications: [],
    items: [],
    errors: [],
    idUser:0,
  }),
  async created() {
    this.idUser = this.$route.params.idUser;
    const notificationResponse = await this.getAnnouncement(this.idUser);
    this.notifications = await notificationResponse.data;
  },
  methods: {
    async getAnnouncement(idUser) {
      return await NotificationService.getByCustomerIdAndTypeNotification(idUser)
        .then(response => {
          return response;
        })
        .catch(error => {
          this.errors.push(error);
        })
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
.success {
  color: #02EDB3;
}
.error2 {
  color: #FF5A5A;
}
.info {
  color: #01C4FF
}
</style>
