<template>
    <div>
        <div class="heading-container heading-resize heading-no-button">
            <div class="heading-background heading-parallax bg-shop">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="heading-wrap">
                                <div class="page-title">
                                    <h1>Laptop</h1>
                                    <div class="page-breadcrumb">
                                        <ul class="breadcrumb">
                                            <li>
                                                <span><router-link class="home" to="/"><span>Home</span></router-link></span>
                                            </li>
                                            <li>
                                                <span><router-link to="cart"><span>Cart</span></router-link></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-container commerce page-layout-left-sidebar">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 main-wrap">
                        <div class="main-content">
<!--SORT PRODUCT-->
                            <div class="shop-toolbar">
                                <form class="commerce-ordering clearfix">
                                    <div class="commerce-ordering-select">
                                        <label class="hide">Sorting:</label>
                                        <div class="form-flat-select">
                                            <select @change="changeSortProduct" name="orderby" class="orderby">
                                                <option value="1" data-foo="1" selected='selected'>Sorting products</option>
                                                <option v-for="i in sort" value="2" :data-foo="i.id">{{i.name}}</option>
                                            </select>
                                            <i class="fa fa-angle-down"></i>
                                        </div>
                                    </div>
                                    <div class="commerce-ordering-select">
                                        <label class="hide">Show:</label>
                                        <div class="form-flat-select">
                                            <select @change="changeCountProduct" name="per_page" class="per_page">
                                                <option value="1" data-foo="6" selected='selected'>6</option>
                                                <option value="2" data-foo="12">12</option>
                                                <option value="3" data-foo="18">18</option>
                                            </select>
                                            <i class="fa fa-angle-down"></i>
                                        </div>
                                    </div>
                                </form>
                            </div>
<!--PRODUCTS-->
                            <div class="shop-loop grid">
                                <ul class="products" >
                                    <li class="product product-no-border style-2 col-md-3 col-sm-6" v-for="product in allProducts" :key="product.id">
                                        <div class="product-container">
                                            <figure>
                                                <div class="product-wrap">
                                                    <div class="product-images">
                                                        <span v-if="product.discount > 0" class="onsale">Sale!</span>
                                                        <div class="">
                                                            <router-link :to="{name: 'product', params:{id: product.id}}"><img :src="product.image_url_1" style="width: 275px; height: 275px;" alt=""/></router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <figcaption>
                                                    <div class="shop-loop-product-info">
                                                        <div class="info-meta clearfix">
                                                            <div class="form-group" style="display: flex">
                                                                <div v-for="rating in product.rating_value">
                                                                    <i class="fa fa-star checked"></i>
                                                                </div>
                                                                <div v-if="product.rating_value < 5">
                                                                    <span v-for="i in (5 - product.rating_value)">
                                                                        <i class="fa fa-star"></i>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span v-if="product.rating_count > 0" class="ml-1">{{product.rating_count}} Ratings</span>
                                                                    <span v-else class="ml-1">No Ratings</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="info-content-wrap">
                                                            <h3 class="product_title">
                                                                <a href="shop-detail-1.html">{{product.title}}</a>
                                                            </h3>
                                                            <div class="info-price">
																	<span v-if="product.discount > 0" class="price">
																		<del><span class="amount">{{product.price}}$</span></del>
																		<ins><span class="amount">{{product.discountPrice}}$</span></ins>
																	</span>
                                                                    <span v-else class="price">
																		<ins><span class="amount">{{product.price}}$</span></ins>
																	</span>
                                                            </div>
                                                            <div class="loop-action">
                                                                <div class="loop-add-to-cart">
                                                                    <a v-if="user" @click.prevent="addToCart(product.id)" href="#" class="add_to_cart_button">
                                                                        Add to cart
                                                                    </a>
                                                                    <router-link v-else to="/login" class="add_to_cart_button">
                                                                        Login to add
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                </ul>
                            </div>
<!--PAGINATION-->
                            <nav class="commerce-pagination text-center" style="font-size: 20px">
                                <ul class='pagination'>
                                    <li v-if="pagination.current_page !== 1" class='next'>
<!--                                        <a @click.prevent='getProducts(pagination.current_page - 1)' href='#'><i class='fa fa-angle-left' aria-hidden='true'></i> </a>-->
                                        <a @click.prevent="this.$store.dispatch('fetchProducts', {page: pagination.current_page - 1, countProduct: countProduct, filter: this.filter, sort:this.sortId, search: this.searchInput})" href='#'><i class='fa fa-angle-left' aria-hidden='true'></i> </a>
                                    </li>
                                    <li v-for='link in pagination.links'>
                                        <template v-if="Number(link.label) &&
                                    (pagination.current_page - link.label < 2 &&
                                    pagination.current_page - link.label > -2) ||
                                    Number(link.lavel) === 1 || Number(link.lavel) === pagination.last_page">
<!--                                            <a @click.prevent='getProducts(link.label)' :class="link.active ? 'active' : ''" href='#'>{{link.label}}</a>-->
                                            <a @click.prevent="this.$store.dispatch('fetchProducts', {page: link.label, countProduct: countProduct, filter: this.filter, sort:this.sortId, search: this.searchInput})" :class="link.active ? 'active' : ''" href='#'>{{link.label}}</a>
                                        </template>
                                        <template v-if="Number(link.label) &&
                                    pagination.current_page !== 3 &&
                                    pagination.current_page - link.label === 2 ||
                                    Number(link.label) &&
                                    pagination.current_page !== pagination.last_page - 2 &&
                                    pagination.current_page - link.label === -2
">
                                            <a>...</a>
                                        </template>
                                    </li>
                                    <li v-if="pagination.current_page !== pagination.last_page" class='next'>
<!--                                        <a @click.prevent='getProducts(pagination.current_page + 1)' href='#'><i class='fa fa-angle-right' aria-hidden='true'></i> </a>-->
                                        <a @click.prevent="this.$store.dispatch('fetchProducts', {page: pagination.current_page + 1, countProduct: countProduct, filter: this.filter, sort:this.sortId, search: this.searchInput})" href='#'><i class='fa fa-angle-right' aria-hidden='true'></i> </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
<!--FILTERS-->
                    <div class="col-md-3 sidebar-wrap">
                        <div class="main-sidebar">
<!--SEARCH-->
                            <div class="widget commerce widget_product_search">
                                <h4 class="widget-title">
                                    <span>Product Search</span>
                                </h4>
                                <div class="field">
                                    <input @change="searchProduct" type="text" class="input-min" v-model="searchInput" placeholder="Search Products&hellip;">
                                </div>
                            </div>
<!--CATEGORIES-->
                            <div class="widget widget_product_categories" @change="filterProduct">
                                <h4 class="widget-title"><span>Categories</span></h4>
                                <div v-for="category in FilterList.categories" class="form-group" >
                                    <input :value="category.id" v-model="filter.categories" type="checkbox" :id="category.id">
                                    <label class="ml-1" :for="category.id">{{category.title}}</label>
                                </div>
                            </div>
<!--TAGS-->
                            <div class="widget">
                                <h4 class="widget-title"><span>Tags</span></h4>
                                <ul  class="">
                                    <li v-for="tag in FilterList.tags" class="mb-1" >
                                        <a @click.prevent="addTag(tag.id)" v-if="filter.tags.includes(tag.id)" class="btn btn-primary rounded-pill" style="border-radius: 20px" href="#" role="button">#{{tag.title}}</a>
                                        <a @click.prevent="addTag(tag.id)" v-else class="btn btn-white rounded-pill" style="border-radius: 20px" href="#" role="button">#{{tag.title}}</a>
                                    </li>
                                </ul>
                            </div>
<!--PRICE SLIDER-->
                            <div class="widget widget_price_filter">
                                <h4 class="widget-title"><span>Price</span></h4>
                                <form @change="filterProduct">
                                    <div class="price-input">
                                        <div class="field">
                                            <span>Min</span>
                                            <input type="number" class="input-min" v-model="minPrice">
                                        </div>
                                        <div class="separator">-</div>
                                        <div class="field">
                                            <span>Max</span>
                                            <input type="number" class="input-max" v-model="maxPrice">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default{
        name: "Catalog",

        computed: mapGetters(['allProducts', 'pagination', 'countProduct', 'FilterList', 'getItemInWishlist', 'user']),

        data(){
            return{
                input : '',
                filter : {
                    categories: [],
                    tags: [],
                    prices: [],
                },
                minPrice : 0,
                maxPrice : 1000,
                countProduct : 6,
                sortId : 1,
                searchInput : '',
                sort: [
                    {name: "Default sorting", id : 1},
                    {name: "Sort by popularity", id : 2},
                    {name: "Sort by average rating", id : 3},
                    {name: "Sort by price: low to high", id : 4},
                    {name: "Sort by price: high to low", id : 5}
                ]
            }
        },

        mounted() {
            this.$store.dispatch('fetchProducts', {page: 1, countProduct: this.countProduct, filter: this.filter, sort:this.sortId, search: this.searchInput})
            this.$store.dispatch('fetchFilterList')
            // this.checkWishlist(this.$route.params.id)
        },

        methods:{
            filterProduct(){
                let tmp = ''
                this.filter.prices = []
                if(this.minPrice > this.maxPrice) {
                    tmp = this.minPrice
                    this.minPrice = this.maxPrice
                    this.maxPrice = tmp
                }
                this.filter.prices.push(this.minPrice, this.maxPrice)
                this.$store.dispatch('fetchProducts', {page: 1, countProduct: this.countProduct, filter: this.filter, sort:this.sortId, search: this.searchInput})
            },

            sortProduct(){
                this.$store.dispatch('fetchProducts', {page: 1, countProduct: this.countProduct, filter: this.filter, sort:this.sortId, search: this.searchInput})
            },

            searchProduct(){
                this.$store.dispatch('fetchProducts', {page: 1, countProduct: this.countProduct, filter: this.filter, sort:this.sortId, search: this.searchInput})
            },

            addToCart(id, qty=1, update=0){
                this.$store.dispatch('addToCart', {id: id, qty: qty, update:update})
                this.$store.dispatch('getCart')
            },

            addTag(id){
                if(!this.filter.tags.includes(id)){
                    this.filter.tags.push(id)
                }else{
                    this.filter.tags = this.filter.tags.filter(el => {
                        return el !== id
                    })
                }
                this.filterProduct();
            },

            changeCountProduct(e) {
                if(e.target.options.selectedIndex > -1) {
                    this.countProduct = e.target.options[e.target.options.selectedIndex].dataset.foo
                    this.searchProduct()
                }
            },

            changeSortProduct(e) {
                if(e.target.options.selectedIndex > -1) {
                    let a = e.target.options[e.target.options.selectedIndex].dataset.foo
                    this.sortId = Number(a)
                    this.sortProduct()
                }
            },

            addToWishlist(id){
                this.$store.dispatch('addToWishlist', {id: id})
            },

            removeFromWishlist(id){
                this.$store.dispatch('removeFromWishlist', {id: id})
            },

            checkWishlist(id){
                this.$store.dispatch('checkItemFromWishlist', {id: Number(id)})
            },

        },

    }
</script>

<style scoped>

    .price-input{
        width: 100%;
        display: flex;
        margin: 30px 0 35px;
    }
    .price-input .field{
        display: flex;
        width: 100%;
        height: 45px;
        align-items: center;
    }
    .field input{
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 19px;
        margin-left: 12px;
        border-radius: 5px;
        text-align: center;
        border: 1px solid #999;
        -moz-appearance: textfield;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    .price-input .separator{
        width: 130px;
        display: flex;
        font-size: 19px;
        align-items: center;
        justify-content: center;
    }

    .checked{
        color: #ffe400;
    }

</style>
