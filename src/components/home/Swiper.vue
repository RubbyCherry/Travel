<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                speed: 2000,
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            }
        }
    },
    props: ['swiperList'],
    computed :{
        showSwiper () {
            return this.swiperList.length
        }
    }
}
</script>

<style lang="stylus" scoped>
// .swiper-pagination-bullet-active不在当前的组件中，使用>>>进行穿透 
    .wrapper >>> .swiper-pagination-bullet-active
        background: red
    .wrapper
        width: 100%
        height: 0
        overflow: hidden
        padding-bottom: 31.25%
        .swiper-img
            width: 100%
</style>