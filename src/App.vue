<template>
  <v-app>
    <v-app-bar :elevation="2" color="primary" absolute>
      <v-app-bar-title>
        Welcome to PizGer!
      </v-app-bar-title>
      <v-btn rounded="pill" color="yellow" variant="flat">
        <v-icon start icon="mdi-plus"></v-icon>
        add pizgur
      </v-btn>
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

