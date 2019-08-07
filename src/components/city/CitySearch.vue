<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom search-notice" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
import BScroll from 'better-scroll'
import {  mapMutations } from 'vuex'

export default {
    name: 'CitySearch',
    data () {
        return{
            keyword: '',
            list: [],
            timer: null
        }
    },
    props: {
        cities: Object
    },
    watch: {
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
                return
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for (let i in this.cities){
                    this.cities[i].forEach(value => {
                        if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    });
                }
                this.list = result
            },100)
        }
    },
    methods: {
        handleCityClick (val) {
            // this.$store.commit('changeCity',val)与下面的相同
            this.changeCity(val)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.search)
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    }
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
            touch-action: none
    .search-content
        overflow: hidden
        z-index: 1
        position: absolute
        top: 5.68rem
        right: 0
        bottom: 0
        left: 0
        background: #eeeeee
        .search-item
            line-height: 1.7rem
            padding-left: .2rem
            background: #fff
            color: #666
        .border-bottom
            border-bottom: 1px solid #ccc
        .search-notice
            text-align: center
</style>


