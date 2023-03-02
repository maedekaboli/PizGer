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
const cardActionBtns = ref([
    { tooltip: 'detail', icon: 'mdi-dots-horizontal', color: 'blue', link: 'detail' },
    { tooltip: 'edit', icon: 'mdi-pencil-outline', color: 'orange', link: 'edit' },
])
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
            <router-link :to="`/food/edit/${food.id}`">
                <v-img :lazySrc="lazySrc" :src="foodImg" height="200px" cover>
                    <template v-slot:placeholder>
                        <div class="d-flex align-end justify-center fill-height">
                            <v-progress-linear color="#6200ee" indeterminate></v-progress-linear>
                        </div>
                    </template>
                </v-img>
            </router-link>
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
                <template v-for="(btn, index) in cardActionBtns" :key="index">
                    <router-link :to="`/food/${btn.link}/${props.food.id}`">
                        <v-btn :color="btn.color" variant="outlined" class="mr-2" icon
                            size="x-small">
                            <v-icon>{{ btn.icon }}</v-icon>
                            <v-tooltip activator="parent" location="bottom">{{ btn.tooltip }}</v-tooltip>
                        </v-btn>
                    </router-link>
                </template>
                <v-btn @click="onShowDeleteModal" color="red" icon variant="outlined" size="x-small">
                    <v-icon>mdi-trash-can-outline</v-icon>
                    <v-tooltip activator="parent" location="bottom">delete</v-tooltip>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn v-if="food.desc" icon @click="show = !show">
                    <v-icon>mdi-{{ show? 'chevron-up': 'chevron-down' }}</v-icon>
                    <v-tooltip activator="parent" location="bottom">description</v-tooltip>
                </v-btn>
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
