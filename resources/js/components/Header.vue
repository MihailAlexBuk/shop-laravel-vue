<template>
    <div>
        <header class="header-container header-type-classic header-navbar-classic header-absolute header-transparent">
            <div class="navbar-container">
                <div class="navbar navbar-default navbar-scroll-fixed">
                    <div class="navbar-default-wrap">
                        <div class="container">
                            <div class="row">
                                <div class="navbar-default-col">
                                    <div class="navbar-wrap">
                                        <div class="navbar-header">
                                            <button type="button" class="navbar-toggle">
                                                <span class="sr-only">Toggle navigation</span>
                                                <span class="icon-bar bar-top"></span>
                                                <span class="icon-bar bar-middle"></span>
                                                <span class="icon-bar bar-bottom"></span>
                                            </button>
                                            <a class="navbar-search-button search-icon-mobile" href="#">
                                                <i class="fa fa-search"></i>
                                            </a>
                                            <a class="cart-icon-mobile" href="#">
                                                <i class="elegant_icon_bag"></i><span>0</span>
                                            </a>
                                            <router-link class="navbar-brand" to="/">
                                                Shop
                                            </router-link>
                                        </div>
                                        <nav class="collapse navbar-collapse primary-navbar-collapse">
                                            <ul class="nav navbar-nav primary-nav">
                                                <li class="current-menu-item menu-item-has-children">
                                                    <router-link to="/">Home</router-link>
                                                </li>
                                                <li class="current-menu-item menu-item-has-children">
                                                    <router-link to="/catalog">Shop</router-link>
                                                </li>
                                                <li class="current-menu-item menu-item-has-children">
                                                    <router-link to="/contacts">Contact us</router-link>
                                                </li>
                                                <li class="current-menu-item menu-item-has-children">
                                                    <router-link to="/about">About</router-link>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div class="header-right">
                                            <nav class="collapse navbar-collapse primary-navbar-collapse">
                                                <ul class="nav navbar-nav primary-nav ">
                                                    <li v-if="user" class="menu-item-has-children dropdown current-menu-ancestor pl-3">
                                                        <div class="navbar-wishlist">
                                                            <router-link class="wishlist" to="/wishlist">
                                                                <i class="fa fa-heart-o"></i>
                                                            </router-link>
                                                        </div>
                                                    </li>
                                                    <li @change="update" class="menu-item-has-children dropdown current-menu-ancestor pl-3">
                                                        <div class="navbar-minicart">
                                                            <a class="minicart-link" href="#">
                                                                <span class="minicart-icon">
                                                                    <i class="fa fa-shopping-cart"></i>
                                                                    <span v-if="user && getCart.count > 0">{{getCart.count}}</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li class="menu-item-has-children dropdown current-menu-ancestor ">
                                                        <router-link to="" class="" style="color: #000000"><i class="fa fa-user"></i></router-link>
                                                        <ul class="dropdown-menu">
                                                            <li v-if="!user"><router-link class="dropdown-item" to="/login">Login</router-link></li>
                                                            <li v-if="!user"><router-link class="dropdown-item" to="/register">Register</router-link></li>
                                                            <li v-if="user"><router-link class="dropdown-item" to="/personal-account">Personal Account</router-link></li>
                                                            <li v-if="user"><router-link @click="logout" class="dropdown-item" to="/login">Logout</router-link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-search-overlay hide">
                        <div class="container">
                            <div class="header-search-overlay-wrap">
                                <form class="searchform">
                                    <input type="search" class="searchinput" name="s" autocomplete="off" value="" placeholder="Search..."/>
                                </form>
                                <button type="button" class="close">
                                    <span aria-hidden="true" class="fa fa-times"></span>
                                    <span class="sr-only">Close</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="minicart-side">
            <div class="minicart-side-title">
                <h4>Shopping Cart</h4>
            </div>
            <div v-if="getCart.count > 0 && user" class="minicart-side-content">
                <div class="minicart">
                    <div class="minicart-header">
                        {{getCart.count}} items in the shopping cart
                    </div>
                    <div class="minicart-body">
                        <div v-for="product in getCart.products" class="cart-product clearfix">
                            <div class="cart-product-image">
                                <router-link class="cart-product-img" :to="{name: 'product', params:{id: product.prod_id}}">
                                    <img width="300" height="300" :src="product.img" alt=""/>
                                </router-link>
                            </div>
                            <div class="cart-product-details">
                                <div class="cart-product-title">
                                    <router-link :to="{name: 'product', params:{id: product.prod_id}}">{{product.title}}</router-link>
                                </div>
                                <div class="cart-product-quantity-price">
                                    {{product.qty}} x <span class="amount">${{product.price}}</span>
                                </div>
                            </div>
                            <a @click.prevent="removeItemCart(product.prod_id)" href="#" class="remove" title="Remove this item">&times;</a>
                        </div>
                    </div>
                    <div class="minicart-footer">
                        <div class="minicart-total">
                            Cart Subtotal <span class="amount">&pound{{getCart.total}}$</span>
                        </div>
                        <div class="minicart-actions clearfix">
                            <router-link class="viewcart-button button" to="/cart">
                                <span class="text">View Cart</span>
                            </router-link>
                            <router-link class="checkout-button button" to="/checkout">
                                <span class="text">Checkout</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="user" class="minicart-side-content">
                <div class="minicart">
                    <div class="minicart-header no-items show">
                        Your shopping bag is empty.
                    </div>
                    <div class="minicart-footer">
                        <div class="minicart-actions clearfix">
                            <router-link class="button no-item-button" to="/catalog">
                                <span class="text">Go to the shop</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="minicart-side-content">
                <div class="minicart">
                    <div class="minicart-header no-items show">
                        Login to add to cart.
                    </div>
                    <div class="minicart-footer">
                        <div class="minicart-actions clearfix">
                            <router-link class="button no-item-button" to="login">
                                <span class="text">Login</span>
                            </router-link>
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
        name: "HeaderComponent",

        data(){
            return {

            }
        },

        computed:{
            ...mapGetters(['user', 'getCart'])
        },

        mounted() {
            this.refresh()
        },

        methods:{
            update(){
                this.$store.dispatch('getCart')
            },
            removeItemCart(id){
                this.$store.dispatch('removeFromCart', {id:id})
                this.update()
            },
            refresh(){
                let token = localStorage.getItem('x-xsrf-token')
                if(token){
                    this.update()
                    this.$store.dispatch('user', token)
                }
            },
            logout(){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You can always come back!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Back',
                    confirmButtonText: 'Yes, get out!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.post('/logout').then(res=>{
                            Toast.fire({
                                icon: 'success',
                                title: 'Goodbye!'
                            })

                            localStorage.removeItem('x-xsrf-token')
                            this.$store.dispatch('user', null)
                            this.update()
                            this.$router.push({name:'login'});
                        })
                    }
                })
            }

        }
    }
</script>


