<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import useFoodsListStore from '../../stores/FoodsListStore'
import { storeToRefs } from 'pinia'

const Food = defineAsyncComponent(() => import('./Food.vue'))
const NoFood = defineAsyncComponent(() => import('./NoFood.vue'))
const FilterFood = defineAsyncComponent(() => import('./FilterFood.vue'))

const { foodsList } = storeToRefs(useFoodsListStore())
const { getFoodsList } = useFoodsListStore()
const snackbar = ref(false)
const snackbarMsg = ref(null)

getFoodsList()

</script>

<template>
  <NoFood v-if="foodsList.length == 0"></NoFood>
  <template v-else>
    <div>
      <FilterFood></FilterFood>
      <div class="d-flex flex-row flex-wrap">
        <Food v-for="food in foodsList" :key="food.id" :food="food">
        </Food>
      </div>
    </div>
  </template>
  <v-snackbar v-model="snackbar" :timeout="5000" color="red accent-1" location="top">
    {{ snackbarMsg }}
  </v-snackbar>
</template>

