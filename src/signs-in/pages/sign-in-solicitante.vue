<template>
  <v-container class="allcontainer">
    <v-row
      class="text-center input-container"
      align="center"
      justify="center"
      fluid
    >
      <v-col cols="12">
        <v-row justify="center" class="container-profile">
          <v-col class="container-profile">
            <div>
              <img
                class="profile-img"
                src="https://cdna.artstation.com/p/assets/images/images/023/576/078/original/ying-chen-me-optimize.gif?1579652163"
                alt="Avatar"
              />
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col> <h2>SOLICITANTE</h2> </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Nombres"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="Apellidos"
              :rules="Nombres"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field
              label="Correo Electronico"
              :rules="Nombres"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="Contraseña"
              :rules="Nombres"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="Repetir Contraseña"
              :rules="Nombres"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn color="#01C4FF" elevation="2" x-large>continuar</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignInSolicitante",

  data: () => ({
    rules: [(value) => !!value || "Required."],
  }),
};
</script>

<style>
h2 {
  text-align: center;
  color: #01c4ff;
}
.allcontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://i.pinimg.com/564x/90/61/74/906174f7d18a56bf917a232e65e6bf8f.jpg") !important;
   background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
}
.input-container {
  width: 40%;
}
.container-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
}
.profile-img {
  height: 10rem;
}
</style>
