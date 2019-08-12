<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img class="gallary-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/40a54af2-b40d-4f61-9404-c66a54f2382b.jpg_r_1280x840x90_d786a8a0.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <img class="gallary-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/e4c053ae-6972-4b1a-b4db-b0c6b35f7307.jpg_r_1280x840x90_904f730c.jpg" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="paginationImage"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CommonGallary',
    data () {
        return{
            swiperOption: {
                paginationImage: '.swiper-pagination',
                paginationType: 'fraction'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
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
            overflow: hidden
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
</style>