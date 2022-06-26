<template>
  <v-card max-width="600px" width="90vw" height="100vh" max-height="900px" class="overflow-y-auto">
    <div>
      <v-toolbar color="secondary">
        <v-card-title class="text-white">Registrar Empresa</v-card-title>
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
              v-model="enterprise.name"
              :counter="50"
              :rules="nameRules"
              label="Ingrese el nombre o razon social"
              required
          ></v-text-field>
          <v-textarea
              v-model="enterprise.description"
              label="Ingrese una descripcion de su empresa"
              :rules="descriptionRules"
              :counter="200"
              required
              auto-grow
              rows="2"
          ></v-textarea>
          <v-text-field
              v-model="enterprise.ruc"
              :counter="50"
              label="Ingrese el codigo RUC"
              required
          ></v-text-field>
          <v-text-field
              v-model="enterprise.phone"
              :counter="50"
              type="number"
              label="Ingrese el numero de telefono celular"
              required
          ></v-text-field>
          <v-text-field
              v-model="enterprise.website"
              :counter="50"
              label="Ingrese su sitio web"
              required
          ></v-text-field>
          <v-text-field
              v-model="enterprise.photo"
              :counter="50"
              label="Ingrese una photo"
              required
          ></v-text-field>
        </div>
        <div>
          <v-divider></v-divider>
          <v-card-actions class="d-flex justify-end">
            <v-btn color="error">Cerrar</v-btn>
            <v-btn color="secondary">Registrar</v-btn>
          </v-card-actions>
        </div>
      </v-form>
    </v-card-content>
  </v-card>
</template>

<script>
export default {
  name: "applicant-enterprise",
  data() {
    return {
      enterprise: {},
      validate: true,
      nameRules: [ v => !!v || 'Name is required', v => (v && v.length <= 50) || 'Name must be less than 50 characters'],
      descriptionRules: [ v => !!v || 'Description is required', v => (v && v.length <= 200) || 'Description must be less than 200 characters'],
    }
  },
  methods() {

  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
