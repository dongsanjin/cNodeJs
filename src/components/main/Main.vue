<template>
  <div class="main-outer">
    <div class="main-inner">
      <post :postList="postList" @clickTab="clickTab">
        <pagination @chickPage="chickPage"></pagination>
      </post>
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import Post from './components/Post'
import Sidebar from './components/Sidebar'
import Pagination from './components/Pagination'
import { mapActions } from 'vuex'
import changeUrl from 'assets/js/urlPath'

const axios = require('axios')
export default {
  name: "Main",
  components: {
    Post,
    Sidebar,
    Pagination
  },
  data () {
    return {
      postList: [],
      currentPage: this.$store.state.params.page,
      params: {}
    }
  },
  methods: {
    //发送get请求
    handlePostAxios () {
      // changeUrl(this.params)
      this.params = {
        tab: this.$store.state.params.tab,
        page: this.$store.state.params.page
      }
      console.log(this.params)
      axios.get("https://cnodejs.org/api/v1/topics",
        {
          tab: this.$store.state.params.tab,
          page: this.$store.state.params.page
      })
      .then(this.getPostInfo)
      .catch(this.getError())
    },
    getPostInfo (res) {
      const data = res.data
      if(data.success === true){
        this.postList = res.data.data
      }
      console.log(this.$store.state.params.tab)
    },
    getError () {
      console.log("没有发送请求")
    },
    chickPage (childCurrentPage) {
      this.$store.state.params.page = childCurrentPage
      /* eslint-disable */
      this.changePage(childCurrentPage)
      this.handlePostAxios()
    },
    clickTab (tab) {
      this.changeTab(tab)
      this.changePage("")
      this.handlePostAxios()
    },
    ...mapActions([
      'changePage',
      'changeTab'
    ])
  },
  //监听postList将数据中的时间格式进行转换
  watch: {
    postList () {
      const nowTime = Date.now()
      this.postList.forEach(list => {
        const lastTime = Date.parse(list.last_reply_at)
        list.last_reply_at = Math.ceil((nowTime - lastTime) / 1000 / 60)
        if (list.last_reply_at < 60){
          list.last_reply_at = list.last_reply_at + "分钟前"
        }else if (list.last_reply_at > 60){
          list.last_reply_at = Math.floor((nowTime - lastTime) / 1000 / 3600)
          if (list.last_reply_at < 24) {
            list.last_reply_at = list.last_reply_at + "小时前"
          } else if (list.last_reply_at >= 24){
            list.last_reply_at = Math.floor(list.last_reply_at / 24) + "天前"
          } else if (list.last_reply_at > 720){
            list.last_reply_at = Math.floor(list.last_reply_at / 24 / 30) + "个月前"
          }
        }
      })
    }
  },
  created () {
    this.handlePostAxios()
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
