export default {
    state: {
        user_orders: null,
        user_order_item: null,
        user_data: null,
    },
    getters: {
        getUserOrders(state){
            return state.user_orders;
        },

        getUserData(state){
            return state.user_data;
        },

        getUserOrderItem(state){
            return state.user_order_item;
        },
    },
    actions: {
        userOrders(ctx){
            axios.get('/api/personal-account/user-orders').then(res => {
                // console.log(res.data);

                ctx.commit('setUserOrders', res.data);
            }).catch(err => {
                // console.log(err)
            })
        },

        getUserData(ctx){
            axios.get('/api/personal-account/user-data').then(res =>{
                console.log(res.data)
                ctx.commit('setUserData', res.data)
            })
        },

        updateUserData(ctx, user){
            axios.post('/api/personal-account/update-user-data', user).then(res =>{
                console.log(res.data)
                ctx.commit('setUserData', res.data)
            })
        },

        userOrderItem(ctx, id){
            axios.get(`/api/personal-account/user-orders/${id}`).then(res => {
                // console.log(res);

                ctx.commit('setUserOrderItem', res.data);
            }).catch(err => {
                console.log(err)
            })
        },

    },
    mutations: {
        setUserOrders(state, user_orders){
            state.user_orders = user_orders;
        },

        setUserData(state, user_data){
            state.user_data = user_data;
        },

        setUserOrderItem(state, user_order_item){
            state.user_order_item = user_order_item;
        },
    }
}
