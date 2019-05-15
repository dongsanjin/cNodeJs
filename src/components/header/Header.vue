<template>
  <div class="wrapper">
    <div class="header">
      <search></search>
      <my-nav></my-nav>
    </div>
  </div>
</template>
<script>
import Search from "./components/Search"
import MyNav from "./components/Nav"
export default {
  name: "Header",
  components: {
    Search,
    MyNav
  }
};
</script>
<style lang="stylus" scoped>
  .wrapper
    width 100%
    background #444
    .header
      width 90%
      overflow hidden
      max-width 1400px
      min-width 968px
      margin 0 auto
      height 1rem
      line-height 1rem
</style>
