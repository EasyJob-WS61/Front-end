<template>
  <v-container class="allcontainer">
    <v-row>
      <v-col
        style="
          margin-bottom: 1pc;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        "
        cols="12"
      >
        <label style="font-size: 1.3pc" for="">Titulo:</label>
        <input class="input-title" type="text" v-model="title" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <img
          style="cursor: pointer"
          class="img-project"
          :src="image"
          alt=""
          @click="imageDialog = true"
        />
      </v-col>
      <v-col style="margin-bottom: 1pc">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="description"
        ></textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="margin-bottom: 1pc" class="12">
        <v-btn
          color="primary"
          elevation="3"
          x-large
          text
          @click="addGitHub()"
          :disabled="!isVinculed"
        >
          VINCULAR GITHUB
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="margin-bottom: 1pc" class="12">
        <v-btn
          color="primary"
          elevation="3"
          x-large
          text
          @click="addProject()"
          :disabled="!isSaved"
        >
          GUARDAR
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="save-box" style="margin-bottom: 1pc" cols="12">
        <v-btn
          color="primary"
          elevation="3"
          x-large
          text
          :disabled="!isAlready"
          @click="addEvidenciasDialog=true"
        >
          AGREGAR EVIDENCIAS
        </v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="imageDialog" width="600">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Agregar imagen del proyecto
        </v-card-title>

        <v-text-field
          style="margin: 1pc"
          label="Image Link:"
          v-model="imgNewLink"
        ></v-text-field>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="addImage()"> Agregar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="addGitHubDialog" width="600">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Agregar direccion de github
        </v-card-title>

        <v-text-field
          style="margin: 1pc"
          label="GitHub link:"
          v-model="gitHubLink"
        ></v-text-field>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="addGitHubDialog = false">
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="addEvidenciasDialog" width="600">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Agrega evidencias
        </v-card-title>

        <v-text-field
          style="margin: 1pc"
          label="Image link:"
          v-model="evidenceImageLink"
        ></v-text-field>
        <v-text-field
          style="margin: 1pc"
          label="Description:"
          v-model="evidenceDescription"
        ></v-text-field>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="addEvidence()">
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ProjectsService from "./../service/projects.service";
export default {
  name: "add-project",
  data() {
    return {
      title: "",
      description: "",
      gitHubLink: "",
      isAlready: false,
      isSaved: true,
      image: "https://cdn-icons-png.flaticon.com/512/189/189689.png",
      addGitHubDialog: false,
      imageDialog: false,
      imgNewLink: "",
      isVinculed: true,
      currentProyect: -1,
      addEvidenciasDialog: false,
      evidenceImageLink: "",
      evidenceDescription: "",
    };
  },
  methods: {
    addGitHub() {
      this.addGitHubDialog = true;
    },
    addImage() {
      this.image = this.imgNewLink;
      this.imageDialog = false;
    },
    async addProject() {
      if (
        this.title != "" &&
        this.description != "" &&
        this.url != "" &&
        this.imgNewLink != ""
      ) {
        const sender = await ProjectsService.addProject({
          postulant_id: this.$route.params.id,
          title: this.title,
          description: this.description,
          url: this.gitHubLink,
          photo: this.image,
        });
        this.currentProyect = sender.data.id;
        this.isAlready = true;
        this.isVinculed = false;
        this.isSaved = false;
      } else {
        alert("Todos los campos son obligatorios");
      }
    },
    async addEvidence() {
      if (this.evidenceImageLink != "" && this.evidenceDescription != "") {
        const response = await ProjectsService.addEvidence({
          project_id: this.currentProyect,
          title: this.evidenceDescription,
          description: this.evidenceDescription,
          photo: this.evidenceImageLink,
        });
        console.log(response);
        this.evidenceImageLink ='';
          this.evidenceDescription = '';
          this.addEvidenciasDialog = false;
      } else {
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

.img-project {
  max-width: inherit;
  margin-top: 1pc;
  height: inherit;
}

.input-title {
  border: 1px solid white;
  border-radius: 5px;
  min-width: 40pc;
  height: 2.5pc;
  max-width: 40pc;
  color: white;
  padding: 1pc;
}
.text-area-box {
  display: flex;
  flex-direction: column;
}
textarea {
  border: 1px solid white;
  border-radius: 5px;
  width: inherit;
  color: white;
  padding: 1pc;
}
.save-box {
  margin-bottom: 1pc;
  display: flex;
  align-items: center;
  width: 100vw;
  padding-right: 10pc;
  justify-content: flex-end;
}
</style>
