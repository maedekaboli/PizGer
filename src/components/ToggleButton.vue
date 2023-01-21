
<script setup lang="ts">
import { ref, watch } from 'vue'
import SelectedFoodType from '../layout/food/models/SelectedFoodType'

const props = defineProps<{
    selectedFood: SelectedFoodType,
    foods: SelectedFoodType[]
}>()
const emit = defineEmits(['toggleBtns'])

const selectedFood = ref<SelectedFoodType>(props.selectedFood)

watch(
    () => selectedFood.value,
    () => {
        emit('toggleBtns', selectedFood.value)
    }
)
</script>

<template>
    <v-btn-toggle elevation="1" rounded="xl" v-model="selectedFood" mandatory borderless color="deep-purple-accent-3">
        <v-btn :value="n" v-for="n in foods" :key="n">
            <span class="hidden-sm-and-down mr-2" v-if="n.showName">{{ n.name }}</span>
            <v-icon :color="n.color" center>
                {{ n.icon }}
            </v-icon>
        </v-btn>
    </v-btn-toggle>
</template>