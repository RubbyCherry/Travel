<template>
    <div>
        <div class="title">
            <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"/>
            <p class="title-desc">热销推荐</p>
        </div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: ['recommendList']
}
</script>

<style lang="stylus" scoped>
@import '~@styles/mixins.styl'
    .title
        line-height: 2.4rem
        margin-top: .8rem
        background: #eee
        text-indent: 1rem
        .title-img
            width: 1.1rem
            transform: rotate(-30deg)
        .title-desc
            display: inline-block
            margin-left: -0.5rem
    .item
        display: flex
        height: 5.7rem
        overflow: hidden
        margin-top: .4rem
        .item-img
            height: 5.5rem
            width: 5.5rem
            padding: .1rem .4rem
        .item-info
            flex: 1
            padding: .1rem .4rem
            min-width: 0
            .item-title
                line-height: 1.6rem
                font-size: 1.1rem
                ellipsis()
            .item-desc
                line-height: 1.4rem
                color: #ccc
                font-size: 0.9rem
                margin-top: .2rem
                ellipsis()
            .item-button
                line-height: 1.4rem
                background: #ff9300
                padding: .1rem .4rem
                border-radius: .2rem
                color: #fff
                margin-top: .3rem
                border-style: none
                font-size: 0.9rem

            
</style>
