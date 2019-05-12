<template>
  <div class="pageContainer">
    <ul class="pageInner">
      <li class="page prev">
        <span @click="setMinCurrentPage">&lt;&lt;</span>
      </li>
      <li class="page" v-for="(list, index) of pageList" :key="index">
        <span :class="{pageActive: list === childCurrentPage}" @click="select(list)">{{list}}</span>
      </li>
      <li class="page next">
        <span @click="setMaxCurrentPage">&gt;&gt;</span>
      </li>
    </ul>
  </div>  
</template>
<script>
/* eslint-disable */
export default {
  name: "Pagination",
  data () {
    return {
      childCurrentPage: 1,
      totalPages: 67
    }
  },
  methods: {
    select (list) {
      if (list === this.currentPage) return
      if (typeof list === 'string') return
      this.$emit("changePage", this.childCurrentPage + 1)
      this.childCurrentPage = list
      console.log("点击了")
    },
    setMinCurrentPage () {
      this.$emit("changePage", this.childCurrentPage)
      this.childCurrentPage = 1
      console.log("点击了")
    },
    setMaxCurrentPage () {
      this.$emit("changePage", this.childCurrentPage)
      this.childCurrentPage = this.totalPages
      console.log("点击了")
    }
  },
  computed: {
    pageList () {
      const c = this.childCurrentPage
      if (c < 4) {
        return [1,  2,  3,  4, 5, "..."]
      }else if(c >= 4 && c < 65) {
        return ["...",c - 2, c - 1, c, c + 1, c + 2, "..."]
      }else if(c === 65){
        return ["...",c - 2, c - 1, c, c + 1, c + 2]
      }else if(c === 66){
        return ["...",c - 2, c - 1, c, c + 1]
      }else if(c === 67){
        return ["...",c - 2, c - 1, c]
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
      cursor pointer
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
