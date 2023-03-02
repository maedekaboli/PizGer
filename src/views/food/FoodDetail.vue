<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import useFoodsListStore from '../../stores/food/FoodsListStore'
import { storeToRefs } from 'pinia'
// import SelectedFoodType from '../models/SelectedFoodType'
// import { foods, selectedFood } from './EditFoodButtons'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const Ingredient = defineAsyncComponent(() => import('./ingredients/Ingredient.vue'))
const route = useRoute()
const { t } = useI18n()
const { getFood } = useFoodsListStore()
const { loading, food } = storeToRefs(useFoodsListStore())
getFood(~~route.params.id)
</script>


<template>
    <v-card class="pb-10">
        <v-progress-linear color="#6200ee" indeterminate v-if="loading"></v-progress-linear>
        <v-row class="pt-10 px-6">
            <v-col cols="md-7" sm="12">
                <v-card-title class="pl-0 mb-8">
                    food detail
                </v-card-title>
                <v-row>
                    <v-col cols="12">Name:
                        {{ food.name }}
                    </v-col>
                    <v-col cols="12">
                        Prise: {{ food.price }}
                    </v-col>
                    <v-col cols="12">
                        description: {{ food.desc }}
                    </v-col>
                    <v-col cols="12">
                        <v-chip-group disabled class="text-success">
                            <template v-for="item in food.ingredients" :key="item">
                                <Ingredient :item="item.toString()"></Ingredient>
                            </template>
                        </v-chip-group>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="md-5" class="border-left resturant mb-3 pr-0">
                <v-card-title class="pl-3 mb-5">
                    {{ $t('foodForm.resturant') }} detail
                </v-card-title>
                <v-col cols="12">
                    resturant name: {{ food.resturant.name }}
                </v-col>
                <v-col cols="12">
                    resturant address: {{ food.resturant.address }}
                </v-col>
            </v-col>
        </v-row>
    </v-card>
    <router-link to="/food/edit/1">
        <v-btn rounded="pill" class="mt-5 ml-4" size="large" color="primary">
            edit
        </v-btn>
    </router-link>
    <router-link to="/">
        <v-btn rounded="pill" class="mt-5 ml-4" size="large" color="black" variant="outlined">
            {{ $t('generals.back') }}
        </v-btn>
    </router-link>
</template>

<style>
.resturant {
    border-left: 1px solid rgb(226, 223, 223);
}
</style>