<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useFoodsListStore from "../../stores/food/FoodsListStore";
const { modalLoading, showModal } = storeToRefs(useFoodsListStore())

defineProps<{
    persistent: boolean,
}>()

const emit = defineEmits(['onAgree'])
const onAgree = () => {
    emit('onAgree')
}
const close = () => {
    showModal.value = false
}
</script>

<template>
    <v-dialog :persistent="persistent" v-model="showModal" transition="dialog-bottom-transition" maxWidth="500px">
        <v-card class="bg-img" height="200px">
            <v-sheet height="200px" class="d-flex flex-wrap" color="#ffffffd6">
                <v-progress-linear color="#6200ee" indeterminate v-if="modalLoading"></v-progress-linear>
                <v-card-text>
                    <div class="text-h6">
                        <slot name="text"></slot>
                    </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn :disabled="modalLoading" color="primary" variant="flat" rounded="pill" @click="onAgree">
                        Agree
                    </v-btn>
                    <v-btn rounded="pill" variant="outlined" @click="close">Close</v-btn>
                </v-card-actions>
            </v-sheet>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.bg-img {
    background-image: url('/modalBg.jpg');
    background-position: center;
    background-size: cover;
}
</style>