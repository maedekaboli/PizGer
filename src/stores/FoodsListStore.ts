import { defineStore } from 'pinia'
import FoodStateModel from './FoodStateModel'
import axios from '../api'

const useFoodsListStore = defineStore({
    id: 'food',
    state: (): FoodStateModel => ({
        foodsList: []
    }),
    actions: {
        async getFoodsList() {
            await axios.get('foods').then(res => {
                this.foodsList = res?.data
            }).catch(err => {
                // snackbar.value = true
                // snackbarMsg.value = err
            })
        }
    }
})

export default useFoodsListStore