import { createApp } from 'vue'
import App from './App'
import router from './router'
import Swal from 'sweetalert2'
import {store} from './vuex'

require('./bootstrap');

const app = createApp(App)

app.use(router)
app.use(store)

window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast


app.mount('#app')
