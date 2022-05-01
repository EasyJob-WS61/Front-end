<template>
  <v-container class="background">
    <div class="ma-0 pa-0 d-flex">
      <v-col cols="12" class="ma-0 pa-4  max-wight-100">
        <v-card width="100%" class="px-8 py-4">
          <p class="font-weight-bold text-h5 text-uppercase text-center wight-100 primary">Mi Anuncio</p>
          <v-card-subtitle class="font-weight-bold pl-0 primary">Programador de Aplicaciones Moviles</v-card-subtitle>
          <v-card-content class="pl-0">
            <p class="font-weight-bold">Descripcion:</p>
            <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut autem blanditiis consectetur doloremque eum fuga incidunt, laborum molestiae mollitia non odit pariatur, qui quisquam sint soluta tempora vitae voluptate.</p>
            <v-spacer></v-spacer>
            <p class="font-weight-bold">Se requieren las siguientes conocimientos: </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti deserunt esse facilis ipsam minus pariatur perferendis praesentium quae ratione reprehenderit sapiente similique sit ullam unde, vel voluptate. Animi, fugiat.</p>
          </v-card-content>
        </v-card>
        <v-card width="100%" height="150px" class="px-8 py-4 my-4">
          <v-card-title class="text-center font-weight-bold primary pl-0">Postulantes</v-card-title>
          <div v-if="this.postulants.length === 0" class="d-flex justify-center align-center">
            <p class="font-weight-bold primary">No hay postulantes</p>
          </div>
          <div v-else>

          </div>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  name: "applicant-announcement-detail",
  components: {},
  data: () => ({
    postulants: [],
  }),
  methods: {
    backToAnnouncement() {
      router.push({ name: 'applicant-announcement', params: {idUser: this.$route.params.idUser} })
    },
  }
}
</script>

<style scoped>
.background {
  background-image: url("../../core/img/BACKGROUND.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.max-wight-100 {
  min-height: 100vh;
  height: 100vh;
  box-sizing: border-box;
}
.primary {
  color: #01C4FF;
}
</style>
