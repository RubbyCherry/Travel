<template>
    <ul class="list">
        <li class="item">a</li>
        <li class="item">s</li>
        <li class="item">d</li>
        <li class="item">f</li>
        <li class="item">g</li>
        <li class="item">j</li>
    </ul>
</template>

<script>
export default {
    name: 'Alphabet',
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
    .list
        position: absolute
        top: 5.68rem
        right: 0
        bottom: 0
        width: 1rem
        display: flex
        flex-direction: column
        justify-content: center
        .item
            text-align: center
            color: $bgColor
            line-height: 1.2rem
</style>


