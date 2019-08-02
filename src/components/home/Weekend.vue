<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
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
    data () {
        return{
            recommendList: [
                {id:'01',imgUrl:'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',title:'成都必打卡',desc:'成都的标志，也是现代人对老成都的记忆'},
                {id:'02',imgUrl:'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',title:'远离烧烤模式',desc:'与冰川里的水晶宫、“摄影家走廊”、来一场亲密的约会，艰辛会有的，可这都是值得的'},
                {id:'03',imgUrl:'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',title:'摩崖石刻造像',desc:'诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'},
                {id:'04',imgUrl:'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',title:'成都文艺范儿',desc:'《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方'},
                {id:'05',imgUrl:'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',title:'玩转主题乐园',desc:'乐园，与青春作伴'}
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/mixins.styl'
    .title
        line-height: 2.4rem
        margin-top: .8rem
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
