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
        <v-form v-model="validPersonalInformation" lazy-validation ref="personalInformationForm" v-if="step === 'PersonalInformation'" class="mb-4 mt-8">
          <v-text-field :rules="nameRules" hide-details label="Name" v-model="name" placeholder="Enter your name" outlined clearable></v-text-field>
          <v-text-field :rules="lastnameRules" id="lastname" hide-details label="Last Name" v-model="lastname" placeholder="Enter your last name" outlined clearable></v-text-field>
          <v-text-field :rules="descriptionRules" id="description" hide-details label="Description" v-model="description" placeholder="Enter a description about you" outlined clearable></v-text-field>
          <v-select
              :rules="userTypeRules"
              class="mt-4"
              id="userType"
              v-model="userType"
              :items="userTypes"
              :readonly="true"
              label="I am..."
              outlined
              hide-details
          ></v-select>
          <v-text-field v-if="userType === 'Postulant'" :rules="gitHubUserRules" hide-details label="GitHub User" v-model="gitHubUser" placeholder="Enter your GitHub User" outlined clearable></v-text-field>
          <v-text-field v-else-if="userType === 'Applicant'" hide-details label="Position" v-model="position" placeholder="Example: Human Staff Recruiter" outlined clearable></v-text-field>
          <v-divider></v-divider>
          <div class="d-flex justify-space-between pa-4">
            <v-btn @click="goToLogIn" class="w-50 mr-1" color="primary" text>Come Back</v-btn>
            <v-btn @click="nextStep" class="w-50 ml-1 text-white" color="info">Next</v-btn>
          </div>
        </v-form>
        <v-form v-model="validCredentials" ref="credentialsForm" v-else-if="step === 'Credentials'" class="mb-4 mt-8">
          <div class="d-flex mb-4">
            <div class="w-50">
              <v-img v-if="photo" :src="photo"></v-img>
              <v-img v-else src="https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"></v-img>
            </div>
            <div class="w-50 d-flex flex-column justify-center">
              <v-text-field :rules="photoRules" id="photo" hide-details label="Photo" v-model="photo" placeholder="Enter a photo" outlined clearable></v-text-field>
              <v-text-field :rules="emailRules" id="email" hide-details label="Email" v-model="email" placeholder="Enter a email" outlined clearable></v-text-field>
              <v-text-field :rules="passwordRules" hide-details label="Password" v-model="password" :prepend-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" @click:prepend-inner="show1 = !show1" placeholder="Enter a password"></v-text-field>
              <v-text-field :rules="passwordMatch" hide-details label="Password Repeat" v-model="passwordRepeat" :prepend-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'" @click:prepend-inner="show2 = !show2" placeholder="Enter a password again" outlined></v-text-field>
            </div>
          </div>
          <div>
            <v-divider></v-divider>
            <div class="d-flex justify-space-between pa-4">
              <v-btn @click="backStep" class="w-50 mr-1" color="primary" text>Come Back</v-btn>
              <v-btn @click="complete" class="w-50 ml-1 text-white" color="info">Next</v-btn>
            </div>
          </div>
        </v-form>
        <div v-else-if="step === 'Confirm'" class="mb-4 mt-8">
          <p>Dear {{name}}, your account has been created satisfactorily!</p>
          <p class="mb-8">Email: {{email}}</p>
          <v-divider></v-divider>
          <div class="d-flex justify-space-between pa-4">
            <v-btn @click="goToSignUp" class="w-50 mr-1" color="primary" text>Accept</v-btn>
            <v-btn @click="goToLogIn" class="w-50 ml-1 text-white" color="info">Log In</v-btn>
          </div>
        </div>
        <div v-else-if="step === 'Errors'" class="mb-4 mt-8">
          <p>An error occurred while trying to create the account!</p>
          <p>Errors:</p>
          <div v-for="(error, index) in errors" v-bind:key="index">
            <p>{{error}}</p>
          </div>
          <p>Communicate with the area in charge.</p>
          <v-divider></v-divider>
          <div class="d-flex justify-space-between pa-4">
            <v-btn @click="goToSignUp" class="w-50 mr-1" color="primary" text>Accept</v-btn>
            <v-btn @click="nextStep" class="w-50 ml-1 text-white" color="info">Try Again</v-btn>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import router from "@/router";
export default {
  name: "sign-up-account",
  data() {
    return {
      show1: false,
      show2: false,
      validPersonalInformation: true,
      validCredentials: true,
      nameRules: [v => !!v || 'Name is required', v => (v && v.length <= 50) || 'Name must be less than 50 characters',],
      lastnameRules: [v => !!v || 'Last Name is required', v => (v && v.length <= 50) || 'Last Name must be less than 50 characters',],
      descriptionRules: [v => !!v || 'Description is required', v => (v && v.length <= 50) || 'Description must be less than 100 characters',],
      userTypeRules: [v => !!v || 'Item is required'],
      gitHubUserRules: [v => !!v || 'GitHub User is required', v => (v && v.length <= 50) || 'GitHub User must be less than 50 characters',],
      positionRules: [v => !!v || 'Position is required', v => (v && v.length <= 50) || 'Position be less than 50 characters',],
      photoRules: [v => !!v || 'Photo is required',],
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
      passwordRules: [v => !!v || 'Password is required', v => (v && v.length <= 25) || 'Name must be less than 25 characters',],
      passwordMatch: [v => !!v || "Password Repeat is required", v => (v === this.password) || "Password and Password Repeat must be match"],
      step: "PersonalInformation",
      userTypes: ["Postulant", "Applicant"],
      userType: null,
      isEditing: false,
      name: null,
      lastname: "",
      description: "",
      gitHubUser: "",
      position: "",
      photo: "",
      email: "",
      password: "",
      passwordRepeat: "",
      errors: []
    };
  },
  methods: {
    reset() {
      this.$refs.personalInformationForm.reset();
      this.$refs.credentialsForm.reset();
    },
    goToLogIn() {
      router.push({name: "login-account"});
    },
    goToSignUp() {
      this.step = "PersonalInformation";
    },
    nextStep() {
      this.$refs.personalInformationForm.validate();
      if (this.validPersonalInformation) {
        this.step = "Credentials";
      }
    },
    backStep() {
      this.step = "PersonalInformation";
    },
    complete() {
      this.$refs.credentialsForm.validate();
      if (this.validCredentials) {
        const user = {
          name: this.name,
          lastname: this.lastname,
          userType: this.userType,
          description: this.description,
          email: this.email,
          password: this.password,
          photo: this.photo
        };
        if (this.userType === "Postulant") user.gitHubUser = this.gitHubUser;
        else user.position = this.position;

        this.$store.dispatch("auth/register", user).then(
            (response) => {
              console.log(response.data);
              this.step = "Confirm";
            },
            (error) => {
              console.log(error.message());
              this.step = "Error";
            });

        /*
        AuthenticateService.signUp(user)
          .then(response => {
            console.log(response.data);
            this.step = "Confirm";
          })
          .catch(error => {
            console.log(error.message());
            this.step = "Error";
          })*/
      }
    }
  }
}
</script>

<style scoped>

</style>
