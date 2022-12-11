export default {
    state: {
        cartProduct : [],
        cartCount : [],
        subtotalPrice: null,
        totalPrice: null,
    },
    getters: {
        getCart(state){
            return state.cartProduct
        },
    },
    actions: {
        addToCart(ctx, {id, qty, update}){
            axios.post("/api/cart/add", {"product_id": id, "product_qty": qty, 'update' : Number(update)})
            .then(res =>{
                // console.log(res.data.status)
                Toast.fire({
                    icon: 'success',
                    title: res.data.status
                })
                let cartProduct = res.data;
                ctx.commit('updateCart', cartProduct)
            })
        },

        removeFromCart(ctx, {id}){
            axios.post("/api/cart/remove", {"product_id": id})
            .then(res =>{
                Toast.fire({
                    icon: 'warning',
                    title: 'Removed from cart! '
                })
                // console.log(res)
                let cartProduct = res.data;
                ctx.commit('updateCart', cartProduct)
            })
        },

        getCart(ctx){
            axios.get("/api/cart/get")
                .then(res =>{
                    // console.log(res)
                    let cartProducts = res.data;

                    ctx.commit('updateCart', cartProducts)
                })
        },
    },
    mutations: {
        updateCart(state, cartProduct){
            state.cartProduct = cartProduct
        },
    }
}
