<template>
  <div class="wrapper">
    <div class="post-nav">
      <span class="post-nav-item" :class="{postNavItemActive: list === currentTab, hover: list !== currentTab}" v-for="(list, index) in tabList" :key="index" @click="select(list)">{{list}}</span>
    </div>
    <ul class="post-all">
      <li class="post-item" v-for="(list, index) of postList" :key="index">
        <a href="#" class="user-avatar-box"><img class="user-avatar" :src="list.author.avatar_url"></a>
        <div class="post-statistics">
          <span class="reply-num">{{list.reply_count}}</span><span class="spacing">/</span><span class="watch-num">{{list.visit_count}}</span>
        </div>
        <div class="post-info">
          <span class="post-type" :class="{postTop: list.top || list.good === true}" v-if="currentTabStr == 'all' || list.good == true ? true : list. top || list.good ? true : false">{{list.top == true ? "置顶" : list.good == true ? "精华" : list.tab == "share" ? "分享" : "问答"}}</span>
          <!-- <span class="post-type" :class="{postTop: list.top || list.good === true}" v-else-if="list.tab === 'all' || list.good : true ? true : list.top || list.good ? true : false">{{list.top == true ? "置顶" : list.good == true ? "精华" : list.tab == "share" ? "分享" : "问答"}}</span> -->
          <a href="#" class="post-title">{{list.title}}</a>
        </div>
        <a href="#" class="reply-user">
          <!-- <img class="reply-user-avatar" src="https://avatars3.githubusercontent.com/u/25699654?v=4&s=120"> -->
          <span class="comment-time">{{list.last_reply_at}}</span>
        </a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: "Post",
  props: {
    postList: Array
  },
  data () {
    return {
      tabList: ["全部","精华","分享","问答","招聘","客户端测试"],
      currentTab: "全部"
    }
  },
  computed: {
    currentTabStr () {
      return this.$store.state.params.tab
    }
  },
  methods: {
    select (list) {
      this.currentTab = list
      switch(list) {
        case "全部":
          this.$emit("clickTab","all")
          break
        case "精华":
          this.$emit("clickTab","good")
          break
        case "分享":
          this.$emit("clickTab","share")
          break
        case "问答":
          this.$emit("clickTab","ask")
          break
        case "招聘":
          this.$emit("clickTab","job")
          break
        case "客户端测试":
          this.$emit("clickTab","dev")
          break
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  background-color #fff
  overflow hidden
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
      cursor pointer
      &:active
        text-decoration: underline
    .hover
      color #000
    .postNavItemActive
      background-color #80bd01
      color #fff
  .post-all
    overflow hidden
    .post-item
      display flex
      overflow hidden
      height 1rem
      line-height 1rem
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
