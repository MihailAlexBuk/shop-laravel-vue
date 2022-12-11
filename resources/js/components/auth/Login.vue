<template>
    <div>
        <section class="p-10 pb-15" style="width: 600px; margin: auto">
            <div class="tab-content">
                <form id="userloginModalForm" >
                    <div class="modal-header">
                        <h4 class="modal-title">Login</h4>
                    </div>
                    <div class="alert alert-danger" v-if="error">Email или пароль не верны</div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" v-model="user.email" name="email" required class="form-control" placeholder="Email address">
                        </div>
                        <div class="form-group">
                            <label >Password</label>
                            <input type="password" v-model="user.password" required name="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="modal-footer">
                    <span class="user-login-modal-register pull-left">
                        <router-link to="/register">Register</router-link>
                    </span>
                        <button @click.prevent="login" class="btn btn-default btn-outline">Sign in</button>
                    </div>
                </form>
            </div>
        </section>
    </div>


</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Login",

        computed:{
            ...mapGetters(['user'])
        },

        data(){
            return {
                user:{
                    email: null,
                    password: null,
                },
                error : null,
            }
        },

        mounted() {
        },

        methods: {
            login(){
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/login', this.user).then(res => {
                        console.log(res)
                        if(res.data.errors){
                            this.error = true
                        }else{
                            this.error = false
                            localStorage.setItem('x-xsrf-token', res.config.headers['X-XSRF-TOKEN'])
                            this.$store.dispatch('user', res.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({name:'home'});
                            Toast.fire({
                                icon: 'success',
                                title: 'Welcome! '
                            })
                        }

                    })
                });
            }
        }
    }
</script>
