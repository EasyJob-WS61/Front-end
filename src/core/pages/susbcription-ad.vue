<template>
  <div style="max-width: 320px">
    <h3 class="font-weight-bold mb-2">Sé un usuario PREMIUM</h3>
    <p>Aparece en las primeras posiciones de busqueda de profesionales</p> <br/>
    <p>Sé recomendado a empresas de acuerdo a tus hbailidades y talento</p>
    <v-btn class="mt-4 text-white" block color="success">Más información</v-btn>
  </div>
</template>
<script>
export default {
  name: "postulant-premium",
  components: {},
  data () {
    return {
      dialog: false,
    }
  },
  created() {
  },
  methods:{
  }
}
</script>

<style scoped>
.btn-info {
  background-color: #01C4FF;
  color: white;
  font-family: Roboto;
  font-size: 25px;
}
.primary {
  color: #01C4FF;
  font-family: Roboto;
}

</style>
