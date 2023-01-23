<script setup lang="ts">
const props = defineProps<{
    showModal: boolean
}>()
</script>


<template>
    <v-dialog v-model="props.showModal" transition="dialog-bottom-transition">
        <v-row justify="center">
            <v-col cols="md-5">
                <v-card>
                    <v-img src="/modalBg.jpg" class="align-end" gradient=" rgba(0,0,0,.5), rgba(0,0,0,.5)"
                        height="200px" cover>
                        <v-sheet color="#ffffffd6">
                            <v-card-text>
                                <div class="text-h5 pa-12">Hello world!</div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn variant="text">Close</v-btn>
                            </v-card-actions>
                        </v-sheet>
                    </v-img>

                </v-card>
            </v-col>
        </v-row>
    </v-dialog>
</template>