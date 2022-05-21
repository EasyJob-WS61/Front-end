<template>
  <row class="ma-0 pa-0 d-flex">
    <v-col cols="18" class="ma-0 pa-4 background " >
      <v-row justify="center" style="margin-top: 30px">
        <h1 class="font-weight-bold  primary" style="font-size: 40px">¿Aun no eres PREMIUM?</h1>
      </v-row>
      <br><br><br>
      <v-row style="color: #6c6b6b; font-size: 15px" justify="center">
        <h1>Publica anuncios sin límites
          <br>
          Recibe la mayor cantidad de postulantes</h1>
      </v-row>
      <br>
      <v-row justify="center" style="margin-top: 30px">
        <h1 class="font-weight-bold  primary" style="font-size: 40px">Conoce nuestros planes</h1>
      </v-row>
      <v-row justify="center" >
        <v-col cols="2"  >
          <br/><br/><br/>
          <v-img class="mx-auto" width="400px" v-bind:src="require('../../core/img/plan-1.png')" alt="premium"></v-img>
          <v-row justify="center" >
          <v-btn class="rounded-lg btn-info" height="50px" right @click.stop="dialog = true">Adquirir</v-btn>
          </v-row>
        </v-col>
        <v-col cols="2"  >
          <br/><br/><br/>
          <v-img class="mx-auto" width="400px" v-bind:src="require('../../core/img/plan-2.png')" alt="premium"></v-img>
          <v-row justify="center" >
          <v-btn class="rounded-lg btn-info" height="50px" left @click.stop="dialog = true">Adquirir</v-btn>
          </v-row>
        </v-col>
        <v-col cols="2"  >
          <br/><br/><br/>
          <v-img class="mx-auto" width="400px" v-bind:src="require('../../core/img/plan-3.png')" alt="premium"></v-img>
          <v-row justify="center" >
          <v-btn class="rounded-lg btn-info" height="50px" left @click.stop="dialog = true">Adquirir</v-btn>
          </v-row>
        </v-col>

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

          </v-row>
        </v-col>
  </row>
</template>

<script>
export default {
  name: "applicant-premium",
  data () {
    return {
      dialog: false,
    }
  },
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