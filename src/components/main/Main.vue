<template>
  <div class="main-outer">
    <div class="main-inner">
      <post :postList="postList">
        <pagination @changePage="changePage"></pagination>
      </post>
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import Post from './components/Post'
import Sidebar from './components/Sidebar'
import Pagination from './components/Pagination'

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
      currentPage: 1,
      postList: []
    }
  },
  methods: {
    //发送get请求
    handlePostAxios () {
      axios.get("https://cnodejs.org/api/v1/topics",{
        params: {
          page: this.currentPage
        }
      })
      .then(this.getPostInfo)
    },
    getPostInfo (res) {
      const data = res.data
      if(data.success === true){
        this.postList = res.data.data
      }
    },
    changePage (childCurrentPage) {
      this.currentPage = childCurrentPage
      /* eslint-disable */
      console.log("接收到了值")
      console.log(this.currentPage)
      this.handlePostAxios()
    }
  },
  //监听postList将数据中的时间格式进行转换
  watch: {
    postList () {
      const nowTime = Date.now()
      this.postList.forEach(list => {
        const lastTime = Date.parse(list.last_reply_at)
        list.last_reply_at = Math.floor((nowTime - lastTime) / 1000 / 3600)
        if (list.last_reply_at < 24) {
          list.last_reply_at = list.last_reply_at + "小时前"
        } else if (list.last_reply_at >= 24){
          list.last_reply_at = Math.ceil(list.last_reply_at / 24) + "天前"
        } else if (list.last_reply_at > 720){
          list.last_reply_at = Math.ceil(list.last_reply_at / 24 / 30) + "个月前"
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
