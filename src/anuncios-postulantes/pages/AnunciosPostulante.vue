<template>
  <v-container class="allcontainer">
    <v-row justify="center" fluid class="container">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="11">
            <v-text-field
              label="Puesto, empresa o palabra clave"
              :rules="rules"
              hide-details="auto"
              color="#01C4FF"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="12">
            <div class="button-container">
              <v-btn color="#02EDB3" class="btn-block">Buscar</v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="containter-anuncio">
              <v-row>
                <v-col class="row-center">
                  <p>San Isidro, Lima</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <h2>Desarrollador Backend C#</h2>
                </v-col>
                <v-col class="flex-end">
                  <div class="img-post">
                    <img
                      src="https://cms.minka.com.pe/images/tiendas/1627692670_claro_logo.jpg"
                      alt=""
                    />
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <p>Full Time</p>
                </v-col>
                <v-col class="row-center flex-end">
                  <p>Publicado el 10 de Enero</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="containter-anuncio">
              <v-row>
                <v-col class="row-center">
                  <p>San Isidro, Lima</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <h2>Desarrollador Backend C#</h2>
                </v-col>
                <v-col class="flex-end">
                  <div class="img-post">
                    <img
                      src="https://cms.minka.com.pe/images/tiendas/1627692670_claro_logo.jpg"
                      alt=""
                    />
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <p>Full Time</p>
                </v-col>
                <v-col class="row-center flex-end">
                  <p>Publicado el 10 de Enero</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="containter-anuncio">
              <v-row>
                <v-col class="row-center">
                  <p>San Isidro, Lima</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <h2>Desarrollador Backend C#</h2>
                </v-col>
                <v-col class="flex-end">
                  <div class="img-post">
                    <img
                      src="https://cms.minka.com.pe/images/tiendas/1627692670_claro_logo.jpg"
                      alt=""
                    />
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <p>Full Time</p>
                </v-col>
                <v-col class="row-center flex-end">
                  <p>Publicado el 10 de Enero</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="containter-anuncio">
              <v-row>
                <v-col class="row-center">
                  <p>San Isidro, Lima</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <h2>Desarrollador Backend C#</h2>
                </v-col>
                <v-col class="flex-end">
                  <div class="img-post">
                    <img
                      src="https://cms.minka.com.pe/images/tiendas/1627692670_claro_logo.jpg"
                      alt=""
                    />
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <p>Full Time</p>
                </v-col>
                <v-col class="row-center flex-end">
                  <p>Publicado el 10 de Enero</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="containter-anuncio">
              <v-row>
                <v-col class="row-center">
                  <p>San Isidro, Lima</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <h2>Desarrollador Backend C#</h2>
                </v-col>
                <v-col class="flex-end">
                  <div class="img-post">
                    <img
                      src="https://cms.minka.com.pe/images/tiendas/1627692670_claro_logo.jpg"
                      alt=""
                    />
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <p>Full Time</p>
                </v-col>
                <v-col class="row-center flex-end">
                  <p>Publicado el 10 de Enero</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AnunciosPostulantes",

  data: () => ({
    rules: [(value) => !!value || "Required."],
  }),
};
</script>

<style>
.allcontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-image: url("https://i.pinimg.com/564x/90/61/74/906174f7d18a56bf917a232e65e6bf8f.jpg") !important;
   background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  width: 100%;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 3pc;
}

.row-center {
  display: flex;
  align-items: center;
}

.col-center {
  display: flex;
  justify-content: center;
}

.containter-anuncio {
  border: 1px solid rgb(189, 189, 189);
  height: 10rem;
  -webkit-box-shadow: 3px 7px 21px -6px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 3px 7px 21px -6px rgba(0, 0, 0, 0.61);
  box-shadow: 3px 7px 21px -6px rgba(0, 0, 0, 0.61);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 2px 20px;
  margin: 0.5rem 0px;
}
.containter-anuncio h2 {
  color: #01c4ff;
}
.containter-anuncio p {
  color: #747373;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.img-post {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
}
.img-post img {
  width: 100%;
  max-width: 100% !important;
}
</style>
