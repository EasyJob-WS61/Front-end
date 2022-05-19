<template>
  <row class="ma-0 pa-0 d-flex">

    <v-col cols="4" class="ma-0 pa-0">
      <postulant-navegation></postulant-navegation>
    </v-col>

    <v-col cols="6" class="ma-0 pa-4 max-wight-100">
      <v-row class="justify-top">
      <v-card class="py-2 mb-4 ">
        <p class="font-weight-bold text-h5 text-uppercase text-center wight-100 primary">vfdfv</p>
      </v-card>
      </v-row>

      <v-row class="justify-center" style="height: 68%">

      </v-row>

        <v-row class="justify-end">
          <v-col>
            <v-textarea
                solo
                name="input-7-4"
                label="Solo textarea"
            ></v-textarea>
          </v-col>
        </v-row>
    </v-col>

    <v-col cols="8" class="ma-0 pa-0 elevation-2 max-wight-100">
      <v-card v-for="applicant in applicants" :key="applicant" class="py-2 mb-4 ">
        <v-row>
          <v-col >
            <v-btn flat style="font-family: Roboto" class="primary">{{applicant.name}} {{applicant.lastname}}</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </row>
</template>

<script>
import PostulantNavegation from "@/postulants/pages/postulant-navegation";
import ApplicantsService from "@/applicants/services/applicants.service";
import PostulantsService from "@/postulants/services/postulants.service";
export default {
  name: "postulant-chat",
  components: {PostulantNavegation},
  data: () => ({
    applicants: [],
    postulants:[],
    items: [],
  }),
  async created() {
    try {
      const response1 = await ApplicantsService.getAll();
      this.applicants = response1.data;

      const response2 = await PostulantsService.getAll();
      this.postulants = response2.data
    }
    catch (e)
    {
      console.error(e);
      console.log(this.applicants)
      console.log(this.postulants)
    }
  }
}
</script>

<style scoped>
.primary {
  color: #01C4FF;
  font-size: 25px;
  font-family: Roboto;
  elevation: 0;
}
</style>