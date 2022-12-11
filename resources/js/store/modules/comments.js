export default {
    state: {
        comments: null,
        commentsUser: null,
    },
    getters: {
        getComments(state){
            return state.comments;
        },

        getCommentsUser(state){
            return state.commentsUser;
        },
    },
    actions: {
        addComment(ctx, {message, product_id}){
            axios.post('/api/addComment', {'message' : message, product_id : product_id}).then(res => {
                // console.log(res);
                let comment = res.data;
                ctx.commit('setComment', comment);
            })
        },

        getComments(ctx, product_id){
            axios.get(`/api/products/getComments/${product_id}`).then(res => {
                // console.log(res);
                let comments = res.data;
                ctx.commit('setComment', comments);
            })
        },

        getCommentsUser(ctx){
            axios.get(`/api/getCommentsUser`).then(res => {
                // console.log(res);
                let comments = res.data;
                ctx.commit('setCommentsUser', comments);
            })
        },
    },
    mutations: {
        setComment(state, comments){
            state.comments = comments;
        },
        setCommentsUser(state, commentsUser){
            state.commentsUser = commentsUser;
        },
    }
}
