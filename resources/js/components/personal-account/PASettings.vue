<template>

    <div class="mt-10">
        <div class="content-container">
            <div class="container">
                <div class="row">

                    <sidebar></sidebar>

                    <div class="col-md-4 main-wrap" v-if="getUserData">
                        <section class="content">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="form-group">
                                        <h3>Change Username</h3>
                                        <label>Your Username</label>
                                        <input type="text" class="form-control" name="name" v-model="user.name" :placeholder="getUserData.name">
                                    </div>
                                    <div class="form-group mt-2">
                                        <h3>Change Password</h3>
                                        <label>Old Password</label>
                                        <input type="text" class="form-control" name="old_password" v-model="user.old_password">
                                        <label>New Password</label>
                                        <input type="text" class="form-control" name="password" v-model="user.new_password">
                                        <label>Confirm Password</label>
                                        <input type="text" class="form-control" name="confirmation_password" v-model="user.new_password_confirmation">
                                    </div>

                                    <div class="form-group">
                                        <input @click.prevent="updateUserData" type="submit" class="btn btn-primary" value="Update">
                                    </div>
                                </div>
                            </div>

                    </section>

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

        data(){
            return{
                user:{
                    name: null,
                    old_password: null,
                    new_password: null,
                    new_password_confirmation: null,
                }
            }
        },

        computed:{
            ...mapGetters(['getUserData'])
        },

        mounted() {
            this.$store.dispatch('getUserData')
        },

        methods:{
            updateUserData(){
                this.$store.dispatch('updateUserData', this.user);
            }
        }

    }
</script>
