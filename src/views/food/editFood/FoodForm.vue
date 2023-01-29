<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import FoodType from "../models/FoodType";

defineProps<{
    getFoodDetail: FoodType;
}>();

const Ingredient = defineAsyncComponent(() => import('../ingredients/Ingredient.vue'))
const ingredients = ref([0, 1, 2, 3, 4, 5, 6, 7, 8])
</script>

<template>
    <v-row>
        <v-col cols="12" sm="6">
            <v-text-field v-model="getFoodDetail.name" label="name" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
            <v-text-field v-model="getFoodDetail.price" label="price" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-textarea v-model="getFoodDetail.desc" label="description" auto-grow variant="outlined" rows="3"
                row-height="25" shaped></v-textarea>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-chip-group v-model="getFoodDetail.ingredients" selected-class="text-success" column multiple>
                <template v-for="item in ingredients" :key="item">
                    <Ingredient :item="item"></Ingredient>
                </template>
            </v-chip-group>
        </v-col>
    </v-row>
</template>