<template>
    <div>
        <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div 
        class="header-fixed" 
        v-show="!showAbs"
        :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return{
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop;
            if(top > 60){
                let opacity = top / 220
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
    .header-abs
        position: absolute
        top: .4rem
        left: .4rem
        width: 2.6rem
        height: 2.6rem
        line-height: 2.6rem
        text-align: center
        border-radius: 1.3rem
        background: rgba(0,0,0,.6)
        .back-icon
            color: #fff
            font-size: 1.5rem
    .header-fixed
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: 1.3rem
        position: fixed 
        top: 0
        left: 0
        right: 0
        .header-fixed-back
            width: 2.28rem
            text-align: center
            font-size: 1.4rem
            position: absolute
            top: 0
            left: 0
            color: #fff
</style>