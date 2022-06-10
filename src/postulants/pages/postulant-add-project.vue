<template>
  <v-card max-width="600px" width="90vw" height="100vh" max-height="900px" class="overflow-y-auto">
    <div>
      <v-toolbar color="success">
        <v-card-title class="text-white">Agregar Proyecto</v-card-title>
      </v-toolbar>
    </div>
    <v-img class="mt-4" cover="true" v-if="this.photo" height="200px" :src="photo"></v-img>
    <v-img v-else height="200px" src="https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"></v-img>
    <div class="px-4 pb-2">
      <v-text-field
          hide-details
          class="w-100 mt-4 mb-2"
          color="orange orange-darken-4"
          label="Photo"
          placeholder="Enter the photo"
          v-model="photo"
      ></v-text-field>
      <v-autocomplete
          class="mt-4"
          v-model="repository"
          :items="repositories"
          item-text="name"
          item-value="name"
          dense
          filled
          label="Repositories"
          hide-details
      ></v-autocomplete>
      <v-text-field
          hide-details
          class="w-100 mt-4 mb-2"
          color="orange orange-darken-4"
          label="Title"
          placeholder="Enter the title"
          v-model="title"
      ></v-text-field>
      <v-text-field
          hide-details
          class="w-100 mt-4 mb-2"
          color="orange orange-darken-4"
          label="Description"
          placeholder="Enter the description"
          v-model="description"
      ></v-text-field>
      <v-divider></v-divider>
      <v-card-actions class="justify-end">
        <v-btn color="error" text @click="closeAddProject(false)">
          Cerrar
        </v-btn>
        <v-btn color="info" text @click="addProject">
          Guardar
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import ProjectsService from "../services/projects.service";
import GithubService from "@/postulants/services/github.service";
export default {
  name: "add-project",
  data() {
    return {
      username: "hbcordova",
      title: "",
      description: "",
      gitHubLink: "",
      photo: null,
      repository: null,
      repositories: [],
      repositoriesUrl: [],
      errors: []
    };
  },
  methods: {
    closeAddProject(change) {
      this.$emit("close-add-project", change);
    },
    async addProject() {
      const urlPosition = this.repositories.indexOf(this.repository);
      const url = this.repositoriesUrl.at(urlPosition);
      const project = {
        postulant_id: this.$route.params.idUser,
        title: this.title,
        description: this.description,
        url: url,
        photo: this.photo
      }
      await ProjectsService.addProject(project)
          .then(response => {
            console.log(response.data)
            this.closeAddProject(true);
          })
          .catch(error => {
            console.log(error.message())
          })
    },
    async getAllRepositories() {
      await GithubService.getRepositories(this.username)
          .then(response => {
            response.data.forEach(repo => {
              this.repositories.push(repo.name);
              this.repositoriesUrl.push(repo.html_url);
            });
          })
          .catch(error => {
            this.errors.push(error.message());
          })
    },
    async addEvidence() {
      if (this.evidenceImageLink != "" && this.evidenceDescription != "") {
        const response = await ProjectsService.addEvidence({
          project_id: this.currentProyect,
          title: this.evidenceDescription,
          description: this.evidenceDescription,
          photo: this.evidenceImageLink,
        });
        console.log(response);
        this.evidenceImageLink ='';
          this.evidenceDescription = '';
          this.addEvidenciasDialog = false;
      } else {
        alert("Todos los campos son obligatorios");
      }
    },
  },
  mounted() {
    this.getAllRepositories();
  },
};
</script>

<style scoped>
.allcontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: auto;
}

.img-project {
  max-width: inherit;
  margin-top: 1pc;
  height: inherit;
}

.input-title {
  border: 1px solid white;
  border-radius: 5px;
  min-width: 40pc;
  height: 2.5pc;
  max-width: 40pc;
  color: white;
  padding: 1pc;
}
.text-area-box {
  display: flex;
  flex-direction: column;
}
textarea {
  border: 1px solid white;
  border-radius: 5px;
  width: inherit;
  color: white;
  padding: 1pc;
}
.save-box {
  margin-bottom: 1pc;
  display: flex;
  align-items: center;
  width: 100vw;
  padding-right: 10pc;
  justify-content: flex-end;
}
</style>
