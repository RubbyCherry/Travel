<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            
        </div>
        <div class="gallary-hide">
            <img class="gallary-hide-img" src="@styles/../cancel.png"/>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CommonGallary',
    data () {
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        handleGallaryClick () {
            // console.log("111")
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        z-index: 99
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
                position: fixed
                top: 1rem
                left: 9rem
        .gallary-hide
            width: 2.5rem
            height: 2.5rem
            position: fixed
            bottom: 1.8rem
            left: 45%
            touch-action: none
            .gallary-hide-img
                width: 100%
                touch-action: none
</style>