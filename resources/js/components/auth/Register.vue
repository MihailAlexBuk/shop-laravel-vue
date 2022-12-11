<template>
    <div>
        <section class="p-10 pb-15" style="width: 600px; margin: auto">
            <div class="tab-content">
                <form id="userregisterModalForm">
                    <div class="modal-header">
                        <h4 class="modal-title">Register account</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Username</label>
                            <div v-if="!userReg.name && errors" class="text-danger">Поле обязательно для заполнения</div>
                            <input type="text" v-model="userReg.name" name="user_login" class="form-control" required autocomplete="name" autofocus placeholder="Username">
                        </div>
                        <div class="form-group">
                            <label for="user_email">Email</label>
                            <div v-if="!userReg.email && errors" class="text-danger">Поле обязательно для заполнения</div>
                            <input type="email" v-model="userReg.email" id="user_email" name="user_email" class="form-control" required autocomplete="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="user_password">Password</label>
                            <div v-if="!userReg.password && errors" class="text-danger">Поле обязательно для заполнения</div>
                            <input type="password" v-model="userReg.password" id="user_password" name="user_password" required autocomplete="new-password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label for="user_password">Password confirmation</label>
                            <div v-if="!userReg.password_confirmation && errors" class="text-danger">Поле обязательно для заполнения</div>
                            <input type="password" v-model="userReg.password_confirmation" id="user_password_confirmation" name="user_password" required autocomplete="new-password" class="form-control" placeholder="Password confirmation">
                        </div>
                    </div>
                    <div class="modal-footer">
							<span class="user-login-modal-link pull-left">
								<router-link to="/login">Already have an account?</router-link>
							</span>
                        <button @click.prevent="register" type="submit" class="btn btn-default btn-outline">Register</button>
                    </div>
                </form>
            </div>
        </section>
    </div>


</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Register",

        computed:{
            ...mapGetters(['user'])
        },


        data(){
            return {
                userReg:{
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                },
                errors: null,
            }
        },

        mounted() {
            if(this.user){
                this.$store.dispatch('getCart')
            }
        },

        methods: {
            register() {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/register', this.userReg).then(res => {
                        // console.log(res)
                        if(res.data.errors){
                            this.errors = true
                        }else{
                            this.errors = false
                            Toast.fire({
                                icon: 'success',
                                title: 'Registration completed !'
                            })
                            localStorage.setItem('x-xsrf-token', res.config.headers['X-XSRF-TOKEN'])
                            this.$store.dispatch('user', res.config.data)
                            this.$router.push({name:'home'});
                        }
                    }).catch(err => {
                        this.errors = true
                    })
                })
            },
        }
    }
</script>
