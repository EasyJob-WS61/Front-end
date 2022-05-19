<template>
  <row class="ma-0 pa-0 d-flex">

    <v-col cols="4" class="ma-0 pa-0">
      <postulant-navegation></postulant-navegation>
    </v-col>

    <v-col cols="8" class="ma-0 pa-4 background ">
      <v-row  style="margin-top: 30px;margin-bottom: -60px;margin-left: 280px">
        <h1 class="font-weight-bold  primary" style="font-size: 40px">Sé un usuario PREMIUM</h1>
      </v-row>
      <v-row>
        <v-col cols="6"  >
          <br/><br/><br/>
          <v-img class="mx-auto" width="400px" v-bind:src="require('../../core/img/premium.png')" alt="premium"></v-img>
          <v-img class="mx-auto" width="200px" v-bind:src="require('../../core/img/premium-plan.png')" alt="plan"></v-img>

        </v-col>
        <v-col cols="6" > <br/><br/><br/> <br/><br/><br/>
          <h1  style="color: #6c6b6b; font-size: 28px; margin-right: 40px">Aparece en las primeras posiciones de busqueda de profesionales</h1> <br/>
          <h1 style="color: #6c6b6b; font-size: 28px; margin-right: 80px">Sé recomendado a empresas de acuerdo a tus hbailidades y talento</h1>
          <br/><br/>
          <v-btn class="rounded-lg btn-info" height="50px"   @click.stop="dialog = true">Adquirir</v-btn>

          <v-dialog v-model="dialog" max-width="290">
              <v-card>

                <v-img width="700px" v-bind:src="require('../../core/img/pay.png')" alt="premium"></v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                  >
                    Pagar
                  </v-btn>
                </v-card-actions>
              </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-col>

  </row>
</template>

<script>
import PostulantNavegation from "@/postulants/pages/postulant-navegation";
export default {
  name: "postulant-premium",
  components: {PostulantNavegation},
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