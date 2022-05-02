<template>
<v-row >
  <v-col  style="margin-left: 100px;margin-top: 30px" >
    <div class="d-flex flex-column justify-center align-center pa-4">
      <v-img width="250px" :src="require('../../core/img/LOGO.png')"></v-img>
      <p  class=" font-weight-bold " style="font-size: 50px; color: #01C4FF">EasyJob</p>
    </div>
    <v-row justify="center">
      <v-col cols="8">
        <v-text-field v-model="this.email" label="E-mail" outlined clearable></v-text-field>
        <v-text-field  v-model="this.password" label="Password" outlined clearable></v-text-field>
      </v-col>
    </v-row>

    <v-row justify="center" align-content="center">
        <v-btn class="primary" @click="Login(this.email,this.password)">Ingresar</v-btn>
    </v-row>
    <v-row justify="center" align-content="center" style="margin-top: 20px">
      <v-btn class="primary" style="background-color: #02EDB3">Registrarse</v-btn>
    </v-row>
  </v-col>

  <v-col style="margin-top: 130px">

    <v-img class="mx-auto" width="590px" v-bind:src="require('../../core/img/IMG.png')" alt="premium"></v-img>
  </v-col>
</v-row>
</template>

<script>
import postulantsService from "@/postulants/services/postulants.service";
import applicantsService from "@/applicants/services/applicants.service";

export default {
  name: "login-account",
  data: () => ({
    postulant:[],
    applicant:[],
    email:"",
    password: "",
    idUser:0,
  }),
  methods: {
     Login(email,password){
        postulantsService.getByEmail(email)
           .then(response => {
             this.postulant = response.data;
             console.log(response.data)
           })
           .catch(e => {
             this.errors.push(e.message);
           });

        applicantsService.getByEmail(email).
            then(response=>{
              this.applicant=response.data;
          console.log(response.data)
        }).catch(e => {
              this.errors.push(e.message);
            });


       if(this.postulant[0]!=null){
         if(this.postulant[0].password==password){
           this.$router.push('/postulants/'+this.postulant[0].id+'/notifications');
         }
       }
       if(this.applicant[0]!=null){
         if(this.applicant[0].password==password){
           this.$router.push('/applicants/'+this.applicant[0].id+'/announcements');
         }
       }
    }
  }

}
</script>

<style scoped>
.primary{
  background-color: #01C4FF;
  color: white;
  font-family: Roboto;
  font-size: 25px;
}
</style>