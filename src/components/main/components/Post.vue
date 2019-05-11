<template>
  <div class="wrapper">
    <ul class="post-nav">
      <li class="post-nav-item post-nav-item-active">全部</li>
      <li class="post-nav-item">精华</li>
      <li class="post-nav-item">分享</li>
      <li class="post-nav-item">问答</li>
      <li class="post-nav-item">招聘</li>
      <li class="post-nav-item">客户端测试</li>
    </ul>
    <ul class="post-all">
      <li class="post-item" v-for="(list, index) of postList" :key="index">
        <a href="#" class="user-avatar-box"><img class="user-avatar" :src="list.author.avatar_url"></a>
        <div class="post-statistics">
          <span class="reply-num">{{list.reply_count}}</span><span class="spacing">/</span><span class="watch-num">{{list.visit_count}}</span>
        </div>
        <div class="post-info">
          <span class="post-type" :class="{postTop: list.top}">{{list.top == true ? "置顶" : list.tab == "share" ? "分享" : "问答"}}</span>
          <a href="#" class="post-title">{{list.title}}</a>
        </div>
        <a href="#" class="reply-user">
          <img class="reply-user-avatar" src="https://avatars3.githubusercontent.com/u/25699654?v=4&s=120">
          <span class="comment-time">2 天前</span>
        </a>
      </li>
    </ul>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="67">
      </el-pagination>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  name: "Post",
  data () {
    return {
      postList: []
    }
  },
  methods: {
    handlePostAxios () {
      axios.get("https://cnodejs.org/api/v1/topics")
        .then(this.getPostInfo)
    },
    getPostInfo (res) {
      const data = res.data
      if(data.success === true){
        this.postList = res.data.data
      }
    }
  },
  mounted () {
    this.handlePostAxios()
  },
  watch: {

  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  flex 1
  .post-nav
    height .88rem
    background-color #f6f6f6
    font-size .28rem
    padding-left .2rem
    .post-nav-item
      float left
      margin .2rem
      padding .1rem
      box-sizing border-box
      border-radius .06rem
      color #80bd01
    .post-nav-item-active
      background-color #80bd01
      color #fff
  .post-all
    overflow hidden
    .post-item
      display flex
      overflow hidden
      height 1rem
      line-height 1rem
      background-color #fff
      font-size .28rem
      padding 0 .2rem
      box-sizing border-box
      border-top 1px solid #f0f0f0
      margin-top -1px
      .user-avatar-box,
      .user-avatar,
      .reply-user-avatar
        display inline-block
        width .6rem
        vertical-align middle
      .post-statistics
        display inline-block
      .post-statistics
        width 1.6rem
        text-align center
        .reply-num
          color #9e78c0
        .watch-num
          color #b4b4b4
          font-size .26rem
        .spacing
          margin 0 .04rem
      .post-info
        flex 1
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        .post-type
          padding 0.04rem 0.08rem
          margin-right .1rem
          border-radius .06rem
          font-size .24rem
          text-align center
          color #999
          background-color #e5e5e5
        .postTop
          color #fff
          background-color #80bd01
        .post-title
          color #000
          &:hover
            text-decoration underline
          &:visited
            color #888
      .reply-user
        float right
        .reply-user-avatar
          width .36rem
          border-radius .06rem
        .comment-time
          display inline-block
          width 1.3rem
          font-size .24rem
          text-align right
          color #778087
</style>
