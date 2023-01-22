import { defineStore } from 'pinia'
import FoodType from '../layout/food/models/FoodType'
import FoodStateModel from './FoodStateModel'
import axios from '../api'

const actions = {
    async getFoodsList(queryName?: string, queryValue?: number | string) {
        this.loading = true
        let url: string;
        if (queryName && queryValue)
            url = `foods?${queryName}_like=${queryValue}`
        else
            url = 'foods'
        await axios.get(url).then(res => {
            this.foodsList = res?.data
            this.loading = false
        }).catch(err => {
            this.loading = false
            // snackbar.value = true
            // snackbarMsg.value = err
        })
    },
    async deleteFood(id: number) {
        await axios.delete(`foods/${id}`).then(res => {
            this.foodsList = this.foodsList.filter((f: FoodType) => f.id != id)
        }).catch(err => {
            // snackbar.value = true
            // snackbarMsg.value = err
        })
    },
    async addFood(params: any) {
        this.loading = true
        await axios.post(`foods`, params).then(res => {
            this.foodsList.unshift(res?.data)
            this.loading = false
        }).catch(err => {
            this.loading = false
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
        query: '',
        loading: false
    }),
    actions,
    getters
})


export default useFoodsListStore