<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import useFoodsListStore from '../../stores/food/FoodsListStore'
import { storeToRefs } from 'pinia'

const Food = defineAsyncComponent(() => import('./Food.vue'))
const NoFood = defineAsyncComponent(() => import('./NoFood.vue'))
const FilterFood = defineAsyncComponent(() => import('./filterFood/FilterFood.vue'))
const GettingFoodLoading = defineAsyncComponent(() => import('./GettingFoodLoading.vue'))

const { foodsList, loading } = storeToRefs(useFoodsListStore())
const { getFoodsList } = useFoodsListStore()
const snackbar = ref(false)
const snackbarMsg = ref(null)

getFoodsList()

</script>

<template>
  <FilterFood></FilterFood>
  <GettingFoodLoading v-if="loading" />
  <NoFood v-if="foodsList.length == 0 && !loading"></NoFood>

  <v-row>
    <Food transition="slide-x-transition" v-for="food in foodsList" :key="food.id" :food="food">
    </Food>
  </v-row>
  <v-snackbar v-model="snackbar" :timeout="5000" color="red accent-1" location="top">
    {{ snackbarMsg }}
  </v-snackbar>
</template>

