<template>
  <div class="home">
    <HomeHeader/>
    <Swiper/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'
import Swiper from '@/components/Swiper.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    Swiper
  }
}
</script>
