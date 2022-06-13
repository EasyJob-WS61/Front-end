<template>
  <v-container class="position-relative">
    <div>
      <v-card class="py-2 mb-4">
        <p class="font-weight-bold text-h5 text-uppercase text-center primary">Mis Anuncios</p>
      </v-card>
      <v-card v-for="(announcement, key) in announcements" v-bind:key="key" class="pa-4 mb-3">
        <v-row>
          <v-col cols="2" class="d-flex justify-center align-center">
            <v-img width="100px" :src="enterprisePhoto"></v-img>
          </v-col>
          <v-col cols="10" class="d-flex flex-column justify-center">
            <div class="d-flex justify-end">
              <v-card-subtitle>{{announcement.date}}</v-card-subtitle>
            </div>
            <a @click="goToAnnouncementDetail(announcement.id)">
              <v-card-title class="mb-0">{{announcement.title}}</v-card-title>
            </a>
            <v-card-subtitle>{{announcement.description}}</v-card-subtitle>
            <v-card-subtitle>S/. {{announcement.salary}}</v-card-subtitle>
            <v-card-actions class="d-flex">
              <v-btn color="warning"
                     @click="this.dialogAnnouncementEdit = !this.dialogAnnouncementEdit; this.selectAnnouncementId = announcement.id"
                     class="rounded-lg">
                <v-icon left class="pr-2">mdi-pencil</v-icon>Editar
              </v-btn>
              <v-btn color="error" @click="processDeleted(key)" class="rounded-lg">
                <v-icon left class="pr-2">mdi-delete</v-icon>Eliminar
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
      <template>
        <v-dialog
            transition="dialog-bottom-transition"
            v-model="confirmDeleted"
            persistent>
          <v-card max-width="600px" width="90vw" height="auto" max-height="900px" class="px-4 py-8 d-flex flex-column justify-center align-center">
            <div class="">
              <v-card-subtitle>¿Esta seguro que desea eliminar
                <span class="error pl-1">{{announcementSelected.title}}</span>?
              </v-card-subtitle>
            </div>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn color="error" @click="confirmDeleted = !confirmDeleted">Cancelar</v-btn>
              <v-btn color="info" @click="deleteAnnouncement(announcementSelected.id, announcementSelected.key)">Aceptar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <!--Button add announcement -->
      <v-btn
          color="primary"
          elevation="2"
          icon
          fab
          fixed
          bottom
          right
          size="x-large"
          class="position-fixed ma-6"
          @click="goToAnnouncementAdd"
      ><v-icon size="24px" class="text-white">mdi-plus</v-icon></v-btn>

      <v-dialog
          transition="dialog-bottom-transition"
          v-model="dialogAnnouncementAdd"
          persistent>
        <applicant-announcement-add
            v-on:closeAnnouncementAdd="dialogAnnouncementAdd = !dialogAnnouncementAdd"
            v-on:create:announcements="addAnnouncement($event)"
        ></applicant-announcement-add>
      </v-dialog>

      <v-dialog
          transition="dialog-bottom-transition"
          v-model="dialogAnnouncementEdit"
          persistent>
        <applicant-announcement-edit
            v-bind:id-announcement="selectAnnouncementId"
            v-on:closeAnnouncementEdit="dialogAnnouncementEdit = !dialogAnnouncementEdit"
            v-on:update:announcements="updateAnnouncement($event)"
        ></applicant-announcement-edit>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import router from "@/router";
import AnnouncementService from "@/applicants/services/applicants.announcement.service";
import ApplicantAnnouncementAdd from "@/applicants/pages/applicant-announcement-add";
import ApplicantService from "@/applicants/services/applicants.service"
import ApplicantAnnouncementEdit from "@/applicants/pages/applicant-announcement-edit";
import EnterpriseService from "@/anuncios-postulantes/services/enterprise.service";
export default {
  name: "applicant-announcement",
  components: {ApplicantAnnouncementEdit, ApplicantAnnouncementAdd},
  data: () => ({
    announcements: [],
    selectAnnouncementId: null,
    applicant: {},
    enterprisePhoto: "",
    announcementSelected: {},
    dialogAnnouncementAdd: false,
    dialogAnnouncementEdit: false,
    confirmDeleted: false,
    errors: [],
    idUser: 1,
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
    async getEnterprisePhoto(idUser) {
      await EnterpriseService.getByApplicantId(idUser)
          .then(response => {
            this.enterprisePhoto = response.data.at(0).photo;
            console.log(this.enterprisePhoto)
          })
          .catch(error => {
            console.log(error);
          })
    },
    goToAnnouncementAdd() {
      this.dialogAnnouncementAdd = !this.dialogAnnouncementAdd;
    },
    goToAnnouncementDetail(id) {
      router.push({ name: 'applicant-announcement-detail', params: {idUser: this.$route.params.idUser, id: id}})
    },
    async deleteAnnouncement(id, key) {
      console.log(key);
      this.announcements.splice(key, 1);
      this.confirmDeleted =  !this.confirmDeleted;
      await AnnouncementService.delete(id)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            this.errors.push(e.message);
          });
    },
    async getApplicant(id) {
      await ApplicantService.getById(id)
          .then(response => {
            this.applicant = response.data;
          })
          .catch(error => {
            this.errors.push(error);
          });
    },
    addAnnouncement($event) {
      this.announcements.push($event);
    },
    updateAnnouncement($event) {
      this.announcements.forEach(announcement => {
        if (announcement.id === $event.id)  {
          announcement.title = $event.title;
          announcement.description = $event.description;
          announcement.salary = $event.salary;
          announcement.visible = $event.visible;
          announcement.ability = $event.ability;
        }
        return 0;
      })
    },
    processDeleted(key) {
      this.announcementSelected = this.announcements[key];
      this.announcementSelected.key = key;
      this.confirmDeleted = !this.confirmDeleted;
    }
  },
  mounted() {
    this.idUser = this.$route.params.idUser;
    this.getAnnouncements();
    this.getApplicant(this.idUser);
    this.getEnterprisePhoto(this.idUser);
  },
}
</script>

<style scoped>
.primary {
  color: #01C4FF;
}
.error {
  color: #FF5A5A;
}
</style>
