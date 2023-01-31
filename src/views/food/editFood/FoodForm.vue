<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import useFoodsListStore from '../../../stores/food/FoodsListStore'
import IngridentsEnum from '../ingredients/IngridentsEnum'

const { food } = storeToRefs(useFoodsListStore())
const Ingredient = defineAsyncComponent(() => import('../ingredients/Ingredient.vue'))
const ingridentsEnumLength=Object.values(IngridentsEnum).length
const ingredients = ref(Object.values(IngridentsEnum).slice(ingridentsEnumLength/2,ingridentsEnumLength))

</script>

<template>
    <v-row>
        <v-col cols="12" sm="6">
            <v-text-field v-model="food.name" label="name" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
            <v-text-field v-model="food.price" label="price" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-textarea v-model="food.desc" label="description" auto-grow variant="outlined" rows="3"
                row-height="25" shaped></v-textarea>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-chip-group v-model="food.ingredients" selected-class="text-success" column multiple>
                <template v-for="item in ingredients" :key="item">
                    <Ingredient :item="item.toString()"></Ingredient>
                </template>
            </v-chip-group>
        </v-col>
    </v-row>
</template>