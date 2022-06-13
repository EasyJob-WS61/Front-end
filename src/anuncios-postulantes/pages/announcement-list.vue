<template>
  <v-row>
    <v-card
        v-for="announcement in announcements" :key="announcement.id"
        v-on:click="changePage(announcement.id)"
        class="mb-4 w-100 px-8 py-8 d-flex">
      <div class="mr-4">
        <v-img cover="true" width="70px" :src="announcement.photoEnterprise"></v-img>
      </div>
      <div>
        <p>{{announcement.place}}</p>
        <h2>{{announcement.title}}</h2>
        <p>{{announcement.period}}</p>
        <p>Publicado {{announcement.date}}</p>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import AnnouncesService from "../services/announcement.service";
import EnterpriseService from "@/anuncios-postulantes/services/enterprise.service";
export default {
  name: "postulant-announcement",
  data: () => ({
    rules: [(value) => !!value || "Required."],
    announcements: [],
    errors: []
  }),
  methods: {
    changePage(id) {
      this.$router.push(`/postulants/1/announcements/${id}`);
    },
    async getAnnouncements() {
      await AnnouncesService.getAll()
        .then((response) => {
          response.data.forEach(async (announcement, index) => {
            await EnterpriseService.getByApplicantId(announcement.applicantId)
              .then(async resp => {
                response.data.at(index).photoEnterprise = await resp.data.at(0).photo;
                this.announcements.push(response.data.at(index));
              })
          });

          console.log(this.announcements);
        })
          .catch(error => {
            this.errors.push(error);
          })
    }
  },
  async mounted() {
    await this.getAnnouncements();
  },
};
</script>

<style scoped>
.containter-anuncio h2 {
  color: #01c4ff;
}
.containter-anuncio p {
  color: #ffffff;
}
</style>
