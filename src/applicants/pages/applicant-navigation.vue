<template>
  <v-card height="100vh" tile class="text-center border-none">
    <div class="height-100 d-flex flex-column justify-space-between py-4">
      <div>
        <v-img class="mx-auto" width="200px" v-bind:src="require('../../core/img/LOGO.png')" alt="EasyJob Logo"></v-img>
        <div class="pb-3">
          <v-subheader class="text-lg-h4 text-sm-h5 font-weight-bold primary text-center">EasyJob</v-subheader>
        </div>
        <v-list dense color="primary">
          <v-list-item-group
              v-model="selectedItem"
              color="primary"
              class="text-center pt-0 mt-0"
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                class="select-item text-center d-flex justify-center align-center text-h5 primary-border height-100"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-weight-bold">{{item.text}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <v-list-item class="select-item-two text-center d-flex justify-center align-center text-h5 secondary-bg">
        <v-list-item-content>
          <v-list-item-title class="text-uppercase font-weight-bold">Cerrar Sesión</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "applicant-navigation",
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Inicio', icon: 'mdi-clock' },
      { text: 'Perfil', icon: 'mdi-account' },
      { text: 'Notificaciones', icon: 'mdi-flag' },
      { text: 'Mensajes', icon: 'mdi-flag' },
      { text: 'Busqueda', icon: 'mdi-flag' },
      { text: 'Premium', icon: 'mdi-flag' },
      { text: 'Agendar Entrevista', icon: 'mdi-flag' },
    ],
  })
}
</script>

<style scoped>
.select-item {
  color: #01C4FF;
}
.select-item:hover {
  cursor: pointer;
  background-color: #01C4FF;
  color: white;
}
.select-item-two {
  color: white;
}
.select-item-two:hover {
  cursor: pointer;
  background-color: #FF5A5A;
  color: white;
}
.primary {
  color: #01C4FF;
}

.secondary-bg {
  background-color: #02EDB3;
}
.primary-border {
  border: 0px solid #01C4FF;
  border-bottom-width: 1px;
}
.primary-border:first-of-type {
  border-top-width: 1px;
}
.height-100 {
  height: 100%;
}
.selected {
  background-color: #01C4FF;
  color: white;
}
</style>
