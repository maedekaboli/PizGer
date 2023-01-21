import FoodType from '../layout/food/models/FoodType';

export default interface FoodStateModel {
    foodsList: FoodType[]
    query: string
    loading: boolean
}