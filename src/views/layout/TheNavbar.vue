<template>
    <v-app-bar :elevation="2" color="primary" absolute>
        <v-app-bar-title>
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