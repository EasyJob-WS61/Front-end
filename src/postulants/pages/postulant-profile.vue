<template>
  <v-container class="allcontainer">
    <v-row justify="center" fluid class="container">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" class="d-flex align-center">
            <h1 class="mt-2 mr-4">{{postulant.name}} {{postulant.lastname}}</h1>
            <v-btn class="rounded-0" color="warning" size="x-small" @click="dialogEditProfile = !dialogEditProfile" icon="mdi-pencil"></v-btn>
          </v-col>
          <v-col cols="12" class="v-col-md-6">
            <img style="width: inherit"
                 :src="postulant.photo"
                 alt=""
            />
          </v-col>
          <v-col cols="12" class="v-col-md-6 d-flex flex-column justify-center">
            <p>{{postulant.description}}</p>
            <p><span class="font-weight-bold">Email:</span> {{postulant.email}}</p>
          </v-col>
        </v-row>
        <v-dialog v-model="dialogEditProfile">
          <postulant-edit-profile v-bind:user-id="userId" v-on:close-edit-profile="closeEditDialog($event)"></postulant-edit-profile>
        </v-dialog>
        <v-row>
          <v-col cols="12" class="d-flex justify-space-between mt-4">
            <h2>Proyectos</h2>
            <v-btn color="success" elevation="3" @click="dialogAddProject = !dialogAddProject" x-large text>Agregar</v-btn>
          </v-col>
          <v-col cols="12" class="mt-2 v-col-md-4" v-for="project in projects" :key="project.id">
            <v-card height="350px" class="d-flex flex-column">
              <div class="h-100">
                <v-img height="200px" cover="true" :src="project.photo" alt=""></v-img>
                <v-card-title>{{project.title}}</v-card-title>
                <v-card-subtitle>{{project.description}}</v-card-subtitle>
              </div>
              <v-card-actionsn class="align-end my-2 mx-1">
                <v-btn
                    color="info"
                    class="mr-2"
                    variant="text"
                    @click="goToViewProyect(project.id)"
                >
                  Mostrar
                </v-btn>
                <v-btn
                    color="error"
                    variant="text"
                    @click="openDeleteDialog(project.title, project.id)"
                >
                  Eliminar
                </v-btn>
              </v-card-actionsn>
            </v-card>
          </v-col>
          <v-dialog v-model="dialogDeleteProject">
            <postulant-delete-project
                v-bind:project-id="selectedDelete.id"
                v-bind:project-name="selectedDelete.name"
                v-on:close-delete-project="closeDeleteProject($event)"
            ></postulant-delete-project>
          </v-dialog>
          <v-dialog v-model="dialogAddProject">
            <postulant-add-project v-bind:username="gitHubUser" v-on:close-add-project="closeAddProject($event)"></postulant-add-project>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import postulantProfileService from '../services/postulant.profile.service.js';
import postulantEditProfile from "@/postulants/pages/postulant-edit-profile.vue";
import postulantDeleteProject from "@/postulants/pages/postulant-delete-project.vue";
import postulantAddProject from "@/postulants/pages/postulant-add-project.vue";
export default {
  name: "postulant-profile",
  components: {postulantEditProfile, postulantDeleteProject, postulantAddProject},
  data(){
    return{
      userId: null,
      gitHubUser: null,
      dialogEditProfile: false,
      dialogDeleteProject: false,
      dialogAddProject: false,
      postulant:"",
      selectedDelete: { id: null, name: ""},
      projects:[],
    };
  },
  methods:{
    goToViewProyect(idProyect){
      this.$router.push({name: 'project-view', params: {idUser: this.userId, idProject: idProyect}});
    },
    closeEditDialog($event) {
      if ($event) this.loadData();
      this.dialogEditProfile = !this.dialogEditProfile;
    },
    closeDeleteProject($event) {
      if ($event) this.loadData();
      this.dialogDeleteProject = !this.dialogDeleteProject;
    },
    closeAddProject($event) {
      if ($event) this.loadData();
      this.dialogAddProject = !this.dialogAddProject;
    },
    openDeleteDialog(projectName, projectId) {
      this.selectedDelete.id = projectId;
      this.selectedDelete.name = projectName;
      this.dialogDeleteProject = !this.dialogDeleteProject;
    },
    loadData() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.userId = user.id;
      this.postulant = user;
      this.gitHubUser = user.gitHubUser;
      postulantProfileService.getProjectsByPostulant(this.userId).then(response => {
        this.projects = response.data;
      });
    }
  },
  mounted(){
    this.loadData();
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
.margin-top {
  margin-top: 2pc;
}
.align-center {
  display: flex;
  align-items: center;
}
.justify-center{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}
h1 {
  color: #01c4ff;
}
h2 {
  color: #01c4ff;
}
.img-project{
    height: 9.5pc;
    width: 9.5pc;
}
.img-project-2{
    height: 9.5pc;
    width: 15pc;
}
.container{
    width: 100%;
}
</style>
