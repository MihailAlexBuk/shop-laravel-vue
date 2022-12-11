export default {
    state: {
        products: [],
        product: null,
        FilterList: [],
        pagination: [],
        countProduct: null,
        homeProducts: null,
        rec_product: null,
    },
    getters: {
        allProducts(state){
            return state.products
        },
        getProduct(state){
            return state.product
        },
        getRecommendedProducts(state){
            return state.rec_product
        },
        getHomeProducts(state){
            return state.homeProducts
        },
        FilterList(state){
            return state.FilterList
        },
        pagination(state){
            return state.pagination
        },
        countProduct(state){
            return state.countProduct
        },
    },
    actions: {
        fetchProducts(ctx, {page=1, countProduct=6, filter, sort, search}){
            axios.post("/api/products/get", {'page' : page, 'countProduct' : countProduct, 'filter' : filter, 'sort' : sort, 'search' : search})
                .then(res =>{
                    let products = res.data.data;
                    let pagination = res.data.meta;

                    ctx.commit('updateProducts', products)
                    ctx.commit('pagination', pagination)
                    ctx.commit('countProduct', countProduct)
                })
        },

        getHomePageProducts(ctx){
            axios.get('/api/products/homePageProducts').then(res=>{
                // console.log(res.data)
                ctx.commit('updateHomePageProducts', res.data)
            })
        },

        getRecommendedProducts(ctx){
            axios.get('/api/products/recommendedProducts').then(res =>{
                // console.log(res.data.data)

                ctx.commit('setRecommendedProducts', res.data.data)
            })
        },

        fetchProduct(ctx, product){
            axios.get(`/api/products/${product}`)
                .then(res =>{
                    // console.log(res)
                    let product = res.data.data;
                    ctx.commit('updateProduct', product)
                })
        },
        fetchFilterList(ctx){
            axios.get('/api/products/filters').then(res =>{
                let FilterList = res.data;
                ctx.commit('updateFilterList', FilterList)
            })
        }
    },
    mutations: {
        updateProducts(state, products){
            state.products = products
        },
        updateHomePageProducts(state, homeProducts){
            state.homeProducts = homeProducts
        },
        updateProduct(state, product){
            state.product = product
        },
        setRecommendedProducts(state, rec_product){
            state.rec_product = rec_product
        },
        updateFilterList(state, FilterList){
            state.FilterList = FilterList
        },
        pagination(state, pagination){
            state.pagination = pagination
        },
        countProduct(state, countProduct){
            state.countProduct = countProduct
        },
    }
}
