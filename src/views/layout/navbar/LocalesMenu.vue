<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import LocaleEnum from './LocalesEnum'
import LocalesMenuModel from './LocalesMenuModel'

const { locale } = useI18n()
const menuItems = ref<LocalesMenuModel[]>([
    {
        prependAvatar: '/en.png',
        title: 'English',
        value: LocaleEnum['en']
    },
    {
        prependAvatar: '/de.png',
        title: 'Deutschland',
        value: LocaleEnum['de']
    }
])

const changeLocale = (val: number) => {
    locale.value = LocaleEnum[val]
}
</script>

<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-avatar class="ml-3" size="small" v-bind="props">
                <v-img src="/de.png" alt="John"></v-img>
            </v-avatar>
        </template>
        <v-list active-color="primary" item-props lines="three">
            <v-list-item v-for="(item, index) in menuItems" :key="index" @click="changeLocale(item.value)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>