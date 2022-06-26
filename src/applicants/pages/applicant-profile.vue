<template>
  <v-container>
    <v-row  style="margin-top: 30px; justify-content: center" class="ma-2 pa-0" >
      <v-col cols="12">
        <v-card class="my-4">
          <v-row>
            <v-col cols="8" class="d-flex align-content-center">
              <v-card-title class="p font-weight-bold text-left wight-100"> {{this.applicant.name}} {{this.applicant.lastname}}</v-card-title>
              <v-btn icon="mdi-pen" color="warning" size="small" class="rounded-lg btn-info" @click.stop="dialog=true">Editar</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" class="v-col-12">
        <v-card class="pa-4 d-flex flex-column align-content-space-between">
          <v-row>
            <v-img class="v-col-md-4" cover="true" :src="this.applicant.photo"></v-img>
            <v-card-content class="v-col-md-8 pa-6 letter font-weight-medium d-flex flex-column justify-center">
              <p class="font-weight-bold">Descripción</p>
              <p>{{this.applicant.description}}</p>
              <p class="font-weight-bold">Email</p>
              <p>{{this.applicant.email}}</p>
            </v-card-content>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="px-2 py-4">
          <v-card-title>Mi empresa</v-card-title>
          <v-card-content class="text-center">
            <p>¡No se encontro una empresa registrada, <a href="">click aqui</a> para registrar!</p>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
        transition="dialog-bottom-transition"
        v-model="dialog"
        persistent>
      <v-card max-width="600px" width="90vw" height="auto" max-height="900px">
        <div class="w-100">
          <v-toolbar color="warning" class="mb-4">
            <v-card-title class="text-white">Editar Perfil</v-card-title>
          </v-toolbar>
        </div>
        <v-col cols="12" class="px-10 pt-8">
          <v-row>
            <v-text-field
                label="Nombres"
                :rules="rules"
                hide-details="auto"
                v-model="nombre"
            ></v-text-field>
          </v-row> <br><br>
          <v-row>
            <v-text-field
                label="Descripción"
                :rules="rules"
                hide-details="auto"
                v-model="description"
            ></v-text-field>
          </v-row><br><br>
          <v-row>
            <v-text-field
                label="Photo link"
                :rules="rules"
                hide-details="auto"
                v-model="photo"
            ></v-text-field>
          </v-row><br><br>
          <v-row>
            <v-text-field
                label="Email"
                :rules="rules"
                hide-details="auto"
                v-model="emal"
            ></v-text-field>
          </v-row><br><br>
        </v-col>
        <v-card-actions class="d-flex justify-end px-10 py-4">
          <v-btn color="error" type="text" @click="dialog=false">Cancelar</v-btn>
          <v-btn color="info" @click="guardar(), dialog=false">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import applicantsService from "@/applicants/services/applicants.service";

export default {
  name: "applicant-profile",
  data: () => ({
    actualid: 0,
    dialog: false,
    applicant: {},
    nuevo:{},
    nombre: "",
    description: "",
    photo:"",
    website:"",
    emal:"",
    password:""
  }),
  async created() {
    try {
      this.actualid=this.$route.params.idUser;
      const response2 = await applicantsService.getById(this.actualid);
      this.applicant = response2.data;
      this.nombre= this.applicant.name;
      this.description= this.applicant.description;
      this.photo=this.applicant.photo;
      this.website=this.applicant.website;
      this.emal=this.applicant.email;
      this.password=this.applicant.password;
    }
    catch (e)
    {
      console.error(e);
      console.log(this.applicant)
    }
  },
  methods: {
    guardar() {
      this.nuevo.name=this.nombre;
      this.nuevo.description=this.description;
      this.nuevo.ruc=this.applicant.ruc;
      this.nuevo.photo=this.photo;
      this.nuevo.website=this.website;
      this.nuevo.email=this.emal;
      this.nuevo.password=this.password;
      applicantsService.update(this.actualid,this.nuevo)
    }
  }
}
</script>

<style scoped>

</style>
