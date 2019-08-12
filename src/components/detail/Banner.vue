<template>
    <div>
        <div class="banner">
            <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/0ffb526f-d7fc-49fe-99db-5702d38f6cd6.jpg_r_640x420x90_885b480d.jpg" />
            <div class="banner-info">
                <div class="banner-title">三亚亚龙湾森林公园</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    7
                </div>
            </div>
        </div>
        <CommonGallary/>
    </div>
</template>

<script>
import CommonGallary from '@common/gallary'

export default {
    name: 'DetailBanner',
    components: {
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow: hidden
        height: 0
        padding-bottom: 67%
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
                background: rgba(0,0,0,.8)
                margin-top: .6rem
                font-size: .8rem
                .banner-icon
                   font-size: .8rem 

</style>