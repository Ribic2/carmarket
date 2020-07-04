import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes:[
        {
            path: '/',
            name: 'index',
            component: ()=>import('./Components/Survey/index.vue')
        }
    ]
})

export default router

