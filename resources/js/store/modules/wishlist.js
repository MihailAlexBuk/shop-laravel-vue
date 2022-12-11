export default {
    state: {
        wishlist: [],
        contained: false,
    },
    getters: {
        getWishlist(state){
            return state.wishlist
        },

        getItemInWishlist(state){
            return state.contained
        },
    },
    actions: {
        addToWishlist(ctx, {id}){
            axios.post("/api/wishlist/add", {'product_id': id})
                .then(res =>{
                    // console.log(res)
                    Toast.fire({
                        icon: 'success',
                        title: 'Item has been successfully added to wishlist! '
                    })
                    // let wishlist = res.data.data;
                    let data = true
                    ctx.commit('containedInWishlist', data)

                })
        },

        removeFromWishlist(ctx, {id}){
            axios.post("/api/wishlist/remove", {"product_id": id})
                .then(res =>{
                    // console.log(res)
                    Toast.fire({
                        icon: 'warning',
                        title: 'Item has been successfully removed from wishlist! '
                    })
                    let data = false
                    ctx.commit('containedInWishlist', data)
                })

        },

        checkItemFromWishlist(ctx, {id}){
            axios.post("/api/wishlist/checkItem", {id: id})
                .then(res =>{
                    let status;
                    if(res.data.status === 'true'){
                        status = true;
                    }else{
                        status = false
                    }
                    ctx.commit('containedInWishlist', status)
                })
        },

        getWishlist(ctx){
            axios.get("/api/wishlist/get")
                .then(res =>{
                    // console.log(res)
                    let wishlist = res.data;
                    ctx.commit('updateWishlist', wishlist)
                })
        },
    },
    mutations: {
        updateWishlist(state, wishlist){
            state.wishlist = wishlist
        },

        containedInWishlist(state, contained){
            state.contained = contained
        },
    }
}

