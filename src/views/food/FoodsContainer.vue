<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const FoodList = defineAsyncComponent(() => import('./FoodList.vue'))
const GettingFoodLoading = defineAsyncComponent(() => import('./GettingFoodLoading.vue'))

</script>

<template>
    <Suspense>
        <FoodList />
        <template #fallback>
            <GettingFoodLoading />
        </template>
    </Suspense>
</template>