<template>
  <v-row>
    <v-col>
      <h1>Registrate</h1>
    </v-col>
    <v-col>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "sign-in-account",
  data() {
    return {
      applicant: {
        typeUser: null,
        name: null,
        description: null,
        email: null,
        password: null,
        photo: null,
        ruc: null,
        website: null,
      },
      postulant: {
        typeUser: null,
        name: null,
        description: null,
        email: null,
        photo: null,
        password: null,
        gitHubUser: null,
      }
    };
  },
}
</script>

<style scoped>

</style>
