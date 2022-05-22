<template>
  <v-container class="allcontainer">
    <v-row justify="center" fluid class="container">
      <v-col cols="12">
        <v-row>
          <v-col cols="12"><h1>Nombre</h1></v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnysQxrChDCkqod6dLjrlbo5AxHkhjzbElJw&usqp=CAU"
              alt=""
            />
          </v-col>
          <v-col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              blanditiis consequatur accusamus explicabo nam? Sed voluptas
              labore assumenda repellat incidunt, corrupti laudantium minima
              impedit! Quia incidunt consequuntur officia architecto laborum?
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="margin-top">
            <h3>Especialidades:</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="margin-top align-center">
            <h3>Redes Sociales:</h3>
          </v-col>
          <v-col class="margin-top">
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="justify-end">
            <v-btn color="primary" elevation="3" x-large text>EDITAR</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12"><h2>Proyectos</h2></v-col>
        </v-row>
        <v-row>
            <v-col ><img class="img-project" src="https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-46-512.png" alt=""></v-col>
            <!--Proyecto-->
            <v-col cols="3" class="justify-center align-center">
                <v-row><img class="img-project-2" style="margin-bottom: 1pc;" src="https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2020/04/trello.jpg" alt=""></v-row>
                <v-row>
                    <v-col><h3 style="text-align:center">Nombre del proyecto</h3></v-col>
                </v-row>
            </v-col>
            <v-col cols="3" class="justify-center align-center">
                <v-row><img class="img-project-2" style="margin-bottom: 1pc;" src="https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2020/04/trello.jpg" alt=""></v-row>
                <v-row>
                    <v-col><h3 style="text-align:center">Nombre del proyecto</h3></v-col>
                </v-row>
            </v-col>
            <v-col cols="3" class="justify-center align-center">
                <v-row><img class="img-project-2" style="margin-bottom: 1pc;" src="https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2020/04/trello.jpg" alt=""></v-row>
                <v-row>
                    <v-col><h3 style="text-align:center">Nombre del proyecto</h3></v-col>
                </v-row>
            </v-col>
            <v-col cols="3" class="justify-center align-center">
                <v-row><img class="img-project-2" style="margin-bottom: 1pc;" src="https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2020/04/trello.jpg" alt=""></v-row>
                <v-row>
                    <v-col><h3 style="text-align:center">Nombre del proyecto</h3></v-col>
                </v-row>
            </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "postulant-profile",
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
.margin-top {
  margin-top: 2pc;
}
.align-center {
  display: flex;
  align-items: center;
}
.justify-center{
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
.img-project{
    height: 9.5pc;
    width: 9.5pc;
}
.img-project-2{
    height: 9.5pc;
    width: 15pc;
}
</style>
