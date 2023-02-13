<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import LocaleEnum from './LocalesEnum'
import LocalesMenuModel from './LocalesMenuModel'

const { locale } = useI18n()
const currentLocaleImg = ref(locale.value)
const menuItems = ref<LocalesMenuModel[]>([
    {
        prependAvatar: 'en',
        title: 'English',
        value: LocaleEnum['en']
    },
    {
        prependAvatar: 'de',
        title: 'Deutschland',
        value: LocaleEnum['de']
    }
])

const changeLocale = (val: LocalesMenuModel) => {
    locale.value = LocaleEnum[val.value]
    currentLocaleImg.value = val.prependAvatar
}
</script>

<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-avatar class="ml-3 cursor-pointer" size="small" v-bind="props">
                <v-img :src="`/${currentLocaleImg}.png`" alt="John"></v-img>
            </v-avatar>
        </template>
        <v-list class="py-0" active-color="primary" item-props lines="three">
            <v-list-item v-for="(item, index) in menuItems" :key="index" @click="changeLocale(item)">
                <template v-slot:prepend>
                    <v-avatar size="x-small" color="primary">
                        <v-img :src="`/${item.prependAvatar}.png`"></v-img>
                    </v-avatar>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>


<style scoped>
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line {
    min-height: 58px;
}
</style>