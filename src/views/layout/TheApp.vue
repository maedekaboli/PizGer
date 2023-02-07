<script setup>
import TheNavbar from './TheNavbar.vue'
import TheSidebar from './TheSidebar.vue'
</script>


<template>
    <v-app>
        <TheNavbar></TheNavbar>
        <v-main>
            <v-container class="my-10">
                <v-row align="center" justify="center">
                    <v-col cols="10">
                        <RouterView></RouterView>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <TheSidebar></TheSidebar>
    </v-app>
</template>
