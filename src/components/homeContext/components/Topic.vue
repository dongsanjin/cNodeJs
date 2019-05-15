<template>
  <div class="wrapper">
    <div class="topic-nav">
      <span class="topic-nav-item" :class="{TopicNavItemActive: list === currentTab, hover: list !== currentTab, TopicNavItemNotActive: list !== currentTab}" v-for="(list, index) in tabList" :key="index" @click="select(list)">{{list}}</span>
    </div>
    <ul class="topic-all">
      <li class="topic-item" v-for="(list, index) of topicList" :key="index">
        <a :href="'https://cnodejs.org/user' + '/' + list.author.loginname" class="user-avatar-box"><img class="user-avatar" :src="list.author.avatar_url"></a>
        <div class="topic-statistics">
          <span class="reply-num">{{list.reply_count}}</span><span class="spacing">/</span><span class="watch-num">{{list.visit_count}}</span>
        </div>
        <div class="topic-info">
          <span class="topic-type" :class="{TopicTop: list.top || list.good === true}" v-if="currentTabStr == 'all' || list.good == true ? true : list. top || list.good ? true : false">{{list.top == true ? "置顶" : list.good == true ? "精华" : list.tab == "share" ? "分享" : "问答"}}</span>
          <router-link :to="'/' + list.id" class="topic-title">{{list.title}}</router-link>
        </div>
        <a href="#" class="reply-user">
          <span class="comment-time">{{list.last_reply_at}}</span>
        </a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Topic",
  props: {
    topicList: Array
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
  .topic-nav
    height .88rem
    background-color #f6f6f6
    font-size .28rem
    padding-left .2rem
    .topic-nav-item
      float left
      margin .2rem
      padding .1rem
      box-sizing border-box
      border-radius .06rem
      color #80bd01
      cursor pointer
      &:hover
        color #005580
      &:active
        text-decoration: underline
    .TopicNavItemNotActive
      color #80bd01
    .TopicNavItemActive
      background-color #80bd01
      color #fff
  .topic-all
    overflow hidden
    .topic-item
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
      .topic-statistics
        display inline-block
      .topic-statistics
        width 1.6rem
        text-align center
        .reply-num
          color #9e78c0
        .watch-num
          color #b4b4b4
          font-size .26rem
        .spacing
          margin 0 .04rem
      .topic-info
        flex 1
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        .topic-type
          padding 0.04rem 0.08rem
          margin-right .1rem
          border-radius .06rem
          font-size .24rem
          text-align center
          color #999
          background-color #e5e5e5
        .TopicTop
          color #fff
          background-color #80bd01
        .topic-title
          color #000
      .reply-user
        float right
        width 1.4rem
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
