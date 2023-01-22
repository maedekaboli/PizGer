import { ref } from 'vue'
import SelectedFoodType from '../models/SelectedFoodType'

const foods = ref<SelectedFoodType[]>([
    { value: 1, name: 'Pizza', icon: 'mdi-pizza', color: 'red', showName: true, iconSize: '25px' },
    { value: 0, name: 'All', icon: 'mdi-clipboard-list-outline', color: 'black', showName: true, iconSize: '25px' },
    { value: 2, name: 'Burger', icon: 'mdi-hamburger', color: '#FFAB00', showName: true, iconSize: '25px' }
])
const selectedFood = ref<SelectedFoodType>({
    value: 0, name: 'All',
    icon: 'mdi-clipboard-list-outline', color: 'black', showName: true
})

export { foods, selectedFood }