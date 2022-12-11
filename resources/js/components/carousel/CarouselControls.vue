<template>

    <button class="carousel-control left" @click="$emit('prev')">Prev</button>
    <button class="carousel-control right" @click="$emit('next')">Next</button>

</template>

<script>
    export default {
        emits: ['prev', 'next']
    }
</script>

<style scoped>
    .carousel-control{
        background: rgb(40, 120, 240);
        border: none;
        display: inline-block;
        position: absolute;
        height: 40px;
        width: 60px;
        top: calc(50% - 20px);
        color: #f3f3f3;
        cursor: pointer;
    }

    .left{
        left:0;
    }

    .right{
        right:0;
    }
</style>
