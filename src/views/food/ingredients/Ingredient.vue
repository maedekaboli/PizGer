<script lang="ts" setup>
import IngridentsEnum from './IngridentsEnum'

defineProps<{
    item: string;
}>();
</script>


<template>
    <v-chip filter variant="outlined">
        {{ IngridentsEnum[item] }}
    </v-chip>
</template>