export default {
    state: {
        rating: null,
    },
    getters: {
        getRating(state){
            return state.rating;
        },
    },
    actions: {
        addRating(ctx, {rating, product_id}){
            axios.post('/api/add-rating', {'rating' : rating, product_id : product_id}).then(res => {
                // console.log(res);

                ctx.commit('setRating', rating);
            })
        },
    },
    mutations: {
        setRating(state, rating){
            state.rating = rating;
        },
    }
}
