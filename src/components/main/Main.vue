<template>
  <div class="main-outer">
    <div class="main-inner">
      <post></post>
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import Post from './components/Post'
import Sidebar from './components/Sidebar'
export default {
  name: "Main",
  components: {
    Post,
    Sidebar
  }
}
</script>
<style lang="stylus" scoped>
.main-outer
  margin .3rem 0
  width 100%
  overflow hidden
  .main-inner
    overflow hidden
    max-width 1400px
    min-width 968px
    margin 0 auto
    display flex
    border-radius .04rem
</style>
