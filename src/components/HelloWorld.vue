<template>
  <v-container class="allcontainer">
    <v-row justify="center" fluid class="container">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          new message
        </h1>


        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          What's next?
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

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
  background-image: url("../core/img/BACKGROUND.png");
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
.containter-anuncio h2{
  color:#01C4FF;
}
.containter-anuncio p{
  color:#747373;
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
.img-post img{
  width: 100%;
  max-width:100% !important;
}
</style>
