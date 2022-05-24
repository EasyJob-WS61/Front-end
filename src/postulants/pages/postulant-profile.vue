<template>
  <v-container class="allcontainer">
    <v-row justify="center" fluid class="container">
      <v-col cols="12">
        <v-row>
          <v-col cols="12"><h1>{{postulant.name}} {{postulant.lastname}}</h1></v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <img style="width: inherit"
              :src="postulant.photo"
              alt=""
            />
          </v-col>
          <v-col>
            <p>
              {{postulant.description}}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="margin-top">
            <h3>Especialidades:</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="margin-top align-center">
            <h3>Contacto:</h3>
          </v-col>
          <v-col class="margin-top">
            <h5>{{postulant.email}}</h5>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="justify-end">
            <v-btn color="primary" elevation="3" @click="goToEdit()" x-large text>EDITAR</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12"><h2>Proyectos</h2></v-col>
        </v-row>
        <v-row>
            <v-col cols="2" style="cursor:pointer;"><img class="img-project" src="https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-46-512.png" alt=""  @click="goToAddProyect()" ></v-col>
            <!--Proyecto-->
            <v-col cols="3" style="cursor:pointer;"  class="justify-center align-center" v-for="project in projects" :key="project.id"   @click="goToViewProyect(project.id)">
                <v-row><img class="img-project-2" style="margin-bottom: 1pc;" :src="project.photo" alt=""></v-row>
                <v-row>
                    <v-col><h3 style="text-align:center">{{project.title}}</h3></v-col>
                </v-row>
            </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import postulantProfileService from '../services/postulant.profile.service.js';

export default {
  name: "postulant-profile",
  props: {
    id: {
      type: Number,
      required: true
    }

  },
  data(){
    return{
      postulant:"",
      projects:[],
    };
  },
  methods:{
    goToEdit(){
      this.$router.push({name: 'postulant-edit-profile', params: {id: this.$route.params.idUser}});

    },
    goToAddProyect(){
      this.$router.push({name: 'add-project', params: {id: this.$route.params.idUser}});
    },
    goToViewProyect(idProyect){
      this.$router.push({name: 'project-view', params: {id: idProyect}});

    }

  },
  mounted(){
    postulantProfileService.getPostulantProfile(parseInt(this.$route.params.idUser)).then(response => {
      this.postulant = response.data;
      console.log(this.postulant);
    });
    postulantProfileService.getProjectsByPostulant(parseInt(this.$route.params.idUser)).then(response => {
      this.projects = response.data;
      console.log(this.projects);
    });
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
