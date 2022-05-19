<template>
  <v-card max-width="600px" width="90vw" height="100vh" max-height="900px">
    <v-toolbar color="secondary">
      <v-card-title class="text-white">Editar Anuncio</v-card-title>
    </v-toolbar>

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
              :items="items"
              :rules="[v => !!v || 'Abilidad es requerida']"
              label="Seleccione un etiqueta"
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
            <v-btn color="secondary" @click="editAnnouncementAdd">Editar</v-btn>
          </v-card-actions>
        </div>
      </v-form>
    </v-card-content>
  </v-card>
</template>

<script>
import router from "@/router";
import ApplicantsAnnouncementService from "@/applicants/services/applicants.announcement.service";
import UtilitiesService from "@/applicants/services/utilities.service";

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
    descriptionRules: [ v => !!v || 'Description is required', v => (v && v.length <= 200) || 'Description must be less than 200 characters'],
    salaryRules: [v => !!v || 'Salary is required', v => (v && v > 0) || 'Salary must be major than 0'],
    announcement: {},
    items: [],
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
    async getUtilities() {
      await UtilitiesService.getAll()
          .then(response => {
            let abilities = [];
            response.data.forEach(ability => {
              abilities.push(ability.name);
            })
            this.items = abilities;
            console.log(this.items);
          })
          .catch(error => {
            this.errors.push(error);
          })
    }
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
    this.getUtilities();
    this.getAnnouncement();
  }
}
</script>

<style scoped>
.height-100 {
  height: 100%;
}
</style>
