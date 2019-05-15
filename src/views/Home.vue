<template>
  <div class="home">
    <home-header></home-header>
    <div class="main-box">
      <home-sidebar class="main-right"></home-sidebar>
      <router-view class="main-left"></router-view>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from "components/header/Header"
import HomeFooter from "components/footer/Footer"
import HomeSidebar from 'components/sidebar/Sidebar'
// import Bus from 'assets/js/bus'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSidebar,
    HomeFooter
  }
}
</script>
<style lang="stylus" scoped>
  .main-box
    overflow hidden
    max-width 1400px
    min-width 960px
    width 90%
    margin .3rem auto
    .main-left
      overflow hidden
    .main-right
      margin-left .3rem
      width 5.8rem
      font-size .28rem
      float right
</style>
