<template>
  <v-container>
    <v-row  style="margin-top: 30px; justify-content: center" class="ma-2 pa-0" >
      <v-col>
        <v-card class="my-4">
          <v-row>
            <v-col cols="8">
              <v-card-title class="p font-weight-bold text-h5 text-uppercase text-left wight-100"> {{this.applicant.name}}</v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="mt-8 pa-2">
          <v-card-title class="p font-weight-bold text-h5 text-uppercase text-left wight-100"> ¿Quiénes somos?</v-card-title>
          <v-card-content class="letter font-weight-medium">
            <v-row>
              <v-col cols="8">
                Descripción: {{this.applicant.description}} <br>
                RUC: {{this.applicant.ruc}} <br>
                Website: {{this.applicant.website}} <br>
                Email: {{this.applicant.email}} <br>
              </v-col>
              <v-col cols="4">
                <v-img class="mx-auto" width="260px" :src="this.applicant.photo"></v-img>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-btn class="rounded-lg btn-info" @click.stop="dialog=true">Editar</v-btn>
            </v-row>
          </v-card-content>
          <br/>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
        transition="dialog-bottom-transition"
        v-model="dialog"
        persistent>
      <v-card max-width="600px" width="90vw" height="auto" max-height="900px" class="px-4 py-8 d-flex flex-column justify-center align-center">
        <v-col cols="12">
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
                label="Website"
                :rules="rules"
                hide-details="auto"
                v-model="website"
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
          <v-row>
            <v-text-field
                label="Password"
                :rules="rules"
                hide-details="auto"
                v-model="password"
            ></v-text-field>
          </v-row>
        </v-col>
        <v-card-actions>
          <v-btn color="error" @click="dialog=false">Cancelar</v-btn>
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
