<template>
    <div class="mt-10">
        <div class="content-container">
            <div class="container">
                <div class="row">

                    <p-a-sidebar-component></p-a-sidebar-component>

                    <div v-if="getUserOrderItem" class="col-md-9 main-wrap ml-5">
                        <div class="col-md-6 order-details" >
                            <h4>Shipping details</h4>
                            <hr>
                            <label>First Name</label>
                            <div class="">{{getUserOrderItem.orders.fname}}</div>
                            <label>Last Name</label>
                            <div class="">{{getUserOrderItem.orders.lname}}</div>
                            <label>Email</label>
                            <div class="">{{getUserOrderItem.orders.email}}</div>
                            <label>Contact No.</label>
                            <div class="">{{getUserOrderItem.orders.phone}}</div>
                            <label>Shipping Address</label>
                            <div class="">
                                {{getUserOrderItem.orders.address1}},<br>
                                {{getUserOrderItem.orders.address2}},<br>
                                {{getUserOrderItem.orders.city}},<br>
                                {{getUserOrderItem.orders.country}},
                            </div>
                            <label>Zip Code</label>
                            <div class="">{{getUserOrderItem.orders.pincode}}</div>

                        </div>
                        <div class="col-md-6">
                            <h4>Order details</h4>
                            <hr>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                </tr>
                                </thead>
                                <tbody v-for="$item in getUserOrderItem.prod">
                                    <tr>
                                        <td>{{$item.title}}</td>
                                        <td>{{$item.qty}}</td>
                                        <td>{{$item.price}}</td>
                                        <td>
                                            <img :src="$item.img" style="width: 50px" alt="">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>Grand Total: {{getUserOrderItem.total_price}}</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PASidebarComponent from "./PASidebarComponent";
    export default {
        name: 'PAOrderItem',
        components: {PASidebarComponent},
        computed:{
            ...mapGetters(['getUserOrderItem'])
        },

        mounted(){
          this.$store.dispatch('userOrderItem', this.$route.params.id)
        },
    }
</script>
<style scoped>

    .order-details div{
        font-size: 12px;
        padding: 10px;
        border: 1px solid #eee;
    }
    .order-details label{
        font-size: 16px;
        font-weight: 700;
    }
</style>
