import { defineStore } from 'pinia'
import { ref } from 'vue'
import FoodType from '../../views/food/models/FoodType'
import axios from '../../api'
import router from '../../routes'

const useFoodsListStore = defineStore('food', () => {
    const modalLoading = ref(false)
    const showModal = ref(false)
    const foodToDeleteId = ref(0)
    const foodsList = ref<FoodType[]>([])
    const query = ref('')
    const food = ref<FoodType>({
        "name": "",
        "price": 0,
        "desc": "",
        "id": 0,
        "category": 1,
        "ingredients": []
    })
    const loading = ref(false)

    const editFood = (food: FoodType) => {
        loading.value = true
        axios.put(`foods/${food.id}`, food).then(res => {
            setTimeout(() => {
                loading.value = false
            }, 2000)
        }).catch(err => {
            loading.value = false
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
    const deleteFood = () => {
        modalLoading.value = true
        axios.delete(`foods/${foodToDeleteId.value}`).then(res => {
            setTimeout(() => {
                foodsList.value = foodsList.value.filter((f: FoodType) => f.id != foodToDeleteId.value)
                modalLoading.value = false
                showModal.value = false
            }, 2000)
        }).catch(err => {
            modalLoading.value = false
        })
    }
    const addFood = (params: FoodType) => {
        loading.value = true
        axios.post(`foods`, params).then(res => {
            foodsList.value.unshift(res?.data)
            setTimeout(() => {
                loading.value = false
                router.push({ name: 'Home' })
            }, 2000)
        }).catch(err => {
            loading.value = false
        })
    }

    return { foodsList, query, food, loading, modalLoading, showModal, foodToDeleteId, addFood, deleteFood, getFoodsList, getFood, editFood }
})

export default useFoodsListStore