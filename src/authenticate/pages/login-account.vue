<template>
<v-row class="ma-0">
  <v-col style="height: calc(100vh - 48px)" cols="12" class="d-flex justify-center align-center">
    <v-card width="600px" class="px-12 pt-4 pb-8">
      <div class="d-flex justify-center mt-8">
        <a class="text-decoration-none d-flex align-center">
          <div><v-img class="pr-4" width="72px" :src="require('../../core/img/LOGO.png')"></v-img></div>
          <v-toolbar-title class="text-h4 font-weight-bold text-white">EasyJob</v-toolbar-title>
        </a>
      </div>
      <v-form ref="logInForm" v-model="validLogin" class="mb-4 mt-8">
        <p v-if="errorBadRequest" class="error-color pa-2">The email and/or password do not match any account.</p>
        <p v-if="errorServer" class="error-color pa-2">There was a problem with the service, please try again later.</p>
        <v-text-field :rules="emailRules" hide-details label="Email" v-model="email" placeholder="Enter your email" outlined clearable></v-text-field>
        <v-text-field :rules="passwordRules" :prepend-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" @click:prepend-inner="show1 = !show1" hide-details label="Password" v-model="password" placeholder="Enter your password" outlined clearable></v-text-field>
      </v-form>
      <p class="mb-4 text-center">Forgot Your Password? <a class="link-color" href="">Click here.</a></p>
      <v-btn @click="handleLogin" class="w-100 mb-4 text-white" color="info">Log In</v-btn>
      <v-divider></v-divider>
      <v-btn @click="goToSignUp" class="w-100 mt-4 text-white" color="info">Sign Up</v-btn>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
//import AuthenticateService from "@/authenticate/services/authenticate.service";
import router from "@/router";
export default {
  name: "login-account",
  data: () => ({
    validLogin: true,
    emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
    passwordRules: [v => !!v || 'Password is required', v => (v && v.length <= 25) || 'Name must be less than 25 characters',],
    postulant:[],
    applicant:[],
    email:"",
    password: "",
    errorServer: false,
    errorBadRequest: false,
    idUser: null,
    show1: false,
  }),
  methods: {
    reset() {
      this.$refs.logInForm.reset();
      this.idUser = null;
      this.errorBadRequest = false;
      this.errorBadRequest = false;
    },
    handleLogin() {
      this.errorBadRequest = false;
      this.$refs.logInForm.validate();
      if (this.validLogin) {
        const logInResource = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("auth/login", logInResource).then(
            (response) => {
              const user = response.data.user;
              this.idUser = user.id;
              if (user.userType.toLowerCase() === "postulant") router.push({name: "postulant-home", params: {id: this.idUser}});
              else if (user.userType.toLowerCase() === "applicant") router.push({name: "applicant-home", params: {id: this.idUser}});
              this.$emit("LogInSuccessFull");
              this.reset();
            },
            (error) => {
              if (error.code === "ERR_NETWORK") this.errorServer = true;
              else if (error.code === "ERR_BAD_REQUEST") this.errorBadRequest = true;
            }
        );
      }
    },
    goToSignUp() {
       router.push({name: "signup-account"});
    }
  }
}
</script>
<style>
.link-color {
  color: #01C4FF;
}
.link-color:hover {
  color: #236B81;
}
.error-color {
  color: #FF5A5A;
}
</style>
