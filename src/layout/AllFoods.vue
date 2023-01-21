<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const FoodList = defineAsyncComponent(() => import('./food/FoodList.vue'))
</script>

<template>
    <Suspense>
        <FoodList />
        <template #fallback>
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                    Getting foods, please wait!
                </v-col>
                <v-col cols="6" class="d-flex justify-center ">
                    <v-progress-circular :size="50" :width="2" color="purple" indeterminate></v-progress-circular>
                </v-col>
            </v-row>
        </template>
    </Suspense>
</template>