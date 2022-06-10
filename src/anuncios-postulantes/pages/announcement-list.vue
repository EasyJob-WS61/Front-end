<template>
  <v-row>
    <v-card
        v-for="announcement in announcements" :key="announcement.id"
        v-on:click="changePage(announcement.id)"
        class="mb-4 w-100 px-8 py-8 d-flex">
      <div class="mr-4">
        <v-img width="70px"
               src="https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg"
        ></v-img>
      </div>
      <div>
        <p>{{announcement.place}}</p>
        <h2>{{announcement.title}}</h2>
        <p>{{announcement.period}}</p>
        <p>Publicado {{announcement.date}}</p>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import AnnouncesService from "../services/announcement.service";
export default {
  name: "postulant-announcement",
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
