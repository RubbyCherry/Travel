<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
    .search
        height: 2.16rem
        background: $bgColor
        padding: .2rem
        .search-input
            box-sizing: border-box
            width: 100%
            height: 2.1rem
            line-height: 2.1rem
            text-align: center
            color: #666
            padding: 0 .1rem
</style>


