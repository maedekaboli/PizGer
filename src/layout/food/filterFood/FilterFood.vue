<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { foods, selectedFood } from './FilterFoodButtons'
import SelectedFoodType from '../models/SelectedFoodType'
import useFoodsListStore from '../../../stores/FoodsListStore'

const AppToggleButton = defineAsyncComponent(() => import('../../../components/AppToggleButton.vue'))
const { getFoodsList } = useFoodsListStore()
const loaded = ref(false)
const loading = ref(false)
const query = ref('')

const onFilter = () => {
    getFoodsList(`name`, query.value)
    loading.value = true

    setTimeout(() => {
        loading.value = false
        loaded.value = true
    }, 2000)
}

const onToggleBtns = (selectedBtn: SelectedFoodType) => {
    getFoodsList(`category`, selectedBtn.value)
}

</script>


<template>
    <v-row class="fill-height mb-10" align-content="center" justify="center">
        <v-col cols="md-6" sm="8">
            <v-text-field v-model="query" :loading="loading" density="compact" variant="solo" label="Search"
                append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onFilter"></v-text-field>
        </v-col>
        <v-col cols="md-6" sm="4">
            <AppToggleButton :selectedFood="selectedFood" :foods="foods" @toggleBtns="onToggleBtns"></AppToggleButton>
        </v-col>
    </v-row>
</template>