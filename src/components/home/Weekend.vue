<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        weekendList: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/mixins.styl'
    .title
        line-height: 2.4rem
        background: #eee
        text-indent: 1rem
    .item
        display: block
        overflow: hidden
        .item-img-wrapper   
            overflow: hidden
            height: 0
            padding-bottom: 38%
            .item-img
                width: 100%
                padding: .1rem 0
        .item-info
            padding: .2rem .4rem
            min-width: 0
            text-indent: .4rem
            .item-title
                line-height: 1.6rem
                font-size: 0.95rem
                ellipsis()
            .item-desc
                line-height: 1.4rem
                color: #ccc
                font-size: 0.8rem
                margin-top: .2rem
                ellipsis()

            
</style>
