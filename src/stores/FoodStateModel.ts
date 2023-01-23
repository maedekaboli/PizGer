import FoodType from '../views/food/models/FoodType';

export default interface FoodStateModel {
    foodsList: FoodType[]
    query: string
    food: FoodType
    loading: boolean
}