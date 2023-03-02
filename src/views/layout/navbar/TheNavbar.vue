<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const LocalesMenu = defineAsyncComponent(() => import('./LocalesMenu.vue'))
</script>


<template>
    <v-app-bar :elevation="2" color="#1A237E" absolute>
        <div class="d-flex justify-space-between w-100 align-center mx-3">
            <div class="d-flex">
                <v-app-bar-title class="text-indigo-lighten-5">
                    {{ $t('navbar.welcome') }}
                </v-app-bar-title>
                <LocalesMenu></LocalesMenu>
            </div>
            <router-link to="/food/create">
                <v-btn rounded="pill" color="yellow" variant="flat">
                    <v-icon start icon="mdi-plus"></v-icon>
                    {{ $t('navbar.addBtn') }}
                </v-btn>
            </router-link>
        </div>
    </v-app-bar>
</template>