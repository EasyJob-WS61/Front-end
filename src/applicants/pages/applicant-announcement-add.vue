<template>
  <v-container>
    <v-card width="100%" class="px-8 py-4">
      <v-card-title class="font-weight-bold primary pl-0 pb-4 text-center">Agregar Anuncio</v-card-title>
      <v-card-subtitle class="font-weight-bold primary pl-0 pb-4">Titulo</v-card-subtitle>
      <v-text-field label="Ingrese el titulo" clearable type="text" variant="contained"></v-text-field>
      <v-card-subtitle class="font-weight-bold primary pl-0 pb-4">Descripcion</v-card-subtitle>
      <v-textarea solo name="input-7-4" label="Description"></v-textarea>
      <v-card-subtitle class="font-weight-bold primary pl-0 pb-4">Salary</v-card-subtitle>
      <div class="d-flex">
        <v-text-field
            label="Monto"
            prefix="S/."
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <v-card-subtitle class="font-weight-bold primary pl-0 pb-4">Categorias</v-card-subtitle>
      <v-row class="my-8">
        <v-col cols="12" class="v-col-sm-5">
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
        </v-col>
        <v-col cols="12" class="v-col-sm-5">
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
        </v-col>
        <v-col cols="12" class="v-col-sm-2 d-flex justify-center align-center">
          <v-btn width="100%" x-large class="mr-4 mb-0" @click="addSpecialties">Agregar</v-btn>
        </v-col>
        <v-col cols="12">
          <div class="v-col-4"
               v-for="(ability, index) in abilitiesItems" v-bind:key="index">
            <div class="bg-secondary text-center text-white rounded-lg wight-90">
              <p class="font-weight-bold">{{ability.specialty}}</p>
              <p class="font-italic">{{ability.experience}}</p>
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="d-flex justify-end">
        <v-btn flat color="primary" size="x-large" class="text-white">Publicar</v-btn>
      </div>
    </v-card>
  </v-container>

</template>

<script>
import router from "@/router";
export default {
  name: "applicant-announcement-add",
  components: {},
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
