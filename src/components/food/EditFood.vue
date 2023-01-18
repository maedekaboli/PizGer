<script setup lang="ts">
import { ref } from 'vue'
import SelectedFoodType from './selectedFoodType'

const ingredients = ref<string[]>([
    'Tomato', 'Onion', 'Garlic', 'Cheese', 'Parsley ', 'Basil', 'Olive', 'Egg', 'Sauce'

])
const foods = ref<SelectedFoodType[]>([
    { value: 1, name: 'Pizza', icon: 'mdi-pizza', color: 'red' },
    { value: 2, name: 'Burger', icon: 'mdi-hamburger', color: '#FFAB00' }
])
const selectedFood = ref<SelectedFoodType>({ value: 1, name: 'Pizza', icon: 'mdi-pizza', color: 'red' })

</script>


<template>
    <v-item-group mandatory selected-class="bg-primary">
        <v-container>
            <v-row>
                <v-col cols="12" md="2">
                    <v-btn-toggle elevation="1" rounded="xl" v-model="selectedFood" mandatory borderless color="deep-purple-accent-3">
                        <v-btn :value="n" v-for="n in foods" :key="n">
                            <v-icon :color="n.color" center size="30px">
                                {{ n.icon }}
                            </v-icon>
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>

    <v-col cols="md-12">
        <v-card class="px-6 py-10">
            <v-row>
                <v-col cols="md-7">
                    <v-card-title class="mb-8">
                        {{ selectedFood.name }}
                    </v-card-title>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field model-value="John Doe" label="name" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field model-value="John Doe" label="price" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea label="description" auto-grow variant="outlined" rows="3" row-height="25"
                                shaped></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-chip-group column multiple selected-class="text-success">
                            <v-chip v-for="item in ingredients" :key="item" filter variant="outlined">
                                {{ item }}
                            </v-chip>
                        </v-chip-group>
                    </v-row>
                </v-col>
                <v-col cols="md-5" class="border-left resturant my-3">
                    <v-card-title class="pt-0 mb-8">
                        Resturant
                    </v-card-title>
                    <v-col cols="12">
                        <v-text-field model-value="John Doe" label="name" variant="outlined"></v-text-field>
                    </v-col>
                </v-col>
            </v-row>
        </v-card>

        <v-btn class="mt-5" size="large" color="info">
            Edit {{ selectedFood.name }}
        </v-btn>
        <router-link to="/">
            <v-btn class="mt-5 ml-4" size="large" color="black" variant="outlined">
                back
            </v-btn>
        </router-link>
    </v-col>
</template>

<style>
.resturant {
    border-left: 1px solid rgb(226, 223, 223);
}
</style>