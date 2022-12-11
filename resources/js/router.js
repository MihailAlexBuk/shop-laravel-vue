import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Catalog from "./components/products/Catalog";
import Cart from "./components/products/Cart";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Checkout from "./components/products/Checkout";
import Wishlist from "./components/products/Wishlist";
import Home from "./components/Home";
import DetailsProduct from "./components/products/DetailsProduct";
import { createRouter, createWebHistory } from 'vue-router'
import PAHome from "./components/personal-account/PAHome";
import PASettings from "./components/personal-account/PASettings";
import PAComments from "./components/personal-account/PAComments";
import PAOrders from "./components/personal-account/PAOrders";
import PAOrderItem from "./components/personal-account/PAOrderItem";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',  component: Home, name: 'home'},
        {path: '/login', component:Login, name:'login'},
        {path: '/register', component:Register, name:'register'},
        {path: '/catalog', component:Catalog, name:'catalog'},
        {path: '/catalog/:id', component:DetailsProduct, name:'product'},
        {path: '/cart', component:Cart, name:'cart'},
        {path: '/wishlist', component:Wishlist, name:'wishlist'},
        {path: '/contacts', component:Contacts, name:'contacts'},
        {path: '/about', component:About, name:'about'},
        {path: '/checkout', component:Checkout, name:'checkout'},

        {path: '/personal-account', component:PAHome, name:'personal-account'},
        {path: '/personal-account/orders', component:PAOrders, name:'pa-orders'},
        {path: '/personal-account/orders/:id', component:PAOrderItem, name:'orderItem'},
        {path: '/personal-account/comments', component:PAComments, name:'pa-comments'},
        {path: '/personal-account/settings', component:PASettings, name:'pa-settings'},
    ],
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-xsrf-token')

    // if(!token){
    //     if(to.name === 'login' || to.name === 'register'){
    //         next()
    //     } else{
    //         next({name: 'login'})
    //     }
    // }

    if(!token){
        if(to.name === 'checkout' ||
            to.name === 'wishlist' ||
            to.name === 'personal-account' ||
            to.name === 'cart' ||
            to.name === 'pa-orders' ||
            to.name === 'pa-comments' ||
            to.name === 'pa-settings'
        )

        {
            next({name: 'login'})
        } else{
            next()
        }
    }

    if((to.name === 'login' || to.name === 'register') && token){
        next({name: 'home'})
    } else{
        next()
    }


    next()
})

export default router
