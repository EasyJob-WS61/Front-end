<template>
  <row class="ma-0 pa-0 d-flex">
    <v-col cols="4" class="ma-0 pa-0">
      <applicant-navigation></applicant-navigation>
    </v-col>
    <v-col cols="8" class="ma-0 pa-4 background max-wight-100">
      <a @click="backToAnnouncement">
        <v-img width="40px" class="pb-8" :src="require('../../core/img/flecha-izquierda.png')"></v-img>
      </a>
      <v-card width="100%" class="px-8 py-4">
        <v-card-title class="font-weight-bold primary pl-0">Titulo</v-card-title>
        <v-text-field label="Ingrese el titulo" clearable type="text" variant="contained"></v-text-field>
        <v-card-title class="font-weight-bold primary pl-0">Descripcion</v-card-title>
        <v-textarea solo name="input-7-4" label="Description"></v-textarea>
        <v-card-title class="font-weight-bold primary pl-0">Salary</v-card-title>
        <div class="d-flex">
          <v-row>
            <v-col cols="9">
              <v-text-field
                  label="Monto"
                  prefix="S/."
              ></v-text-field>
            </v-col>
            <v-col>
              <v-autocomplete
                  hide-details
                  v-model="currency"
                  :items="currencies"
                  dense
                  readonly
                  filled
                  class="pr-4"
                  label="Moneda"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </div>
        <v-spacer></v-spacer>
        <v-card-title class="font-weight-bold primary pl-0 pb-5">Categorias</v-card-title>
        <div class="d-flex align-center pb-10">
          <v-autocomplete
              hide-details
              v-model="specialtyValue"
              :items="specialtyItems"
              dense
              readonly
              filled
              class="pr-4"
              label="Specialty"
          ></v-autocomplete>
          <v-autocomplete
              hide-details
              v-model="experienceValue"
              readonly
              :items="experienceItems"
              dense
              filled
              class="pr-4"
              label="Experience"
          ></v-autocomplete>
          <v-btn x-large class="mr-4 mb-0" @click="addSpecialties">Agregar</v-btn>
        </div>
        <div>
          <v-row class="pa-1">
            <div class="v-col-4"
                 v-for="(ability, index) in abilitiesItems" v-bind:key="index">
              <div class="bg-secondary text-center text-white rounded-lg wight-90">
                <p class="font-weight-bold">{{ability.specialty}}</p>
                <p class="font-italic">{{ability.experience}}</p>
              </div>
            </div>
          </v-row>
        </div>
        <div class="d-flex justify-end">
          <v-btn flat color="secondary" size="x-large" class="text-white">Publicar</v-btn>
        </div>
      </v-card>
    </v-col>
  </row>
</template>

<script>
import ApplicantNavigation from "@/applicants/pages/applicant-navigation";
import router from "@/router";
export default {
  name: "applicant-announcement-add",
  components: {ApplicantNavigation},
  data: () => ({
    abilitiesItems: [],
    specialtyItems: [
        "Programacion Web", "Front-end development", "Back-end development", "Python Programmer", "Angular Development"
    ],
    experienceItems: [
        "Junior", "Senior", "Basic", "Advanced", "Intermediate", "Full stack"
    ],
    specialtyValue: null,
    experienceValue: null,
    maxItems: 5,
    currencies: ["PEN", "USD", "RBL"],
    currency: "PEN",
    idUser: null

  }),
  methods: {
    addSpecialties() {
      let ability = {
        specialty: this.specialtyValue,
        experience: this.experienceValue
      };
      this.abilitiesItems.push(ability);
      this.specialtyValue = '';
      this.experienceValue = '';
    },
    backToAnnouncement() {
      router.push({ name: 'applicant-announcement', params: {idUser: this.$route.params.idUser} })
    },
  },
  mounted() {}
}
</script>

<style scoped>
.background {
  background-image: url("../../core/img/BACKGROUND.png");
  background-size: cover;
}
.bg-secondary{
  background-color: #02EDB3;
}
.wight-90 {
  width: 90%;
}
.wight-100 {
  width: 100%
}
.max-wight-100 {
  min-height: 100vh;
  height: 100vh;
  box-sizing: border-box;
  overflow-x:hidden;
  overflow-y:initial;
  scrollbar-wight: none;
}
::-webkit-scrollbar {
  display: none;
}
.btn-delete {
  background-color: #02EDB3;
  color: white;
}
.btn-delete:hover {
  background-color: #FF5A5A;
}
.primary {
  color: #01C4FF;
}
</style>
