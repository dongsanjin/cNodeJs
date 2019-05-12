<template>
  <div class="pageContainer">
    <ul class="pageInner">
      <li class="page prev">
        <a href="#">&lt;&lt;</a>
      </li>
      <li class="page" v-for="list of pages.pageList" :key="list">
        <a href="#" :class="{pageActive:list == 1 ? true : false}">{{list}}</a>
      </li>
      <li class="page next">
        <a href="#">&gt;&gt;</a>
      </li>
    </ul>
  </div>  
</template>
<script>
export default {
  name: "Pagination",
  data () {
    return {
      pages: {
        pageList: [1,2,3,4,5,"..."],
        talodPage: 10,
        showPage: 5
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.pageContainer
  .pageInner
    font-size .28rem
    overflow hidden
    padding .2rem
    .page
      float left
      padding .16rem .24rem
      border 1px solid #ddd
      border-left-width 0
    .prev,
    .next
      letter-spacing -.1rem
      padding-right .3rem
    .prev
      border-left 1px solid #ddd
      border-top-left-radius .08rem
      border-bottom-left-radius .08rem
    .next
      border-top-right-radius .08rem
      border-bottom-right-radius .08rem
    .pageActive
      color #80bd01
</style>
