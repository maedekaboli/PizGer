<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const FoodList = defineAsyncComponent(() => import('./food/FoodList.vue'))
const GettingFoodLoading = defineAsyncComponent(() => import('./food/GettingFoodLoading.vue'))

</script>

<template>
    <Suspense>
        <FoodList />
        <template #fallback>
            <GettingFoodLoading />
        </template>
    </Suspense>
</template>