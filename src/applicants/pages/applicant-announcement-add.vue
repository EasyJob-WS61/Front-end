<template>
  <v-card width="600px" height="100vh">
    <v-toolbar color="secondary">
      <v-card-title class="text-white">Agregar Anuncio</v-card-title>
    </v-toolbar>

    <v-card-content class="pa-8">
      <v-form
          ref="form"
          v-model="validate"
          lazy-validation
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
          <v-combobox
              v-model="model"
              v-model:search-input="search"
              :items="items"
              hide-selected
              hint="Maximo 5 etiquetas"
              label="Agregue algunas habilidades"
              multiple
              persistent-hint
              small-chips
          >
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-combobox>
        </div>
        <div>
          <v-divider></v-divider>
          <v-card-actions class="d-flex justify-end">
            <v-btn color="error" @click="closeAnnouncementAdd">Cerrar</v-btn>
            <v-btn color="secondary" @click="registerAnnouncementAdd">Registrar</v-btn>
          </v-card-actions>
        </div>
      </v-form>
    </v-card-content>

  </v-card>
</template>

<script>
import router from "@/router";
import ApplicantsAnnouncementService from "@/applicants/services/applicants.announcement.service";
export default {
  name: "applicant-announcement-add",
  components: {},
  props: {
    dialogAnnouncementAdd: Boolean
  },
  data: () => ({
    idUser: 1,
    validate: true,
    errors: [],
    titleRules: [ v => !!v || 'Title is required', v => (v && v.length <= 50) || 'Title must be less than 50 characters'],
    descriptionRules: [ v => !!v || 'Description is required', v => (v && v.length <= 200) || 'Description must be less than 200 characters'],
    salaryRules: [v => !!v || 'Salary is required', v => (v && v > 0) || 'Salary must be major than 0'],
    announcement: {
      applicant_id: null,
      title: '',
      description: '',
      salary: null,
      date: null,
      visible: null
    },
    items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
    model: [],
    search: null,
  }),
  methods: {
    backToAnnouncement() {
      router.push({ name: 'applicant-announcement', params: {idUser: this.$route.params.idUser} })
    },
    closeAnnouncementAdd() {
      this.$emit('closeAnnouncementAdd');
    },
    async registerAnnouncementAdd() {
      const is_valid = this.$refs.form.validate();
      if (is_valid) {

        const time = Date.now();
        const today = new Date(time);

        this.announcement.applicant_id = this.idUser;
        this.announcement.visible = true;
        this.announcement.date = today.toLocaleDateString();

        await ApplicantsAnnouncementService.create(this.announcement)
            .then(response => {
              this.$emit("update:announcements", response.data);
              this.closeAnnouncementAdd();
            })
            .catch(error => {
              this.errors.push(error);
            })
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
  }
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
.height-100 {
  height: 100%;
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
