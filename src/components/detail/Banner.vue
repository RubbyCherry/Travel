<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <FadeAnimation>
            <CommonGallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"/>
        </FadeAnimation>
    </div>
</template>

<script>
import CommonGallary from '@common/gallary'
import FadeAnimation from '@common/fade'

export default {
    name: 'DetailBanner',
    components: {
        CommonGallary,
        FadeAnimation
    },
    data () {
        return{
            showGallary: false
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    },
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow: hidden
        height: 0
        padding-bottom: 55%
        position: relative
        .banner-img
           width: 100%
        .banner-info
           position: absolute
           left: 0
           right: 0
           bottom: 0
           line-height: 2.2rem
           display: flex
           color: #fff
           background-image: linear-gradient(transparent 0,rgba(0,0,0,0.8) 85%) 
           .banner-title
                flex: 1
                padding: 0 1.2rem
            .banner-number
                padding: 0 1rem
                line-height: 1rem
                height: 1rem
                border-radius: .4rem
                margin-top: .6rem
                font-size: .8rem
                .banner-icon
                   font-size: .8rem 

</style>