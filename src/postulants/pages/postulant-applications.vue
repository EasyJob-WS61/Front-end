<template>
  <v-container>
    <v-row class="mt-2">
      <v-col cols="12" class="v-col-md-9">
        <h1>Mis Postulaciones</h1>
        <v-card class="mt-8 v-col-12">
          <v-row>
            <v-img class="v-col-12 v-col-md-4" height="200" cover="true" src="https://www.gloria.com.pe/images/lineaTiempo/logo.jpg"></v-img>
            <v-card-content class="v-col-12 v-col-md-8 d-flex align-center">
              <div>
                <v-chip
                    class="ma-2 d-md-none"
                    color="pink"
                    label
                    text-color="white"
                >
                  <v-icon start icon="mdi-label"></v-icon>
                  Denied
                </v-chip>
                <div class="w-100 d-flex">
                  <v-card-title class="mr-2">Se necesita programador Back-end</v-card-title>
                  <v-chip
                      class="ma-2 d-none d-md-flex"
                      color="pink"
                      label
                      text-color="white"
                  >
                    <v-icon start icon="mdi-label"></v-icon>
                    Denied
                  </v-chip>
                </div>
                <v-card-subtitle>Gloria SAC</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="success">Ver detalle</v-btn>
                </v-card-actions>
              </div>
            </v-card-content>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-none d-md-flex v-col-md-3">
        <postulant-premium class="position-fixed"></postulant-premium>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostulantPremium from "@/postulants/pages/postulant-premium";
export default {
  name: "postulant-applications",
  components: { PostulantPremium },
  data() {
    return {
      userId: null,
    }
  }
}
</script>

<style scoped>

</style>
