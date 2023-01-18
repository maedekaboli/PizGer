<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import useFoodsListStore from '../../stores/FoodsListStore'
import { storeToRefs } from 'pinia'

const Food = defineAsyncComponent(() => import('./Food.vue'))
const { foodsList } = storeToRefs(useFoodsListStore())
const { getFoodsList } = useFoodsListStore()
const snackbar = ref(false)
const loaded = ref(false)
const loading = ref(false)
const snackbarMsg = ref(null)

getFoodsList()

const onClick = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}
</script>

<template>
  <v-row class="fill-height mb-10" align-content="center" justify="center">

    <v-col cols="md-6" sm="8">
      <v-text-field :loading="loading" density="compact" variant="solo" label="Search" append-inner-icon="mdi-magnify"
        single-line hide-details @click:append-inner="onClick"></v-text-field>
    </v-col>
    <v-col cols="md-6" sm="4">
      <v-btn-toggle elevation="1" borderless mandatory rounded="xl" color="deep-purple-accent-3">
        <v-btn value="left">
          <span class="hidden-sm-and-down">Pizza</span>

          <v-icon color="red" end>
            mdi-pizza
          </v-icon>
        </v-btn>

        <v-btn value="center">
          <span class="hidden-sm-and-down">All</span>

          <v-icon end>
            mdi-clipboard-list-outline
          </v-icon>
        </v-btn>

        <v-btn value="right">
          <span class="hidden-sm-and-down">Burger</span>

          <v-icon color="#FFAB00
" end>
            mdi-hamburger
          </v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
  <div class="d-flex flex-row flex-wrap">
    <Food v-for="food in foodsList" :key="food.id" :food="food">
    </Food>
  </div>
  <v-snackbar v-model="snackbar" :timeout="5000" color="red accent-1" location="top">
    {{ snackbarMsg }}
  </v-snackbar>
</template>

