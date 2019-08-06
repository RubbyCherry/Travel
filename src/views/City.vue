<template>
  <div>
    <CityHeader/>
    <CitySearch/>
    <CityList/>
    <Alphabet/>
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
  }
}
</script>

<style lang="stylus" scoped>

</style>


