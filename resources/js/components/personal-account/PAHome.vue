<template>

    <div class="mt-10">
        <div class="content-container">
            <div class="container">
                <div class="row">

                    <sidebar></sidebar>

                    <div class="col-md-9 main-wrap">
                        <h3 class="col-md-9 main-wrap ml-5">Welcome to your personal account</h3>
                    </div>

                </div>
            </div>
        </div>


    </div>


</template>
<script>
    import Sidebar from "./PASidebarComponent";
    export default {
        name: 'PAHome',

        components:{
            Sidebar,
        }
    }
</script>
