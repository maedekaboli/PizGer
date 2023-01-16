<script setup lang="ts">
import axios from '../../api'
import { ref, defineAsyncComponent } from 'vue'
import FoodType from './FoodType';
const Product = defineAsyncComponent(() => import('./Food.vue'));

const snackbar = ref(false)
const loaded = ref(false)
const loading = ref(false)
const snackbarMsg = ref<null | string>(null)

const products = ref<FoodType[]>([])
await axios.get('products').then(res => {
  products.value = res?.data?.products
}).catch(err => {
  snackbar.value = true
  snackbarMsg.value = err
})

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

    <v-col cols="md-6">
      <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
        append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
    </v-col>
    <v-col cols="md-6">
      <v-btn-toggle borderless color="deep-purple-accent-3">
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
    <Product v-for="product in products" :key="product.id" :product="product">
    </Product>
  </div>
  <v-snackbar v-model="snackbar" :timeout="5000" color="red accent-1" location="top">
    {{ snackbarMsg }}
  </v-snackbar>
</template>

