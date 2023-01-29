<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import useFoodsListStore from '../../../stores/food/FoodsListStore'
import { storeToRefs } from 'pinia'
import SelectedFoodType from '../models/SelectedFoodType'
import { foods, selectedFood } from './EditFoodButtons'

const route = useRoute()
const AppToggleButton = defineAsyncComponent(() => import('../../../components/AppToggleButton.vue'))
const ResturantForm = defineAsyncComponent(() => import('./ResturantForm.vue'))
const FoodForm = defineAsyncComponent(() => import('./FoodForm.vue'))
const { addFood, getFood, editFood } = useFoodsListStore()
const { loading, getFoodDetail } = storeToRefs(useFoodsListStore())
const btnName = ref('add')

if (route.params.id) {
    btnName.value = 'edit'
    getFood(~~route.params.id)
}
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
                <FoodForm :getFoodDetail="getFoodDetail"></FoodForm>
            </v-col>
            <v-col cols="md-5" class="border-left resturant mb-3">
                <ResturantForm></ResturantForm>
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