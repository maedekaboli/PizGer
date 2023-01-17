<script setup lang="ts">
import { ref } from 'vue'
import FoodType from './FoodType'

defineProps<{
    product: FoodType
}>()

const show = ref(false)
</script>


<template>
    <v-col cols="md-4 Product">
        <v-card class="mx-auto">
            <v-img :src="`https://api.lorem.space/image/burger?w=365&h=200&hash=${product.id}`
            " height="200px" cover></v-img>

            <v-card-title class="pb-0">
                {{ product.title }}
            </v-card-title>
            <v-card-subtitle>{{ product.brand }}</v-card-subtitle>
            <v-chip class="mx-2 mt-6" color="indigo">
                <v-icon start icon="mdi-currency-usd"></v-icon>
                {{ product.price }}
            </v-chip>

            <v-card-actions>
                <router-link :to="`/food/${product.id}`">
                    <v-btn color="blue" variant="outlined" size="x-small" icon="mdi-pencil-outline"></v-btn>
                </router-link>
                <v-btn color="red" variant="outlined" size="x-small" icon="mdi-trash-can-outline"></v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <div class="mt-6 mx-2">
                        <v-chip class="mr-1 mb-2" v-for="i in 10" :key="i" variant="elevated" color="#546E7A"
                            size="x-small">
                            Chip and khiar
                        </v-chip>
                    </div>
                    <v-card-text>
                        {{ product.description }}
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
