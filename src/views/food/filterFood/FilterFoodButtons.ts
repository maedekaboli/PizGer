import { ref } from 'vue'
import SelectedFoodType from '../models/SelectedFoodType'

const foods = ref<SelectedFoodType[]>([
    { value: 1, name: 'pizza', icon: 'mdi-pizza', color: 'red', showName: true, iconSize: '25px' },
    { value: 0, name: 'all', icon: 'mdi-clipboard-list-outline', color: 'black', showName: true, iconSize: '25px' },
    { value: 2, name: 'burger', icon: 'mdi-hamburger', color: '#FFAB00', showName: true, iconSize: '25px' }
])
const selectedFood = ref<SelectedFoodType>({
    value: 0,
    name: 'all',
    icon: 'mdi-clipboard-list-outline',
    color: 'black',
    showName: true,
    iconSize: "25px"
})

export { foods, selectedFood }