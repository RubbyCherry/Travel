<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wraper">
                        <div class="button">成都</div>  
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wraper" v-for="item of hotCities" :key="item.id">
                        <div class="button">{{item.name}}</div>  
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-topbottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'CityList',
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    props: {
        cities: Object,
        hotCities: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
    .list
        position: absolute
        top: 5.68rem
        left: 0
        right: 0
        bottom: 0
        overflow: hidden
        .border-topbottom
            border-bottom: 1px solid #ccc
        .title
            line-height: 1.6rem
            background: #eeeeee
            padding-left: .8rem
            color: #666
        .button-list
            padding: .1rem 1rem .1rem .1rem
            overflow: hidden
            .button-wraper
                width: 33.3%
                float: left
                .button
                    text-align: center
                    margin: .2rem
                    border: .06rem solid #ccc
                    padding: .3rem 0
                    border-radius: .2rem
        .item
            line-height: 2.2rem
            padding-left: .8rem

</style>


