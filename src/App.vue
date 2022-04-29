<template>
  <v-app :theme="theme" class="scroll overflow-hidden">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    theme: 'lightTheme' //darkTheme lightTheme
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
.scroll {
  overflow-x:hidden;
}
</style>
