import {createStore} from 'vuex'
import wishlist from "./store/modules/wishlist";
import user from "./store/modules/user";
import cart from "./store/modules/cart";
import rating from "./store/modules/rating";
import products from "./store/modules/products";
import orders from "./store/modules/orders";
import comments from "./store/modules/comments";
import personalAccount from "./store/modules/personal-account";

export const store = createStore({
    // export default {orders
    //     state: {},
    //     getters: {},
    //     actions: {},
    //     mutations: {}
    // }
    modules:{
        wishlist,
        user,
        cart,
        products,
        rating,
        orders,
        comments,
        personalAccount,
    },
});

