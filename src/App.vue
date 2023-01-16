<template>
  <v-app>
    <v-app-bar :elevation="2" color="primary" absolute>
      <v-app-bar-title class="d-flex justify-space-around">
        Welcome to PizGer!
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container class="my-10">
        <RouterView></RouterView>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-application {
  background-color: #edeff3 !important;
}
</style>

