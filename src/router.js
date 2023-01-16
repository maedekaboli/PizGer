import { createRouter, createWebHistory } from 'vue-router'
import AllFoods from './layout/AllFoods.vue'
import EditFood from './components/food/EditFood.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AllFoods },
        { path: '/food/:id', component: EditFood }
    ]
})
export default router