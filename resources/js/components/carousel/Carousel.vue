<template>
    <div class="carousel">
        <div class="carousel-inner">
            <carousel-indicators
                v-if="indicators"
                :total="slides.length"
                :currentIndex="currentSlide"
                @switch='switchSlide($event)'>
            </carousel-indicators>
            <carousel-item v-for="(slide, index) in slides"
                           :slide="slide"
                           :key="`item-${index}`"
                           :current-slide="currentSlide"
                           :index="index"
                           :direction="direction"
                           @mouseenter="stopSliderTimer"
                           @mouseout="startSlideTimer">
            </carousel-item>
            <carousel-controls v-if="controls" @prev="prev" @next="next"></carousel-controls>
        </div>
    </div>
</template>

<script>
    import CarouselItem from "./CarouselItem";
    import CarouselControls from "./CarouselControls";
    import CarouselIndicators from "./CarouselIndicators";
    export default {
        components:{
            CarouselItem,
            CarouselControls,
            CarouselIndicators,
        },

        props: {
            slides: {
                type: Array,
                required: true
            },
            controls: {
                type: Boolean,
                default: false
            },
            indicators: {
                type: Boolean,
                default: false
            },
            interval: {
                type: Number,
                default: 5000,
            }
        },

        data(){
            return {
                currentSlide: 0,
                slideInterval : null,
                direction : 'right',
            }
        },

        mounted() {
            this.startSlideTimer();
        },

        beforeUnmount() {
            this.stopSliderTimer()
        },

        methods:{
            setCurrentSlide(index){
                this.currentSlide = index
            },

            switchSlide(index){
                const step = index - this.currentSlide
                if(step > 0){
                    this.next(step)
                }else{
                    this.prev(step)
                }

            },

            prev(step = -1){
                const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1
                this.setCurrentSlide(index)
                this.direction = 'left'
                this.startSlideTimer()
            },

            _next(step = 1){
                const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + step : 0
                this.setCurrentSlide(index)
                this.direction = 'right'
            },

            next(step = 1){
                this._next(step)
                this.startSlideTimer()
            },

            startSlideTimer(){
                this.stopSliderTimer()
                this.slideInterval = setInterval(() => {
                    this._next()
                }, this.interval)
            },

            stopSliderTimer(){
                clearInterval(this.slideInterval)
            }
        },
    }
</script>
<style scoped>

    .carousel{
        display: flex;
        justify-content: center;
    }

    .carousel-inner{
        position: relative;
        width: 400px;
        height: 600px;
        overflow: hidden;
    }



</style>
