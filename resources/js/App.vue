<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <router-view></router-view>
        <FooterComponent></FooterComponent>
    </div>
</template>
<script>
    import HeaderComponent from "./components/Header";
    import FooterComponent from "./components/Footer";
    export default{
        name: "App",
        components: {
            FooterComponent,
            HeaderComponent,
        }
    }

</script>





