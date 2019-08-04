<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: ['icons'],
    data () {
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction: true
            }
        }
    },    
    computed: {
        pages () {
            const pages=[]
            this.icons.forEach((item,index)=>{
                const page=Math.floor(index/10)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
@import '~@styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icon
        width: 20%
        height: 0
        position: relative
        overflow: hidden
        float: left
        padding-bottom: 25%
        .icon-img
            position:absolute
            top: .3rem
            left: 0
            right: 0
            bottom: 1.32rem
            box-sizing: border-box
            padding: .2rem
            .icon-img-content
                height: 90%
                display: block
                margin: 0 auto
        .icon-desc
            position:absolute
            left: 0
            right: 0
            bottom: 0
            height: 1.32rem
            line-height: 1.32rem 
            text-align: center
            color: $darkTextColor
            ellipsis()
    .swiper-pagination
        display: none      
</style>
