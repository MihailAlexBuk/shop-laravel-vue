export default {
    state: {
        orders: null,
    },
    getters: {
        getOrders(state){
            return state.orders;
        },
    },
    actions: {
        placeOrder(ctx, {user, cart}){
            axios.post('api/place-order', {'user' : user, 'cart' : cart}).then(res => {
                if(res){
                    Toast.fire({
                        icon: 'success',
                        title: 'Order placed Successfully'
                    })
                }
            })
        },

        proceedToPay(ctx, {user, cart}){
            axios.post('api/proceed-to-pay', {'user' : user, 'cart' : cart}).then(res => {
                if(res){
                    Toast.fire({
                        icon: 'success',
                        title: 'Order placed Successfully'
                    })
                }
            })
        },
    },
    mutations: {
        setOrders(state, orders){
            state.orders = orders;
        },
    }
}
