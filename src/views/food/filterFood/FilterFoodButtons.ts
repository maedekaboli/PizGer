import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from 'vue'
import SelectedFoodType from '../models/SelectedFoodType'

const foods = ref<SelectedFoodType[]>([
    { value: 1, name: t('generals.pizza'), icon: 'mdi-pizza', color: 'red', showName: true, iconSize: '25px' },
    { value: 0, name: t('generals.all'), icon: 'mdi-clipboard-list-outline', color: 'black', showName: true, iconSize: '25px' },
    { value: 2, name: t('generals.burger'), icon: 'mdi-hamburger', color: '#FFAB00', showName: true, iconSize: '25px' }
])
const selectedFood = ref<SelectedFoodType>({
    value: 0,
    name: 'All',
    icon: 'mdi-clipboard-list-outline',
    color: 'black',
    showName: true,
    iconSize: "25px"
})

export { foods, selectedFood }