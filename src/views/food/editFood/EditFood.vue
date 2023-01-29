<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import useFoodsListStore from '../../../stores/FoodsListStore'
import { storeToRefs } from 'pinia'
import SelectedFoodType from '../models/SelectedFoodType'
import { foods, selectedFood } from './EditFoodButtons'

const route = useRoute()
const AppToggleButton = defineAsyncComponent(() => import('../../../components/AppToggleButton.vue'))
const Ingredient = defineAsyncComponent(() => import('../ingredients/Ingredient.vue'))
const { addFood, getFood, editFood } = useFoodsListStore()
const { loading, getFoodDetail } = storeToRefs(useFoodsListStore())
const ingredients = ref([0, 1, 2, 3, 4, 5, 6, 7, 8])
const btnName = ref('add')

if (route.params.id) {
    btnName.value = 'edit'
    getFood(~~route.params.id)
}
console.log(getFoodDetail.value)
const onSubmit = () => {
    if (route.params.id)
        editFood(getFoodDetail.value)
    else
        addFood(getFoodDetail.value)
}
const onToggleBtns = (selectedBtn: SelectedFoodType) => {
    selectedFood.value = selectedBtn
    getFoodDetail.value.category = selectedFood.value.value
}

const selectedIngredient = (item: number) => {
    getFoodDetail.value.ingredients.push(item)
}

</script>


<template>
    <v-row>
        <v-col cols="12" md="2" class="mb-4">
            <AppToggleButton :selectedFood="selectedFood" :foods="foods" @toggleBtns="onToggleBtns"></AppToggleButton>
        </v-col>
    </v-row>

    <v-card class="px-6 py-10">
        <v-row>
            <v-col cols="md-7" sm="12">
                <v-card-title class="pl-0 mb-8">
                    {{ selectedFood.name }}
                </v-card-title>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field v-model="getFoodDetail.name" label="name" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field v-model="getFoodDetail.price" label="price" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea v-model="getFoodDetail.desc" label="description" auto-grow variant="outlined"
                            rows="3" row-height="25" shaped></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-chip-group v-model="getFoodDetail.ingredients" selected-class="text-success" column multiple>
                            <template v-for="item in ingredients" :key="item">
                                <Ingredient :item="item" @selectedIngredient="selectedIngredient"></Ingredient>
                            </template>
                        </v-chip-group>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="md-5" class="border-left resturant mb-3">
                <v-card-title class="pl-0 mb-8">
                    Resturant
                </v-card-title>
                <v-text-field model-value="John Doe" label="name" variant="outlined"></v-text-field>
            </v-col>
        </v-row>
    </v-card>

    <v-btn @click="onSubmit" :loading="loading" :disabled="loading" rounded="pill" class="mt-5" size="large"
        color="info">
        {{ btnName }} {{ selectedFood.name }}
    </v-btn>
    <router-link to="/">
        <v-btn rounded="pill" class="mt-5 ml-4" size="large" color="black" variant="outlined">
            back
        </v-btn>
    </router-link>
</template>

<style>
.resturant {
    border-left: 1px solid rgb(226, 223, 223);
}
</style>