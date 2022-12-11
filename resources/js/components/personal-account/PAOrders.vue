<template>

    <div class="mt-10">
        <div class="content-container">
            <div class="container">
                <div class="row">

                    <sidebar></sidebar>

                    <div v-if="getUserOrders" class="col-md-9 main-wrap ml-5">
                        <h4>My Orders</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Tracking Number</th>
                                    <th>Total Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody v-for="order in getUserOrders">
                                <tr>
                                    <td>{{order.tracking_no}}</td>
                                    <td>{{order.total_price}}</td>
                                    <td>{{order.status == '0' ? 'pending' : 'completed'}}</td>
                                    <td><router-link :to="{name: 'orderItem', params:{id: order.id}}" class="btn btn-primary">View</router-link></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>


    </div>


</template>
<script>
    import Sidebar from "./PASidebarComponent";
    import {mapGetters} from 'vuex'
    export default {
        name: 'PAHome',

        components:{
            Sidebar,
        },

        computed:{
            ...mapGetters(['getUserOrders'])
        },

        mounted(){
            this.$store.dispatch('userOrders')
        },

        methods:{

        },
    }
</script>
