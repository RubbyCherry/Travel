<template>
  <div>
    <CityHeader/>
    <CitySearch/>
    <CityList :cities="cities" :hotCities="hotCities"/>
    <Alphabet :cities="cities"/>
  </div>
</template>

<script>
import CityHeader from '@/components/city/CityHeader'
import CitySearch from '@/components/city/CitySearch'
import CityList from '@/components/city/CityList'
import Alphabet from '@/components/city/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  data () {
    return{
      cities: {},
      hotCities: []
    }
  },
  methods:{
    getCityInfo(){
      this.$axios.get('/data/city')
      .then(res=>{
        res=res.data;
        if(res.ret && res.data){
          this.cities=res.data.cities
          this.hotCities=res.data.hotCities
        }
      })
    }
  },
  mounted () {
    this.getCityInfo();
  }
}
</script>

<style lang="stylus" scoped>

</style>


