<template>
    <div>
        <div class="item" v-for="(item,index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div class="item-children" v-if="item.children">
                <DetailList :list="item.children"/>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title
        height: 1.8rem
        line-height: 1.8rem
        padding: 0 1.2rem
    .border-bottom
        border-bottom: 1px solid #ccc
        .item-title-icon
            display: inline-block;
            width: 1.15rem;
            height: 1.15rem;
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.75rem no-repeat;
            margin-right: 0.1rem;
            background-size: 1.2rem 7rem;
            vertical-align: text-top
    .item-children
        padding: 0 .6rem
</style>