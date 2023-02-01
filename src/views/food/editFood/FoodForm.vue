<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import useFoodsListStore from '../../../stores/food/FoodsListStore'
import IngridentsEnum from '../ingredients/IngridentsEnum'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required().label('Name'),
    price: yup.string().required().label('Price'),
});

const { food } = storeToRefs(useFoodsListStore())
const Ingredient = defineAsyncComponent(() => import('../ingredients/Ingredient.vue'))
const ingridentsEnumLength = Object.values(IngridentsEnum).length
const ingredients = ref(Object.values(IngridentsEnum).slice(ingridentsEnumLength / 2, ingridentsEnumLength))

function onSubmit(values) {
    console.log('Submitted with', values);
}
</script>

<template>
    <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
        <v-row>
            <v-col cols="12" sm="6">
                <Field name="name" v-model="food.name" v-slot="{ field, errors }">
                    <v-text-field v-bind="field" v-model="food.name" label="name" variant="outlined"
                        :error-messages="errors"></v-text-field>
                </Field>
            </v-col>
            <v-col cols="12" sm="6">
                <Field name="price" v-model="food.price" v-slot="{ field, errors }">
                    <v-text-field v-bind="field" v-model="food.price" label="price" variant="outlined"
                        :error-messages="errors"></v-text-field>
                </Field>
            </v-col>
            <v-col cols="12">
                <v-textarea v-model="food.desc" label="description" auto-grow variant="outlined" rows="3"
                    row-height="25" shaped></v-textarea>
            </v-col>
        </v-row>
        <v-btn color="primary" class="mr-4" type="submit"> Submit </v-btn>

    </Form>
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