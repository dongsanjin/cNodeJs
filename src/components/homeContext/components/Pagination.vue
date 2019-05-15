<template>
  <div class="pageContainer">
    <ul class="pageInner">
      <li class="page prev">
        <span  @click="setMinCurrentPage">&lt;&lt;</span>
      </li>
      <li class="page" v-for="(list, index) of pageList" :key="index">
        <span  :class="{pageActive: list === childCurrentPage, disable: typeof list === 'string'}" :disable="typeof list === 'string'" @click="select(list)">{{list}}</span>
      </li>
      <li class="page next">
        <span  @click="setMaxCurrentPage">&gt;&gt;</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data () {
    return {
      childCurrentPage: 1
    }
  },
  methods: {
    select (list) {
      if(list === this.childCurrentPage) return
      if(typeof list === "string") return
      this.childCurrentPage = list
      this.$emit("chickPage", this.childCurrentPage)
    },
    setMinCurrentPage () {
      this.childCurrentPage = 1
      this.$emit("chickPage", this.childCurrentPage)
    },
    setMaxCurrentPage () {
      this.childCurrentPage = this.totalPages
      this.$emit("chickPage", this.childCurrentPage)
    }
  },
  computed: {
    totalPages () {
      let tab = this.$store.state.params.tab
      let num = 0
      switch (tab) {
        case 'all': 
          num = 67
          break
        case 'good':
          num = 18
          break
        case 'share':
          num = 18
          break
        case 'ask':
          num = 18
          break
        case 'job':
          num = 18
          break
        case 'dev':
          num = 18
          break
        default:
          num = 1
          break
      }
      return num
    },
    pageList () {
      const c = this.childCurrentPage
      let t = this.totalPages
      if (c < 4) {
        return [1,  2,  3,  4, 5, "..."]
      }else if(c >= 4 && c < t - 2) {
        return ["...",c - 2, c - 1, c, c + 1, c + 2, "..."]
      }else if(c === (t - 2)){
        return ["...",c - 2, c - 1, c, c + 1, c + 2]
      }else if(c === (t - 1)){
        return ["...",c - 2, c - 1, c, c + 1]
      }else{
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
      cursor not-allowed
    .disable
      cursor not-allowed
</style>
