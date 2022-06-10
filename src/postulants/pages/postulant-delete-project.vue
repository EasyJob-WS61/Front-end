<template>
  <v-card max-width="600px" width="90vw" max-height="900px">
    <v-toolbar color="error">
      <v-toolbar-title class="text-white">Delete Project</v-toolbar-title>
    </v-toolbar>
    <v-card-subtitle class="pa-4">¿Esta seguro de eliminar <span class="error ml-1"> {{projectName}}</span>?</v-card-subtitle>
    <v-card-actions class="justify-end">
      <v-btn text @click="closeDeleteProject(false)">Cerrar</v-btn>
      <v-btn color="error" text @click="deleteProject">Eliminar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import PostulantProfileService from "@/postulants/services/postulant.profile.service";
export default {
  name: "postulant-delete-profile",
  props: { projectId: Number, projectName: String },
  methods: {
    closeDeleteProject(change) {
      this.$emit("close-delete-project", change);
    },
    async deleteProject() {
      PostulantProfileService.deleteProjectByPostulant(this.projectId)
          .then((response) => {
            this.closeDeleteProject(true);
            console.log(response.data);
          })
          .catch(error => {
            console.log(error.message());
          })
    }
  }
}
</script>

<style>
.error {
  color: #FF5A5A;
}
</style>
