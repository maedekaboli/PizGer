<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import SelectedFoodType from './models/SelectedFoodType'
import useFoodsListStore from '../../stores/FoodsListStore'
const ToggleButton = defineAsyncComponent(() => import('../../components/ToggleButton.vue'))

const ingredients = ref<string[]>([
    'Tomato', 'Onion', 'Garlic', 'Cheese', 'Parsley ', 'Basil', 'Olive', 'Egg', 'Sauce'

])
const foods = ref<SelectedFoodType[]>([
    { value: 1, name: 'Pizza', icon: 'mdi-pizza', color: 'red', iconSize: '30px' },
    { value: 2, name: 'Burger', icon: 'mdi-hamburger', color: '#FFAB00', iconSize: '30px' }
])
let selectedFood = ref<SelectedFoodType>({ value: 1, name: 'Pizza', icon: 'mdi-pizza', color: 'red', showName: false })

const food = ref({
    name: '',
    desc: '',
    price: null,
    category: selectedFood.value.value
})

const { addFood } = useFoodsListStore()
const onSubmit = () => {
    addFood(food)
}

const onToggleBtns = (selectedBtn: SelectedFoodType) => {
    selectedFood.value = selectedBtn
}
</script>


<template>
    <v-row>
        <v-col cols="12" md="2">
            <ToggleButton :selectedFood="selectedFood" :foods="foods" @toggleBtns="onToggleBtns"></ToggleButton>
        </v-col>
    </v-row>

    <v-col cols="md-12">
        <v-card class="px-6 py-10">
            <v-row>
                <v-col cols="md-7">
                    <v-card-title class="mb-8">
                        {{ selectedFood.name }}
                    </v-card-title>
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

        <v-btn @click="onSubmit" rounded="pill" class="mt-5" size="large" color="info">
            Edit {{ selectedFood.name }}
        </v-btn>
        <router-link to="/">
            <v-btn rounded="pill" class="mt-5 ml-4" size="large" color="black" variant="outlined">
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