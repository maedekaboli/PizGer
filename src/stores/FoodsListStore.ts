import { defineStore } from 'pinia'
import FoodType from '../layout/food/models/FoodType'
import FoodStateModel from './FoodStateModel'
import axios from '../api'

const actions = {
    async editFood (food: FoodType) {
        await axios.put(`foods/${food.id}`,food).then(res => {
            console.log(res)
        }).catch(err => {
        })
    },
    async getFood(id: number) {
        await axios.get(`foods/${id}`).then(res => {
            this.food = res?.data
        }).catch(err => {
        })
    },
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
        })
    },
    async deleteFood(id: number) {
        await axios.delete(`foods/${id}`).then(res => {
            this.foodsList = this.foodsList.filter((f: FoodType) => f.id != id)
        }).catch(err => {

        })
    },
    async addFood(params: any) {
        this.loading = true
        await axios.post(`foods`, params).then(res => {
            this.foodsList.unshift(res?.data)
            this.loading = false
        }).catch(err => {
            this.loading = false
        })
    }
}

const getters = {
    getFoodDetail() {
        return this.food
    },
}

const useFoodsListStore = defineStore({
    id: 'food',
    state: (): FoodStateModel => ({
        foodsList: [],
        query: '',
        food: {
            "name": "",
            "price": 0,
            "desc": "",
            "id": 0,
            "category": 0,
            "ingredients": []
        },
        loading: false
    }),
    actions,
    getters
})


export default useFoodsListStore