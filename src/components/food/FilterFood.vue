<script setup lang="ts">
import { ref, watch } from 'vue'
import SelectedFoodType from './selectedFoodType'
import useFoodsListStore from '../../stores/FoodsListStore'

const { getFoodsList } = useFoodsListStore()
const loaded = ref(false)
const loading = ref(false)
const foods = ref<SelectedFoodType[]>([
    { value: 1, name: 'Pizza', icon: 'mdi-pizza', color: 'red' },
    { value: 0, name: 'All', icon: 'mdi-clipboard-list-outline', color: 'black' },
    { value: 2, name: 'Burger', icon: 'mdi-hamburger', color: '#FFAB00' }
])
const selectedFood = ref<SelectedFoodType>({ value: 0, name: 'All', icon: 'mdi-clipboard-list-outline', color: 'black' })
const query = ref('')

const onFilter = () => {
    getFoodsList(`name`, query.value)
    loading.value = true

    setTimeout(() => {
        loading.value = false
        loaded.value = true
    }, 2000)
}
watch(
    () => selectedFood.value,
    newValue => {
        getFoodsList(`category`, newValue.value)
    }
)

</script>


<template>
    <v-row class="fill-height mb-10" align-content="center" justify="center">
        <v-col cols="md-6" sm="8">
            <v-text-field v-model="query" :loading="loading" density="compact" variant="solo" label="Search"
                append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onFilter"></v-text-field>
        </v-col>
        <v-col cols="md-6" sm="4">
            <v-btn-toggle elevation="1" rounded="xl" v-model="selectedFood" mandatory borderless
                color="deep-purple-accent-3">
                <v-btn :value="n" v-for="n in foods" :key="n">
                    <span class="hidden-sm-and-down mr-2">{{ n.name }}</span>
                    <v-icon :color="n.color" center>
                        {{ n.icon }}
                    </v-icon>
                </v-btn>
            </v-btn-toggle>
        </v-col>
    </v-row>
</template>