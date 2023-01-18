import { defineStore } from 'pinia'
import FoodStateModel from './FoodStateModel'
import axios from '../api'

const actions = {
    async getFoodsList(queryName?: string, queryValue?: number) {
        let url: string;
        if (queryName && queryValue)
            url = `foods?${queryName}_like=${queryValue}`
        else
            url = 'foods'
        await axios.get(url).then(res => {
            this.foodsList = res?.data
        }).catch(err => {
            // snackbar.value = true
            // snackbarMsg.value = err
        })
    }
}

const getters = {
    searchFoodsByName() { }
}

const useFoodsListStore = defineStore({
    id: 'food',
    state: (): FoodStateModel => ({
        foodsList: [],
        query: ''
    }),
    actions,
    getters
})


export default useFoodsListStore