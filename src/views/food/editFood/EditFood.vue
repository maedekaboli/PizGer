<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useRoute } from 'vue-router'
import useFoodsListStore from '../../../stores/food/FoodsListStore'
import { storeToRefs } from 'pinia'
import SelectedFoodType from '../models/SelectedFoodType'
import { foods, selectedFood } from './EditFoodButtons'
import * as yup from 'yup';
import { Form } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const AppToggleButton = defineAsyncComponent(() => import('../../../components/AppToggleButton.vue'))
const ResturantForm = defineAsyncComponent(() => import('./ResturantForm.vue'))
const FoodForm = defineAsyncComponent(() => import('./FoodForm.vue'))
const { addFood, getFood, editFood, resetFood } = useFoodsListStore()
const { loading, food } = storeToRefs(useFoodsListStore())
const btnName = ref('generals.add')

const schema = yup.object({
    name: yup.string().required('validations.required').label(t('generals.name')),
    price: yup.number().required('validations.required').positive('validations.positive').label(t('foodForm.price')),
    resturant: yup.object({
        name: yup.string().required('validations.required').label(t('generals.name')),
        address: yup.string().required('validations.required').label(t('foodForm.address'))
    })
});

onBeforeRouteLeave((to) => {
    if (to.path == '/food/create') {
        resetFood()
        btnName.value = 'generals.add'
    }
})

if (route.params.id) {
    btnName.value = 'generals.edit'
    getFood(~~route.params.id)
}

const onSubmit = (values) => {
    console.log(values)
    if (route.params.id)
        editFood(food.value)
    else
        addFood(food.value)
}
const onToggleBtns = (selectedBtn: SelectedFoodType) => {
    selectedFood.value = selectedBtn
    food.value.category = selectedFood.value.value
}

</script>


<template>
    <v-row>
        <v-col cols="12" md="2" class="mb-4">
            <AppToggleButton :selectedFood="selectedFood" :foods="foods" @toggleBtns="onToggleBtns"></AppToggleButton>
        </v-col>
    </v-row>
    <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
        <v-card class="pb-10">
            <v-progress-linear color="#6200ee" indeterminate v-if="loading"></v-progress-linear>
            <v-row class="pt-10 px-6">
                <v-col cols="md-7" sm="12">
                    <v-card-title class="pl-0 mb-8">
                        {{ selectedFood.name }}
                    </v-card-title>
                    <FoodForm></FoodForm>
                </v-col>
                <v-col cols="md-5" class="border-left resturant mb-3 pr-0">
                    <ResturantForm></ResturantForm>
                </v-col>
            </v-row>
        </v-card>
        <v-btn type="submit" :disabled="loading" rounded="pill" class="mt-5" size="large" color="primary">
            {{ $t(btnName) }} {{ selectedFood.name }}
        </v-btn>
        <router-link to="/">
            <v-btn rounded="pill" class="mt-5 ml-4" size="large" color="black" variant="outlined">
                {{ $t('generals.back') }}
            </v-btn>
        </router-link>
    </Form>
</template>

<style>
.resturant {
    border-left: 1px solid rgb(226, 223, 223);
}
</style>