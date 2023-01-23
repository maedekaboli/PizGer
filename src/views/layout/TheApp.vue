<script setup>
import TheNavbar from './TheNavbar.vue'
</script>


<template>
    <v-app>
        <TheNavbar></TheNavbar>
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

