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

        <v-row v-for="announcement in announcements" :key="announcement.id">
          <v-col>
            <div class="containter-anuncio" v-on:click="changePage(announcement.id)">
              <v-row>
                <v-col class="row-center">
                  <p>{{announcement.place}}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <h2>{{announcement.title}}</h2>
                </v-col>
                <v-col class="flex-end">
                  <div class="img-post">
                    <img
                      :src="announcement.photo"
                      alt=""
                    />
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="row-center">
                  <p>{{announcement.period}}</p>
                </v-col>
                <v-col class="row-center flex-end">
                  <p>Publicado {{announcement.date}}</p>
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
import AnnouncesService from "../services/Announces.service";
export default {
  name: "AnunciosPostulantes",

  data: () => ({
    rules: [(value) => !!value || "Required."],
    announcements: [],
  }),

  methods: {
    changePage(id) {
      this.$router.push(`/postulants/1/announcements/${id}`);
    },
  },
  async mounted() {
    let response = await AnnouncesService.getAll();
    this.announcements = response.data;
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
  color: #ffffff;
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
