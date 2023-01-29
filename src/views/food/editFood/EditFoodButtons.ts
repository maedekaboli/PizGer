import { ref } from 'vue'
import SelectedFoodType from '../models/SelectedFoodType'

const foods = ref<SelectedFoodType[]>([
    {
        value: 1, name: 'Pizza', icon: 'mdi-pizza', color: 'red', showName: false,
        iconSize: '30px'
    },
    {
        value: 2, name: 'Burger', icon: 'mdi-hamburger', color: '#FFAB00', showName: false,
        iconSize: '30px'
    }
])
const selectedFood = ref<SelectedFoodType>({
    value: 1,
    name: 'Pizza',
    icon: 'mdi-pizza',
    color: 'red',
    showName: false,
    iconSize: "30px"
})

export { foods, selectedFood }