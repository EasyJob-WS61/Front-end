<template>
  <row class="ma-0 pa-0 d-flex">
    <v-col cols="4" class="ma-0 pa-0">
      <applicant-navigation></applicant-navigation>
    </v-col>
    <v-col cols="8" class="ma-0 pa-4 background max-wight-100">
      <v-card class="py-2 mb-4 ">
        <p class="font-weight-bold text-h5 text-uppercase text-center wight-100 primary">Mis Anuncios</p>
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
    </v-col>
  </row>
</template>

<script>
import AnnouncementService from "@/applicants/services/applicants.announcement.service";
import router from "@/router";
import ApplicantNavigation from "@/applicants/pages/applicant-navigation";
export default {
  name: "applicant-announcement",
  components: {ApplicantNavigation},
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
.background {
  background-image: url("../../core/img/BACKGROUND.png");
  background-size: cover;
}
.bg-secondary{
  background-color: #02EDB3;
}
.wight-100 {
  width: 100%
}
.max-wight-100 {
  min-height: 100vh;
  height: 100vh;
  box-sizing: border-box;
  overflow-x:hidden;
  overflow-y:initial;
  scrollbar-wight: none;
}
::-webkit-scrollbar {
  display: none;
}
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
