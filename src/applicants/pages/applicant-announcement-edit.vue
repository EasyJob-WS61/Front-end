<template>
  <v-card max-width="600px" width="90vw" height="100vh" max-height="900px">
    <div>
      <v-toolbar color="warning">
        <v-card-title class="text-white">Editar Anuncio</v-card-title>
      </v-toolbar>
    </div>

    <v-card-content class="pa-8">
      <v-form
          ref="form"
          lazy-validation
          v-model="validate"
          class="height-100 d-flex flex-column justify-space-between"
      >
        <div>
          <v-text-field
              v-model="announcement.title"
              :counter="50"
              :rules="titleRules"
              label="Ingrese el titulo del anuncio"
              required
          ></v-text-field>
          <v-text-field
              v-model="announcement.place"
              :counter="50"
              :rules="placeRules"
              label="Ingrese la ubicacion del empleo"
              required
          ></v-text-field>
          <v-textarea
              v-model="announcement.description"
              label="Ingrese la descripcion del anuncio"
              :rules="descriptionRules"
              :counter="200"
              required
              auto-grow
              rows="2"
          ></v-textarea>
          <v-text-field
              label="Salario"
              prefix="S/."
              :rules="salaryRules"
              v-model="announcement.salary"
          ></v-text-field>
          <v-select
              v-model="announcement.ability"
              :items="abilities"
              :rules="[v => !!v || 'Abilidad es requerida']"
              label="Seleccione un etiqueta"
              required
          ></v-select>
          <v-select
              v-model="announcement.period"
              :items="periods"
              :rules="[v => !!v || 'Abilidad es requerida']"
              label="Seleccione la disponibilidad"
              required
          ></v-select>
          <v-checkbox v-model="announcement.visible">
            <template v-slot:label>
              <div>Este anuncio sera visible</div>
            </template>
          </v-checkbox>
        </div>
        <div>
          <v-divider></v-divider>
          <v-card-actions class="d-flex justify-end">
            <v-btn color="error" @click="closeAnnouncementEdit">Cerrar</v-btn>
            <v-btn color="warning" @click="editAnnouncementAdd">Editar</v-btn>
          </v-card-actions>
        </div>
      </v-form>
    </v-card-content>
  </v-card>
</template>

<script>
import router from "@/router";
import ApplicantsAnnouncementService from "@/applicants/services/applicants.announcement.service.js";
export default {
  name: "applicant-announcement-edit",
  props: {
    idAnnouncement: Number,
    dialogAnnouncementAdd: Boolean
  },
  data: () => ({
    idUser: 1,
    validate: true,
    checkbox: false,
    errors: [],
    titleRules: [ v => !!v || 'Title is required', v => (v && v.length <= 50) || 'Title must be less than 50 characters'],
    placeRules: [ v => !!v || 'Place is required', v => (v && v.length <= 20) || 'Title must be less than 20 characters'],
    descriptionRules: [ v => !!v || 'Description is required', v => (v && v.length <= 200) || 'Description must be less than 200 characters'],
    salaryRules: [v => !!v || 'Salary is required', v => (v && v > 0) || 'Salary must be major than 0'],
    periods: ["Full Time", "Part Time"],
    abilities: ["Programacion con C++", "Programacion con Python", "Programacion Web", "Programacion Back-end con c# y asp.net"],
    announcement: {},
    select: null,
    search: null,
  }),
  methods: {
    backToAnnouncement() {
      router.push({ name: 'applicant-announcement', params: {idUser: this.$route.params.idUser} })
    },
    closeAnnouncementEdit() {
      this.$emit('closeAnnouncementEdit');
    },
    async getAnnouncement() {
      ApplicantsAnnouncementService.getById(this.idAnnouncement)
          .then(response =>  {
            this.announcement = response.data;
          })
          .catch(error => {
            this.errors.push(error);
          })
    },
    async editAnnouncementAdd() {
      this.$refs.form.validate()
      if (this.validate) {
        await ApplicantsAnnouncementService.update(this.announcement.id ,this.announcement)
            .then(response => {
              this.$emit("update:announcements", response.data);
              this.closeAnnouncementEdit();
            })
            .catch(error => {
              this.errors.push(error);
            })
      } else {
        this.$refs.form.validate();
      }
    },
  },
  watch: {
    model (val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop())
      }
    },
  },
  mounted() {
    this.idUser = this.$route.params.idUser;
    this.getAnnouncement();
  }
}
</script>

<style scoped>
.height-100 {
  height: 100%;
}
</style>
