<template>
  <v-container>
    <div>
      <v-card class="py-2 mb-4">
        <p class="font-weight-bold text-h5 text-uppercase text-center primary">Mis Anuncios</p>
      </v-card>
      <v-card v-for="(announcement, key) in announcements" v-bind:key="key" class="pa-4 mb-3">
        <v-row>
          <v-col cols="10">
            <p>{{announcement.date}}</p>
            <a @click="goToAnnouncementDetail(announcement.id)">
              <v-card-title>{{announcement.title}}</v-card-title>
            </a>
            <p>{{announcement.description}}</p>
          </v-col>
          <v-col cols="2">
            <v-img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Claro.svg/1741px-Claro.svg.png"></v-img>
          </v-col>
        </v-row>
        <v-card-actions class="d-flex justify-end my-2">
          <v-btn @click="deleteAnnouncement(announcement.id)" elevation="1" class="rounded-lg btn-delete">Eliminar Anuncio</v-btn>
        </v-card-actions>
      </v-card>
      <v-btn
          color="primary"
          elevation="2"
          icon
          fab
          fixed
          bottom
          right
          size="x-large"
          class="position-absolute ma-6"
          @click="goToAnnouncementAdd"
      ><v-icon size="24px" class="text-white">mdi-plus</v-icon></v-btn>
    </div>
  </v-container>
</template>

<script>
import AnnouncementService from "@/applicants/services/applicants.announcement.service";
import router from "@/router";
export default {
  name: "applicant-announcement",
  components: {},
  data: () => ({
    announcements: [],
  }),
  methods: {
    async getAnnouncements() {
      await AnnouncementService.getByApplicantId(this.$route.params.idUser)
          .then(response => {
            this.announcements = response.data;
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e.message);
          });
    },
    goToAnnouncementAdd() {
      router.push({ name: 'applicant-announcement-add', params: { idUser: this.$route.params.idUser}})
    },
    goToAnnouncementDetail(id) {
      router.push({ name: 'applicant-announcement-detail', params: {idUser: this.$route.params.idUser, id: id} })
    },
    async deleteAnnouncement(id) {
      await AnnouncementService.delete(id)
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e.message);
          });
      await this.getAnnouncements();
    }

  },
  mounted() {
    this.getAnnouncements();
  }
}
</script>

<style scoped>
.btn-delete {
  background-color: #02EDB3;
  color: white;
}
.btn-delete:hover {
  background-color: #FF5A5A;
}
.primary {
  color: #01C4FF;
}
</style>
