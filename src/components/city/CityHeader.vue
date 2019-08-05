<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader',
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
    .header
        height: $headerHeight
        line-height: $headerHeight
        overflow: hidden
        text-align: center
        color: #fff
        background: $bgColor
        font-size: 1.3rem
        position: relative
        .header-back
            width: 2.28rem
            text-align: center
            font-size: 1.4rem
            position: absolute
            top: 0
            left: 0
            color: #fff
</style>


