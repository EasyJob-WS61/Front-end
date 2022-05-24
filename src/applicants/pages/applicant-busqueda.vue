<template>
  <v-container class="position-relative">
    <div>
      <v-card class="py-2 mb-4">
        <p class="font-weight-bold text-h5 text-uppercase text-center primary">Mis Anuncios</p>
      </v-card>
      <v-card v-for="postulant in postulants" :key="postulant" class="pa-4 mb-3">
        <v-row>
          <v-col cols="2" class="d-flex justify-center align-center">
            <v-img width="100px" :src="postulant.photo"></v-img>
          </v-col>
          <v-col cols="10" class="d-flex flex-column justify-center">
            <v-card-title class="mb-0">{{postulant.name}} {{postulant.lastname}}</v-card-title>
            <v-card-subtitle> {{postulant.description}}</v-card-subtitle>
            <v-card-subtitle> User Github: {{postulant.github_user}}</v-card-subtitle>
            <v-card-actions class="justify-end " >
              <v-btn class="rounded-lg btn-info" @click="goToProfile(postulant.id)" >Ver perfil</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import PostulantsService from "@/postulants/services/postulants.service";
import router from "@/router";

export default {
  name: "applicant-busqueda",
  data: () => ({
    postulants: []
  }),
  async created() {
    try {
      const response2 = await PostulantsService.getAll();
      this.postulants = response2.data;

    }
    catch (e)
    {
      console.error(e);
      console.log(this.postulants)
    }
  },
  methods: {
    goToProfile(id) {
      router.push({ name: 'applicant-announcement-detail', params: {idUser: this.$route.params.idUser, id: id}})    },
  }
}
</script>

<style scoped>
.primary {
  color: #01C4FF;
}
.btn-info {
  background-color: #02EDB3;
  color: white;
}
</style>