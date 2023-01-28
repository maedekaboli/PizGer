import { createRouter, createWebHistory } from 'vue-router'
const FoodsContainer = () => import('../views/food/FoodsContainer.vue')
const EditFood = () => import('../views/food/editFood/EditFood.vue')
const NotFound = () => import('../views/NotFound.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: FoodsContainer },
        { path: '/food', component: EditFood },
        { path: '/food/:id', component: EditFood },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
})
export default router