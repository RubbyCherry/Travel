<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction: true
            }, 
            iconList: [
                {id: '01',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',desc: '酒店'},
                {id: '02',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',desc: '飞机票'},
                {id: '03',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',desc: '度假'},
                {id: '04',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',desc: '火车票'},
                {id: '05',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc: '景点门票'},
                {id: '06',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/group.png',desc: '特惠酒店'},
                {id: '07',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/bargainflight.png',desc: '特价机票'},
                {id: '08',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/inn.png',desc: '客栈'},
                {id: '09',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/haiwai.png',desc: '海外酒店'},
                {id: '10',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/kezhan.png',desc: '民宿'},
                {id: '11',imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/bus.png',desc: '汽车票船票'},   
            ]
        }
    },    
    computed: {
        pages () {
            const pages=[]
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/10)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
@import '~@styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icon
        width: 20%
        height: 0
        position: relative
        overflow: hidden
        float: left
        padding-bottom: 25%
        .icon-img
            position:absolute
            top: .3rem
            left: 0
            right: 0
            bottom: 1.32rem
            box-sizing: border-box
            padding: .2rem
            .icon-img-content
                height: 90%
                display: block
                margin: 0 auto
        .icon-desc
            position:absolute
            left: 0
            right: 0
            bottom: 0
            height: 1.32rem
            line-height: 1.32rem 
            text-align: center
            color: $darkTextColor
            ellipsis()      
</style>
