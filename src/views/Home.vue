<template>
  <div class="home">
    <HomeHeader/>
    <Swiper/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader'
import Swiper from '@/components/Swiper'

export default {
  name: 'home',
  components: {
    HomeHeader,
    Swiper
  }
}
</script>
