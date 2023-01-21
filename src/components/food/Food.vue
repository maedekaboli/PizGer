<script setup lang="ts">
import { ref, computed } from 'vue'
import FoodType from './FoodType'
import useFoodsListStore from '../../stores/FoodsListStore'
const props = defineProps<{
    food: FoodType
}>()

const show = ref(false)
const { deleteFood } = useFoodsListStore()
const onDeleteFood = (id: number) => {
    deleteFood(id)
}

const foodImg = computed(() => {
    return `https://api.lorem.space/image/${props.food.category == 1 ? 'pizza' : 'burger'}?w=365&h=200&hash=${props.food.id}`
})
const lazySrc = computed(() => {
    return props.food.category == 1 ? '/pizza-bg.jpg' : '/burger-bg.jpg'
})

</script>


<template>
    <v-col cols="md-4 Product" sm="6">
        <v-card class="mx-auto">
            <v-img :lazySrc="lazySrc" :src="foodImg" height="200px" cover>
                <template v-slot:placeholder>
                    <div class="d-flex align-end justify-center fill-height">
                        <v-progress-linear color="#6200ee" indeterminate></v-progress-linear>
                    </div>
                </template>
            </v-img>

            <v-card-title class="pb-0">
                {{ food.name }}
            </v-card-title>
            <v-card-subtitle>
                <v-icon> mdi-map-marker </v-icon>
                {{ 'food.brand' }}</v-card-subtitle>
            <v-chip class=" mx-2 mt-6" color="indigo">
                <v-icon start icon="mdi-currency-usd"></v-icon>
                {{ food.price }}
            </v-chip>

            <v-card-actions>
                <router-link :to="`/food/${food.id}`">
                    <v-btn color="blue" variant="outlined" size="x-small" icon="mdi-pencil-outline"></v-btn>
                </router-link>
                <v-btn @click="onDeleteFood(food.id)" color="red" class="ml-2" variant="outlined" size="x-small"
                    icon="mdi-trash-can-outline"></v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                        {{ food.desc }}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-col>
</template>


<style>
.v-card .v-card-title {
    line-height: 23px;
}

.v-card .v-card-subtitle {
    font-size: 0.775rem;
}
</style>
