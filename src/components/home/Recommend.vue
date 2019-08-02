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
    data () {
        return{
            recommendList: [
                {id:'01',imgUrl:'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_250x250_145eeeb5.jpg',title:'成都大熊猫繁育研究基地',desc:'我们的爱心使者--大熊猫 幸福的家园'},
                {id:'02',imgUrl:'http://img1.qunarzz.com/sight/p0/201403/03/77a8f60ea243465fdf2c937e2edd33dd.jpg_200x200_51dd1e90.jpg',title:'国色天乡·水上乐园',desc:'夏日凉爽圣地，暑期的水上乐园'},
                {id:'03',imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',title:'成都海昌极地海洋公园',desc:'各种各样的海洋小伙伴，还有它们精彩的表演'},
                {id:'04',imgUrl:'http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_200x200_c26fb243.jpg',title:'都江堰',desc:'拜水都江堰，在都江堰看分水鱼嘴'},
                {id:'05',imgUrl:'http://img1.qunarzz.com/sight/p0/1809/6d/6de192f67ebc1470a3.img.jpg_200x200_8ec05001.jpg',title:'漫花庄园',desc:'长满鲜花的庄园内，处处都是盎然的生机'}
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
