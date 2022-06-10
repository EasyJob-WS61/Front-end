<template>
  <v-card max-width="600px" width="90vw" height="100vh" max-height="900px" class="overflow-y-auto">
    <div>
      <v-toolbar color="warning">
        <v-card-title class="text-white">Editar Perfil</v-card-title>
      </v-toolbar>
    </div>
    <v-card-content>
      <div class="fluid">
        <div class="d-flex justify-center">
          <v-img
              :src="newPhoto"
              alt=""
          />
        </div>
        <v-text-field
            hide-details
            class="w-100 mt-4 mb-2"
            color="orange orange-darken-4"
            label="Photo"
            placeholder="Enter the new Photo"
            v-model="newPhoto">
        </v-text-field>
        <v-text-field
            hide-details
            class="w-100 mt-4 mb-2"
            color="orange orange-darken-4"
            label="Name"
            placeholder="Enter the new Name"
            v-model="newName">
        </v-text-field>
        <v-text-field
            hide-details
            class="w-100 mb-2"
            color="orange orange-darken-4"
            label="Last Name"
            placeholder="Enter the new LasName"
            v-model="newLastName">
        </v-text-field>
        <v-text-field
            hide-details
            class="w-100 mb-2"
            background-color="amber lighten-4"
            color="orange orange-darken-4"
            label="GitHub"
            placeholder="Enter the new GitHub user"
            v-model="newGitHub"
        ></v-text-field>
        <v-textarea
            hide-details
            class="w-100 mb-2"
            background-color="amber lighten-4"
            color="orange orange-darken-4"
            label="Description"
            placeholder="Enter the new description"
            v-model="newDescription"
            rows="4"
        ></v-textarea>
        <v-divider></v-divider>
        <v-card-actions class="justify-end">
          <v-btn color="error" text @click="closeEditProfile(false)">
            Cerrar
          </v-btn>
          <v-btn color="warning" text @click="updatePostulantProfile()">
            Editar
          </v-btn>
        </v-card-actions>
        <div class="v-field">
        </div>
      </div>
    </v-card-content>
  </v-card>
</template>
<script>
import PostulantProfileService from "../services/postulant.profile.service";
export default {
  name: "postulant-edit-profile",
  props: { userId: Number},
  data() {
    return {
      newName: "",
      newGitHub: "",
      newPhoto: "",
      newLastName: "",
      newDescription: "",
      newContacto: "",
      newPassword: "",
      newPassword2: "",
    };
  },
  async created() {
    let response = await PostulantProfileService.getPostulantProfile(this.userId);
    this.newName = response.data.name;
    this.newLastName = response.data.lastname;
    this.newDescription = response.data.description;
    this.newContacto = response.data.email;
    this.newPhoto = response.data.photo;
    this.newGitHub = response.data.github_user;
  },
  methods: {
    closeEditProfile(change) {
      this.$emit("close-edit-profile", change);
    },
    async updatePostulantProfile() {
      if (this.newPassword === this.newPassword2) {
        let response = await PostulantProfileService.update(
            this.userId,
            {
              name: this.newName,
              lastname: this.newLastName,
              description: this.newDescription,
              email: this.newContacto,
              github_user: this.newGitHub,
              photo: this.newPhoto
            }
        );
        if (response.status === 200) {
          this.closeEditProfile(true);
        }
      } else {
        alert("Las contraseñas no coinciden");
      }
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
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
