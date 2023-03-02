<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import useFoodsListStore from '../../../stores/food/FoodsListStore'
import IngridentsEnum from '../ingredients/IngridentsEnum'
import { Field } from 'vee-validate'

const { food } = storeToRefs(useFoodsListStore())
const Ingredient = defineAsyncComponent(() => import('../ingredients/Ingredient.vue'))
const ingridentsEnumLength = Object.values(IngridentsEnum).length
const ingredients = ref(Object.values(IngridentsEnum).slice(ingridentsEnumLength / 2, ingridentsEnumLength))
</script>

<template>
    <v-row class="pr-3">
        <v-col cols="12" sm="6">
            <Field name="name" v-model="food.name" v-slot="{ field, errors }">
                <v-text-field v-bind="field" v-model.trim="food.name" :label="$t('generals.name')" variant="outlined"
                    :error-messages="$t(errors.toString(), { value: $t('generals.name') })"></v-text-field>
            </Field>
        </v-col>
        <v-col cols="12" sm="6">
            <Field name="price" v-model="food.price" v-slot="{ field, errors }">
                <v-text-field v-bind="field" append-inner-icon="mdi-currency-usd" type="number" v-model.number="food.price"
                    :label="$t('foodForm.price')" variant="outlined"
                    :error-messages="$t(errors.toString(), { value: $t('foodForm.price') })"></v-text-field>
            </Field>
        </v-col>
        <v-col cols="12">
            <v-textarea v-model.trim="food.desc" :label="$t('foodForm.description')" auto-grow variant="outlined"
                rows="3" row-height="25" shaped></v-textarea>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-chip-group v-model="food.ingredients" selected-class="text-success" column multiple>
                <template v-for="item in ingredients" :key="item">
                    <Ingredient :item="item.toString()"></Ingredient>
                </template>
            </v-chip-group>
        </v-col>
    </v-row>
</template>