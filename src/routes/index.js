import { createRouter, createWebHistory } from 'vue-router'
const FoodsContainer = () => import('../views/food/FoodsContainer.vue')
const EditFood = () => import('../views/food/editFood/EditFood.vue')
const NotFound = () => import('../views/NotFound.vue')
const Chart = () => import('../views/chart/Chart.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: FoodsContainer },
        { path: '/food', component: EditFood },
        { path: '/food/:id', component: EditFood },
        { path: '/statistics', component: Chart },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
})
export default router