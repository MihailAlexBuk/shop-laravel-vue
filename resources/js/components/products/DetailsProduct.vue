<template>
    <div class="content-container mt-10" v-if="getProduct">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-content">
                        <div class="commerce">
                            <div class="style-1 product">
                                <div class="container">
                                    <div class="row summary-container">
                                        <div class="col-md-7 col-sm-6 entry-image">
                                            <div class="single-product-images">
                                                <span v-if="getProduct.discount > 0" class="onsale">Sale!</span>

                                                <carousel indicators :slides="[getProduct.image_url_1,getProduct.image_url_2,getProduct.image_url_3 ]"></carousel>

                                            </div>
                                        </div>
                                        <div class="col-md-5 col-sm-6 entry-summary">
                                            <div class="summary" >
                                                <h1 class="product_title entry-title">{{getProduct.title}}</h1>
                                                <p class="price" v-if="getProduct.discount > 0">
                                                    <del>
                                                        <span class="amount">${{getProduct.price}}</span>
                                                    </del>
                                                    <ins>
                                                        <span class="amount">${{getProduct.discountPrice}}</span>
                                                    </ins>
                                                </p>
                                                <p class="price" v-else>
                                                    <ins>
                                                        <span class="amount">${{getProduct.price}}</span>
                                                    </ins>
                                                </p>
                                                <div class="product-excerpt">
                                                    <p v-html="getProduct.desc"></p>
                                                </div>
                                                <div v-if="user">
                                                    <form class="cart">
                                                        <div class="add-to-cart-table">
                                                            <div class="quantity">
                                                                <input  type="number"  name="quantity" v-model="qtyProduct" class="input-text qty text" />
                                                            </div>
                                                            <button @click.prevent="addToCart(getProduct.id, qtyProduct)" type="submit" class="button">Add to cart</button>
                                                        </div>
                                                    </form>
                                                    <p >
                                                        <a v-if="getItemInWishlist" @click.prevent="removeFromWishlist(getProduct.id)" href="#"><strong>Remove from Wishlist</strong></a>
                                                        <a v-else @click.prevent="addToWishlist(getProduct.id)" href="#"><strong>Add to Wishlist</strong></a>
                                                    </p>
                                                </div>
                                                <div class="mt-3" v-else><b><router-link to="/login">Login</router-link> to add to cart/wishlist</b></div>

                                                <div class="clear"></div>
                                                <div class="product_meta">
                                                    <span class="posted_in">
                                                        <span>Categories: <b>{{getProduct.category.title}}</b></span>
                                                    </span>
                                                    <span class="posted_in">
                                                        <span>Tags: <b class="ml-1" v-for="tag in getProduct.tags">#{{tag.title}}</b></span>
                                                    </span>
                                                </div>
                                                <div class="mt-3">
                                                    <h5 v-if="getProduct.rating_count > 0" class="ml-1">{{getProduct.rating_count}} Ratings</h5>
                                                    <span v-else class="ml-1">No Ratings</span>
                                                </div>
                                                <div v-if="!getProduct.user_rating && user" @change="addRating" class="star-rating__wrap">
                                                    <input class="star-rating__input" id="star-5" type="radio" name="rating" value="5">
                                                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-5" title="Отлично"></label>
                                                    <input class="star-rating__input" id="star-4" type="radio" name="rating" value="4">
                                                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-4" title="Хорошо"></label>
                                                    <input class="star-rating__input" id="star-3" type="radio" name="rating" value="3">
                                                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-3" title="Удовлетворительно"></label>
                                                    <input class="star-rating__input" id="star-2" type="radio" name="rating" value="2">
                                                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-2" title="Плохо"></label>
                                                    <input class="star-rating__input" id="star-1" type="radio" name="rating" value="1">
                                                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-1" title="Ужасно"></label>
                                                </div>
                                                <div v-else class="star-rating__wrap">
                                                    <span v-for="rating in getProduct.rating_value">
                                                        <i class="fa fa-star fa-lg checked"></i>
                                                    </span>
                                                    <span v-if="getProduct.rating_value < 5">
                                                        <span v-for="i in (5 - getProduct.rating_value)">
                                                            <i class="fa fa-lg fa-star"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="commerce-tab-container">
                                    <div class="container">
                                        <div class="col-md-12">
                                            <div class="tabbable commerce-tabs">
                                                <ul class="nav nav-tabs">
                                                    <li class="vc_tta-tab active">
                                                        <a data-toggle="tab" href="#tab-2">Reviews</a>
                                                    </li>
                                                </ul>
<!--COMMENTS-->
                                                <div class="tab-content">
                                                    <div id="tab-2" class="tab-pane fade in active">
                                                        <div id="comments" class="comments-area">
                                                            <h2 class="comments-title">There are <span>3</span> Comments</h2>
                                                            <ol class="comments-list">
                                                                <li class="comment" v-for="comment in getComments">
                                                                    <div class="comment-wrap">
                                                                        <div class="comment-img">
                                                                            <img alt="" src="https://www.seekpng.com/png/detail/114-1149972_avatar-free-png-image-avatar-png.png" class='avatar' height='80' width='80'/>
                                                                        </div>
                                                                        <div class="comment-block">
                                                                            <header class="comment-header">
                                                                                <cite class="comment-author">
                                                                                    {{comment.name}}
                                                                                </cite>
                                                                                <div class="comment-meta">
                                                                                    <span class="time">{{comment.date}}</span>
                                                                                </div>
                                                                            </header>
                                                                            <div class="comment-content">
                                                                                <p>{{comment.message}}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                            <div class="comment-respond" v-if="user">
                                                                <h3 class="comment-reply-title">
                                                                    <span>Leave your thought</span>
                                                                </h3>
                                                                <form class="comment-form">
                                                                    <div class="row">
                                                                        <div class="comment-form-comment col-sm-12">
                                                                            <textarea class="form-control" v-model="comment.message" placeholder="Comment" id="comment" name="comment" cols="40" rows="6" ></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-submit">
                                                                        <a @click.prevent="addComment" class="btn btn-default-outline btn-outline" href="#">
                                                                            <span>Post Comment</span>
                                                                        </a>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="related products">
                                                <div class="related-title">
                                                    <h3><span>We know you will love</span></h3>
                                                </div>
                                                <ul class="products columns-4" data-columns="4">
                                                    <li class="product product-no-border style-2" v-for="product in getRecommendedProducts">
                                                        <div class="product-container">
                                                            <figure>
                                                                <div class="product-wrap">
                                                                    <div class="product-images">
                                                                        <span class="onsale" v-if="product.discount > 0">Sale!</span>
                                                                        <div class="shop-loop-thumbnail shop-loop-front-thumbnail">
                                                                            <router-link :to="{name: 'product', params: {id: product.id}}"><img style="width: 300px; height: 300px;" :src="product.image_url_1" alt=""/></router-link>
                                                                        </div>
                                                                        <div class="shop-loop-thumbnail shop-loop-back-thumbnail">
                                                                            <router-link :to="{name: 'product', params:{id:product.id}}"><img style="width: 320px; height: 320px;" :src="product.image_url_1" alt=""/></router-link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <figcaption>
                                                                    <div class="shop-loop-product-info">
                                                                        <div class="info-meta clearfix">
                                                                            <div class="star-rating">
                                                                                <span style="width:0%"></span>
                                                                            </div>
                                                                            <div class="loop-add-to-wishlist">
                                                                                <div class="yith-wcwl-add-to-wishlist">
                                                                                    <div class="yith-wcwl-add-button">
                                                                                        <a @click="addToWishlist(product.id)" href="#" class="add_to_wishlist">
                                                                                            Add to Wishlist
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-content-wrap">
                                                                            <h3 class="product_title">
                                                                                <router-link :to="{name: 'product', params:{id:product.id}}">{{product.title}}</router-link>
                                                                            </h3>
                                                                            <div class="info-price">
																						<span class="price">
																							<del><span class="amount">{{product.price}}$</span></del> <ins><span class="amount">{{product.discountPrice}}$</span></ins>
																						</span>
                                                                            </div>
                                                                            <div class="loop-action">
                                                                                <div class="loop-add-to-cart">
                                                                                    <a @click="addToCart(product.id)" href="#" class="add_to_cart_button">
                                                                                        Add to cart
                                                                                    </a>
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
                                        </div>
                                    </div>
                                </div>
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
    import Carousel from '../carousel/Carousel'
    export default {
        name: 'DetailProduct',

        components:{
            Carousel,
        },

        data(){
            return{
                comment:{
                  message: null,
                },
                product:null,
                qtyProduct : 1,
            }
        },

        computed: mapGetters(['getProduct', 'getRating', 'user', 'getItemInWishlist', 'getComments', 'getRecommendedProducts']),

        mounted() {
            this.update()
        },

        methods:{
            update(){
                this.$store.dispatch('fetchProduct', this.$route.params.id)
                this.$store.dispatch('getComments', this.$route.params.id)
                this.$store.dispatch('getRecommendedProducts')
                this.product = this.$store.getters.getProduct
                if(this.user){
                    this.checkWishlist(this.$route.params.id)
                }
            },

            addRating(e){
                this.$store.dispatch('addRating', {'rating' : Number(e.target.value), 'product_id': Number(this.$route.params.id)})
                this.update()
            },

            addComment(){
                this.$store.dispatch('addComment', {'message' : this.comment.message, 'product_id': this.$route.params.id})
                this.update()
                this.comment.message = null
            },

            addToCart(id, qty=1){
                this.$store.dispatch('addToCart', {id: id, qty: qty})
                this.$store.dispatch('getCart')
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
        }

    }
</script>
<style scoped>
    .checked{
        color: #ffe400;
    }
</style>
