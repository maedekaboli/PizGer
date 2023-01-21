import FoodType from '../components/food/models/FoodType';

export default interface FoodStateModel {
    foodsList: FoodType[]
    query: string
}