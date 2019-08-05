<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/City">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props:['city']
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: 2.28rem
      float: left
      .back-icon
        text-align: center
        font-size: 1.4rem
    .header-input
      flex: 1
      height: 2.58rem
      line-height: 2.58rem
      margin-top: .3rem
      margin-left: .4rem
      padding-left: .4rem
      background: #fff
      border-radius: .2rem
      color: #ccc
    .header-right
      width: 4.48rem
      float:right
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .8rem
</style>
