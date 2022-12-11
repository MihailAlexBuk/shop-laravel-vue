<template>
    <div class="container mt-10">
        <div class="row">
            <div class="col-md-7">
                <div class="card">
                    <div class="card-body">
                        <h6>Basik details</h6>
                        <hr>
                        <div class="row checkout-form">
                            <div class="col-md-6">
                                <label>First Name</label>
                                <div v-if="!dataOrder.fname && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.fname" class="form-control" placeholder="Enter First Name">
                            </div>
                            <div class="col-md-6">
                                <label>Last Name</label>
                                <div v-if="!dataOrder.lname && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.lname" class="form-control" placeholder="Enter Last Name">
                            </div>
                            <div class="col-md-6">
                                <label>Email</label>
                                <div v-if="!dataOrder.email && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.email" class="form-control" placeholder="Enter Email">
                            </div>
                            <div class="col-md-6">
                                <label>Phone Number</label>
                                <div v-if="!dataOrder.phone && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.phone" class="form-control" placeholder="Enter Phone Number">
                            </div>
                            <div class="col-md-6">
                                <label>Address 1</label>
                                <div v-if="!dataOrder.address1 && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.address1" class="form-control" placeholder="Enter Address 1">
                            </div>
                            <div class="col-md-6">
                                <label>Address 2</label>
                                <div v-if="!dataOrder.address2 && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.address2" class="form-control" placeholder="Enter Address 2">
                            </div>
                            <div class="col-md-6">
                                <label>Country</label>
                                <div v-if="!dataOrder.country && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.country" class="form-control" placeholder="Enter Country">
                            </div>
                            <div class="col-md-6">
                                <label>City</label>
                                <div v-if="!dataOrder.city && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.city" class="form-control" placeholder="Enter City">
                            </div>
                            <div class="col-md-6">
                                <label>Pin Code</label>
                                <div v-if="!dataOrder.pincode && errors" class="text-danger">Required field</div>
                                <input type="text" v-model="dataOrder.pincode" class="form-control" placeholder="Enter Pin Code">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card">
                    <div v-if="getCart.count>0" class="card-body">
                        <h6>Order Details</h6>
                        <hr>
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody v-for="product in getCart.products">
                                <tr >
                                    <td>{{product.title}}</td>
                                    <td>{{product.qty}}</td>
                                    <td>{{product.price}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="">
                            <b>Total: {{getCart.total}}</b>
                        </div>
                        <hr>
                        <div>
                            <button disabled @click.prevent="payment" style="width: 100%;" class="btn btn-success">Pay</button>
                        </div>
                        <div>
                            <button @click.prevent="placeOrder" style="width: 100%;" class="btn btn-primary mt-1">Place Order</button>
                        </div>
                    </div>
                    <div v-else class="card-body">
                        <h6>Order Details</h6>
                        <hr>
                        <h2>Your cart is empty</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'Checkout',

        data(){
            return{
                dataOrder: {
                    fname: null,
                    lname: null,
                    email: null,
                    phone: null,
                    address1: null,
                    address2: null,
                    country:null,
                    city: null,
                    pincode: null,
                },
                errors: null,
            }
        },

        computed:{
            ...mapGetters(['getCart'])
        },

        mounted(){
            this.$store.dispatch('getCart')
        },

        methods:{
            valid(){
                if(this.dataOrder.fname !== null && this.dataOrder.lname !== null && this.dataOrder.email !== null && this.dataOrder.phone !== null && this.dataOrder.address1 !== null &&
                    this.dataOrder.address2 !== null && this.dataOrder.country !== null && this.dataOrder.city !== null && this.dataOrder.pincode !== null) {
                    this.errors = false
                    return true;
                }else{
                    this.errors = true
                    return false;
                }
            },
            placeOrder(){
                if(this.valid()){
                    this.$store.dispatch('placeOrder', {'user':this.dataOrder, 'cart':this.getCart})
                    this.$store.dispatch('getCart')
                    this.$router.push({name:'checkout'});
                }
            },

            payment(){
                if(this.valid()){
                    this.$store.dispatch('proceedToPay', {'user':this.dataOrder, 'cart':this.getCart})
                    this.$store.dispatch('getCart')
                    this.$router.push({name:'checkout'});
                }
            }
        }


    }
</script>
<style scoped>
    .checkout-form labal{
        font-size: 12px;
        font-weight: 700;
    }
    .checkout-form input{
        font-size: 14px;
        padding: 5px;
        font-weight: 400;
    }

</style>
