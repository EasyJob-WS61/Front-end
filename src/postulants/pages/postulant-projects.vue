<template>
    <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="mt-4">{{project.title}}</h1>
          </v-col>
          <v-col cols="12" class="v-col-md-6">
            <v-img cover="true" height="300" :src="project.photo" alt=""></v-img>
          </v-col>
          <v-col cols="12" class="v-col-md-6 d-flex flex-column justify-center">
            <div class="">
              <p class="mb-4">{{project.description}}</p>
              <v-btn color="info" class="text-white block" elevation="3" x-large text @click="goToGitHub()">Ver en GitHub</v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-space-between align-center">
            <h2 class="mt-4">Evidencias</h2>
            <v-btn color="success" class="text-white" text>Agregar</v-btn>
          </v-col>
          <v-col cols="12" v-if="evidences.length">
            <v-row>
              <v-col cols="12" class="v-col-md-4" v-for="evidence in evidences" :key="evidence.id">
                <v-card>
                  <v-img height="200" cover="true" :src="evidence.photo" alt=""></v-img>
                  <v-card-content>
                    <v-card-title>{{evidence.title}}</v-card-title>
                    <v-card-subtitle>{{evidence.description}}</v-card-subtitle>
                  </v-card-content>
                  <v-card-actions class="align-end">
                    <v-btn color="error" text>Eliminar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" v-else>
            <h3 class="pa-4 text-center">No se encontraron evidencias</h3>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
import projectsService from '../services/projects.service';
export default {
    name: "project-view",
    data() {
        return {
            project: {},
            evidences: []
        }
    },
    async mounted() {
        const response = await projectsService.getById(this.$route.params.idProject);
        this.project = response.data
        const evidencesResponse = await projectsService.getEvidences(this.$route.params.idProject);
        this.evidences = evidencesResponse.data;
        console.log(this.evidences);
    },
    methods:{
        goToGitHub(){
            window.open(this.project.url, '_blank');
        }
    }
};
</script>

<style scoped>
.block {
  width: 100%;
}
@media (min-width: 768px) {
  .block {
    width: initial;
  }
}
</style>
