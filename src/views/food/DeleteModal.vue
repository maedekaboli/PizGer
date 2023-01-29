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
    <v-dialog :persistent="persistent" v-model="showModal" transition="dialog-bottom-transition">
        <v-row justify="center">
            <v-col cols="md-5">
                <v-card>
                    <v-progress-linear color="#6200ee" indeterminate v-if="modalLoading"></v-progress-linear>
                    <v-img src="/modalBg.jpg" class="align-end" gradient=" rgba(0,0,0,.5), rgba(0,0,0,.5)"
                        height="200px" cover>
                        <v-sheet color="#ffffffd6"  height="200px">
                            <v-card-text>
                                <div class="text-h6">
                                    <slot name="text"></slot>
                                </div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn :disabled="modalLoading" color="primary" variant="flat" rounded="pill"
                                    @click="onAgree">
                                    Agree
                                </v-btn>
                                <v-btn rounded="pill" variant="outlined" @click="close">Close</v-btn>
                            </v-card-actions>
                        </v-sheet>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-dialog>
</template>