<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from 'pinia'
import FoodType from "./models/FoodType";
import useFoodsListStore from "../../stores/food/FoodsListStore";

const props = defineProps<{
    food: FoodType;
}>();

const show = ref(false);
const { showModal, foodToDelete } = storeToRefs(useFoodsListStore())

const onShowDeleteModal = () => {
    showModal.value = true;
    foodToDelete.value = props.food
}

const foodImg = computed(() => {
    return `https://api.lorem.space/image/${props.food.category == 1 ? "pizza" : "burger"
        }?w=365&h=200&hash=${props.food.id}`;
});
const lazySrc = computed(() => {
    return props.food.category == 1 ? "/pizza-bg.jpg" : "/burger-bg.jpg";
});
</script>

<template>
    <v-col cols="md-4 Product" sm="6">
        <v-card class="mx-auto" min-height="375px">
            <v-img :lazySrc="lazySrc" :src="foodImg" height="200px" cover>
                <template v-slot:placeholder>
                    <div class="d-flex align-end justify-center fill-height">
                        <v-progress-linear color="#6200ee" indeterminate></v-progress-linear>
                    </div>
                </template>
            </v-img>
            <Transition name="fade">
                <v-card-title class="pb-0">
                    {{ food.name }}
                </v-card-title>
            </Transition>
            <v-card-subtitle>
                <v-icon> mdi-map-marker </v-icon>
                {{ food.resturant.address }}</v-card-subtitle>
            <v-chip class="mx-2 mt-6" color="indigo">
                <v-icon start icon="mdi-currency-usd"></v-icon>
                {{ food.price }}
            </v-chip>

            <v-card-actions>
                <router-link :to="`/food/${food.id}`">
                    <v-btn color="blue" variant="outlined" size="x-small" icon="mdi-pencil-outline"></v-btn>
                </router-link>
                <v-btn @click="onShowDeleteModal" color="red" class="ml-2" variant="outlined" size="x-small"
                    icon="mdi-trash-can-outline"></v-btn>
                <v-spacer></v-spacer>

                <v-btn v-if="food.desc" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="show = !show"></v-btn>
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
.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter-active {
    transition: all 2s ease;
}

.fade-leave-from {}

.fade-leave-to {}

.fade-leave-active {}

.v-card .v-card-title {
    line-height: 23px;
}

.v-card .v-card-subtitle {
    font-size: 0.775rem;
}
</style>
