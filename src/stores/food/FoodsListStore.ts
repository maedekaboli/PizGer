import { defineStore } from 'pinia'
import { ref } from 'vue'
import FoodType from '../../views/food/models/FoodType'
import axios from '../../api'
import router from '../../routes'

const useFoodsListStore = defineStore('food', () => {
    const foodsList = ref<FoodType[]>([])
    const query = ref('')
    const food = ref<FoodType>({
        "name": "",
        "price": 0,
        "desc": "",
        "id": 0,
        "category": 0,
        "ingredients": []
    })
    const loading = ref(false)

    const editFood = (food: FoodType) => {
        axios.put(`foods/${food.id}`, food).then(res => {
        }).catch(err => {
        })
    }
    const getFood = (id: number) => {
        axios.get(`foods/${id}`).then(res => {
            food.value = res?.data
        }).catch(err => {
            if (err?.response?.status === 404) {
                router.push({ name: 'NotFound' })
            }
        })
    }
    const getFoodsList = (queryName?: string, queryValue?: number | string) => {
        loading.value = true
        let url: string;
        if (queryName && queryValue)
            url = `foods?${queryName}_like=${queryValue}`
        else
            url = 'foods'
        axios.get(url).then(res => {
            foodsList.value = res?.data
            loading.value = false
        }).catch(err => {
            loading.value = false
        })
    }
    const deleteFood = (id: number) => {
        axios.delete(`foods/${id}`).then(res => {
            foodsList.value = foodsList.value.filter((f: FoodType) => f.id != id)
        }).catch(err => {

        })
    }
    const addFood = (params: FoodType) => {
        loading.value = true
        axios.post(`foods`, params).then(res => {
            foodsList.value.unshift(res?.data)
            loading.value = false
        }).catch(err => {
            loading.value = false
        })
    }

    return { foodsList, query, food, loading, addFood, deleteFood, getFoodsList, getFood, editFood }
})

export default useFoodsListStore