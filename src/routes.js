import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import LoginPage from './components/LoginPage'
import AddRes from './components/AddRes'
import UpdateRes from './components/UpdateRes'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:"HomePage",
        component:HomePage,
        path:'/'
    },
    {
        name:"SignUp",
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:"LoginPage",
        component:LoginPage,
        path:'/log-in'
    },
    {
        name:"AddRes",
        component:AddRes,
        path:'/add-res'
    },
    {
        name:"UpdateRes",
        component:UpdateRes,
        path:'/update-res/:id'
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router