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
        <label style="font-size: 1.3pc;" for="">Titulo:</label>
        <input class="input-title" type="text" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <img
          class="img-project"
          src="https://cdn-icons-png.flaticon.com/512/189/189689.png"
          alt=""
        />
      </v-col>
      <v-col style="margin-bottom: 1pc">
        <textarea  name="" id="" cols="30" rows="10"></textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="margin-bottom: 1pc" class="12">
        <v-btn color="primary" elevation="3" x-large text>
          VINCULAR GITHUB
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="margin-bottom: 1pc" class="12">
        <v-btn color="primary" elevation="3" x-large text>
          AGREGAR EVIDENCIAS
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="save-box" style="margin-bottom: 1pc" cols="12">
        <v-btn color="primary" elevation="3" x-large text>
          GUARDAR
        </v-btn>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: "add-project",
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
  color:white;
  padding: 1pc;
}
.text-area-box {
  display: flex;
  flex-direction: column;
}
textarea{
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
