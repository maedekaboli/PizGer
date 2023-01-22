import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
const AllFoods = () => import('./layout/AllFoods.vue')
const EditFood =() => import('./layout/food/editFood/EditFood.vue')
const NotFound = defineAsyncComponent(() => import('./layout/NotFound.vue'))

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