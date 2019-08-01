<template>
  <div class="home">
    <HomeHeader/>
    <HomeSwiper/>
    <HomeIcons/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader'
import HomeSwiper from '@/components/Swiper'
import HomeIcons from '@/components/Icons'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
