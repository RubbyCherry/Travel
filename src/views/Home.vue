<template>
  <div class="home">
    <HomeHeader :city="city"/>
    <HomeSwiper :swiperList="swiperList"/>
    <HomeIcons :icons="iconList"/>
    <HomeRecommend :recommendList="recommendList"/>
    <HomeWeekend :weekendList="weekendList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/HomeHeader'
import HomeSwiper from '@/components/home/Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeRecommend from '@/components/home/Recommend'
import HomeWeekend from '@/components/home/Weekend'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return{
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      this.$axios.get('/data/index')
      .then(res=>{
        res=res.data;
        if(res.ret && res.data){
          this.city=res.data.city
          this.swiperList=res.data.swiperList
          this.iconList=res.data.iconList
          this.recommendList=res.data.recommendList
          this.weekendList=res.data.weekendList
        }
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
