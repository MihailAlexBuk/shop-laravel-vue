<template>

    <div class="mt-10">
        <div class="content-container">
            <div class="container">
                <div class="row">

                    <sidebar></sidebar>

                    <div class="col-md-9 main-wrap">
                        <div v-if="getCommentsUser" class="col-md-9 main-wrap ml-5">
                            <h4>My Comments</h4>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Comment</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody v-for="comment in getCommentsUser">
                                <tr>
                                    <td>{{comment.prod_name}}</td>
                                    <td>{{comment.message}}</td>
                                    <td>{{comment.date}}</td>
                                    <td><router-link :to="{name: 'product', params:{id: comment.prod_id}}" class="btn btn-primary">View</router-link></td>
                                </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>
            </div>
        </div>


    </div>


</template>
<script>
    import Sidebar from "./PASidebarComponent";
    import {mapGetters} from 'vuex';
    export default {
        name: 'PAHome',

        components:{
            Sidebar,
        },

        computed:{
            ...mapGetters(['getCommentsUser'])
        },

        mounted() {
          this.$store.dispatch('getCommentsUser');
        }
    }
</script>
