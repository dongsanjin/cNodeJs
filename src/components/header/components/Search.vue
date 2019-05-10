<template>
  <div class="header-left">
    <section class="logo">
      <img class="logo-img" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg">
    </section>
    <form action="#" id="search-form">
      <input type="text" class="search">
    </form>
  </div>
</template>
<script>
export default {
  name: "Search"
};
</script>
<style lang="stylus" scoped>
.header-left
  float left
  overflow hidden
  height 1rem
  .logo
    height 1rem
    line-height 1rem
    width 3rem
    font-size 0
    float left
    .logo-img
      max-height 60%
      vertical-align middle
  #search-form
    float left
    overflow hidden
    width 4.4rem
    height .5rem
    margin-top .25rem
    border-radius .25rem
    .search
      font-size .2rem
      vertical-align top
      width 100%
      height 100%
      background url('https://static2.cnodejs.org/public/images/search.e53b380a.hashed.png') .08rem .08rem no-repeat #888
      border 0
      text-indent .5rem
      transition background-color 1s
      &:focus
        background-color #fff
      &:blur
        background-color #888
    &:hover
      .search
        background-color #fff
</style>
