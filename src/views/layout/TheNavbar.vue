<template>
    <v-app-bar :elevation="2" color="#1A237E" absolute>
        <v-app-bar-title class="text-indigo-lighten-5">
            Welcome to PizGer!
        </v-app-bar-title>
        <router-link to="/food">
            <v-btn rounded="pill" color="yellow" variant="flat">
                <v-icon start icon="mdi-plus"></v-icon>
                add pizgur
            </v-btn>
        </router-link>
    </v-app-bar>
</template>