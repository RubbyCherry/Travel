<template>
  <div class="home">
    <HomeHeader/>
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
import { mapState } from 'vuex'

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
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      this.$axios.post('/data/index',{
        city: this.city
      })
      .then(res=>{
        res=res.data;
        if(res.ret && res.data){
          this.swiperList=res.data.swiperList
          this.iconList=res.data.iconList
          this.recommendList=res.data.recommendList
          this.weekendList=res.data.weekendList
        }
      })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
