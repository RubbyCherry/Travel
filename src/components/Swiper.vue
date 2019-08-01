<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'Swiper ',
    data () {
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                speed: 2000,
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            },      
            swiperList: [
                {id: '01',imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg'},
                {id: '02',imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'},
                {id: '03',imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg'}
            ]
        }
    },
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