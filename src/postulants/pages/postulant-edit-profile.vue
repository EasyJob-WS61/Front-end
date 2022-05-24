<template>
  <v-container class="allcontainer">
    <v-row justify="center" fluid class="container">
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <input class="name-input-edit" type="text" v-model="newName" />
            <input class="name-input-edit" type="text" v-model="newLastName" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-col>
              <h4>Información</h4>
              <textarea
                v-model="newDescription"
                class="information-input-edit"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </v-col>
          </v-col>
          <v-col class="image-box" cols="4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnysQxrChDCkqod6dLjrlbo5AxHkhjzbElJw&usqp=CAU"
              alt=""
            />
            <v-btn color="primary" elevation="3" x-large text
              >Cambiar Foto</v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4" class="margin-top align-center">
            <h3>Contacto:</h3>
          </v-col>
          <v-col class="margin-top">
            <textarea
              v-model="newContacto"
              class="redes-input"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>Cambiar contraseña</h4>
            <v-row>
              <v-col class="password-edit-box">
                <label for="">Contraseña actual</label>
                <input class="password-edit" type="text" />
              </v-col>
              <v-col class="password-edit-box">
                <label for="">Contraseña nueva</label>
                <input class="password-edit" type="text" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="justify-end">
            <v-btn color="primary" elevation="3" x-large text @click="updatePostulantProfile()">
              Guardar Cambios
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PostulantProfileService from "../services/postulant.profile.service";
export default {
  name: "postulant-edit-profile",
  data() {
    return {
      newName: "",
      newLastName: "",
      newDescription: "",
      newContacto: "",
      newPassword: "",
      newPassword2: "",
    };
  },
  async created() {
    let response = await PostulantProfileService.getPostulantProfile(
      parseInt(this.$route.params.id)
    );
    this.newName = response.data.name;
    this.newLastName = response.data.lastname;
    this.newDescription = response.data.description;
    this.newContacto = response.data.email;
    this.newPassword = response.data.password;
    this.newPassword2 = response.data.password;
  },
  methods: {
    async updatePostulantProfile() {
      if (
        this.newName != "" &&
        this.newLastName != "" &&
        this.newDescription != "" &&
        this.newContacto != "" &&
        this.newPassword != "" &&
        this.newPassword2 != ""
      ) {
        if (this.newPassword == this.newPassword2) {
          let response = await PostulantProfileService.update(
            parseInt(this.$route.params.id),
            {
              name: this.newName,
              lastname: this.newLastName,
              description: this.newDescription,
              email: this.newContacto,
              password: this.newPassword,
            }
          );
          if (response.status == 200) {
            this.$router.push(`/postulants/${this.$route.params.id}/profile`);
          }
        } else {
          alert("Las contraseñas no coinciden");
        }
      } else{
        alert("Todos los campos son obligatorios");
      }
    },
  },
};
</script>

<style scoped>
.allcontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: auto;
}
.image-box {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.redes-input {
  border: 1px solid white;
  border-radius: 5px;
  color: white;
}

.margin-top {
  margin-top: 2pc;
}

.align-center {
  display: flex;
  align-items: center;
}

.justify-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

h1 {
  color: #01c4ff;
}

h2 {
  color: #01c4ff;
}

.img-project {
  height: 9.5pc;
  width: 9.5pc;
}

.img-project-2 {
  height: 9.5pc;
  width: 15pc;
}

.name-input-edit {
  border: 1px solid white;
  border-radius: 5px;
  min-height: 2.4pc;
  color: white;
  font-size: 1.3pc;
  min-width: 15pc !important;
  margin-right: 1pc;
}

.information-input-edit {
  border: 1px solid white;
  border-radius: 5px;
  min-width: 30pc !important;
  margin: 10px 15px;
  color: white;
  padding: 0.5pc;
}
.password-edit {
  margin-top: 1pc;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
}
.password-edit-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1pc;
  margin-bottom: 1pc;
}
</style>
