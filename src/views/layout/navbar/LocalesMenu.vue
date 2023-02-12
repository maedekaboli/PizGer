<script setup lang="ts">

</script>

<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-avatar class="ml-3" size="small" v-bind="props">
                <v-img src="/de.png" alt="John"></v-img>
            </v-avatar>
        </template>
        <v-list :items="[
        {
            prependAvatar: '/en.png',
            title: 'English',
            value: 0
        }]" item-props lines="three">
        </v-list>
    </v-menu>
</template>