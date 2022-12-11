<template>
    <div class="content-container mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-content">
                        <form class="commerce">
                            <div class="wishlist-title ">
                                <h2>My wishlist on Shop</h2>
                            </div>
                            <table v-if="getWishlist.count > 0" class="shop_table cart wishlist_table">
                                <thead>
                                    <tr>
                                        <th class="product-remove"></th>
                                        <th class="product-thumbnail"></th>
                                        <th class="product-name"><span class="nobr">Product Name</span></th>
                                        <th class="product-price"><span class="nobr">Price </span></th>
                                        <th class="product-stock-status"><span class="nobr">Discount </span></th>
                                        <th class="product-add-to-cart"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr v-for="product in getWishlist.products">
                                    <td class="product-remove">
                                        <a @click.prevent="removeFromWishlist(product.prod_id)" href="#" class="remove remove_from_wishlist">&times;</a>
                                    </td>
                                    <td class="product-thumbnail">
                                        <router-link :to="{name: 'product', params:{id: product.prod_id}}">
                                            <img width="100" height="150" :src="product.img" alt="Product-1"/>
                                        </router-link>
                                    </td>
                                    <td class="product-name">
                                        <router-link :to="{name: 'product', params:{id: product.prod_id}}">
                                            {{product.title}}
                                        </router-link>
                                    </td>
                                    <td class="product-price">
                                        <span class="amount">
                                            {{product.price}}$
                                        </span>
                                    </td>
                                    <td class="product-stock-status">
                                        <span v-if="product.discount > 0" class="wishlist-in-stock">{{product.discount}}%</span>
                                        <span v-else class="wishlist-in-stock">No discount</span>
                                    </td>
                                    <td class="product-add-to-cart">
                                        <a @click.prevent="addToCart(product.prod_id)" href="#" class="add_to_cart_button button rounded"> Add to cart</a>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colspan="6">&nbsp;</td>
                                </tr>
                                </tfoot>
                            </table>
                            <h3 v-else class="mt-10 ml-10">There are no products in your Wishlist</h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'Wishlist',

        computed:{
          ...mapGetters(['getWishlist'])
        },

        mounted() {
            this.update()
        },

        methods:{
            update(){
                this.$store.dispatch('getWishlist')
                this.$store.dispatch('getCart')
            },

            addToCart(id, qty=1){
                this.$store.dispatch('addToCart', {id: id, qty: qty})
                this.update()
            },

            removeFromWishlist(id){
                this.$store.dispatch('removeFromWishlist', {id:id})
                this.update()
            }
        }

    }
</script>
