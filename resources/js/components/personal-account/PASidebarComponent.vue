<template>

    <div class="col-md-2 sidebar-wrap">
        <div class="main-sidebar">
            <div class="widget">
                <h4 class="widget-title"><span>Personal Account</span></h4>
                <ul class="nav nav-pills nav-sidebar flex-column">
                    <li><router-link :to="{name: 'personal-account'}"><i class="fa fa-home"></i> Home</router-link></li>
                    <li><router-link :to="{name: 'pa-orders'}"><i class="fa fa-calendar-o"></i> Orders</router-link></li>
                    <li><router-link :to="{name: 'pa-comments'}"><i class="fa fa-comments"></i> Comments</router-link></li>
                    <li><router-link :to="{name: 'pa-settings'}"><i class="fa fa-cog"></i> Settings</router-link></li>
                </ul>
            </div>
        </div>
    </div>


</template>
<script>
    export default {
        name: 'PASidebarComponent'
    }
</script>
