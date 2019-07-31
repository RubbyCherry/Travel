<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/varibles.styl';

  .header
    display: flex
    line-height: 3.32rem
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
      height: 2.38rem
      line-height: 2.38rem
      margin-top: .5rem
      margin-left: .4rem
      padding-left: .4rem
      background: #fff
      border-radius: .2rem
      color: #ccc
    .header-right
      width: 4.48rem
      float:right
      text-align: center
      .arrow-icon
        font-size: .8rem
</style>
