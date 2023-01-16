<script setup lang="ts">
import { ref } from 'vue'
const selected = ref<string[]>([])
</script>

<template>
    <v-col cols="md-12">
        <v-card class="px-6">
            <v-row>
                <v-col cols="md-7">
                    <v-card-title class="mb-8">
                        Food
                    </v-card-title>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field model-value="John Doe" label="name" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field model-value="John Doe" label="price" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea label="description" auto-grow variant="outlined" rows="3" row-height="25"
                                shaped></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="auto">
                            <v-checkbox v-model="selected" label="Jojgufytdryhn" value="John"></v-checkbox></v-col>
                        <v-col cols="auto">
                            <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="md-5" class="border-left resturant my-3">
                    <v-card-title class="pt-0 mb-8">
                        Resturant
                    </v-card-title>
                    <v-col cols="12">
                            <v-text-field model-value="John Doe" label="name" variant="outlined"></v-text-field>
                        </v-col>
                </v-col>
            </v-row>
        </v-card>
    </v-col>
</template>

<style>
.resturant {
    border-left: 1px solid rgb(226, 223, 223);
}
</style>