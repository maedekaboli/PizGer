<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useFoodsListStore from '../../../stores/food/FoodsListStore'
import { Field } from 'vee-validate'

const { food } = storeToRefs(useFoodsListStore())
</script>


<template>
    <v-card-title class="pl-3 mb-5">
        {{ $t('foodForm.resturant') }}
    </v-card-title>
    <v-col cols="12">
        <Field name="resturant.name" v-model="food.resturant.name" v-slot="{ field, errors }">
            <v-text-field v-model.trim="food.resturant.name" :label="$t('generals.name')" variant="outlined"
                v-bind="field" :error-messages="$t(errors.toString(), { value: $t('generals.name') })"></v-text-field>
        </Field>
    </v-col>
    <v-col cols="12">
        <Field name="resturant.address" v-model="food.resturant.address" v-slot="{ field, errors }">
            <v-textarea v-model.trim="food.resturant.address" :label="$t('foodForm.address')" auto-grow
                variant="outlined" rows="3" row-height="25" shaped v-bind="field"
                :error-messages="$t(errors.toString(), { value: $t('foodForm.address') })"></v-textarea>
        </Field>
    </v-col>
</template>