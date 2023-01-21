import { createRouter, createWebHistory } from 'vue-router'
import AllFoods from './layout/AllFoods.vue'
import EditFood from './components/food/EditFood.vue'
import NotFound from './layout/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AllFoods },
        { path: '/food/:id', component: EditFood },
        { path: '/food', component: EditFood },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ]
})
export default router