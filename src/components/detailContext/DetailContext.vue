<template>
  <div class="wrapper">
    <div class="topic-detail">
      <div class="topic-header">
        <div class="topic-title">
          <span class="topic-type" :class="{TopicTop: topic.top || topic.good === true}">{{tab}}</span>
          <span class="title">{{topic.title}}</span>
        </div>
        <div class="topic-info">
          <li class="topic-create-time">发布于{{topic.create_at}}</li>
          <li class="topic-author">作者 {{topic.author.loginname}}</li>
          <li class="watch-count">{{topic.visit_count}} 次浏览</li>
          <li class="topic-source">来自 {{tab}}</li>
        </div>
      </div>
      <div class="topic-content" v-html="content">
      </div>
    </div>
    <div class="topic-reply">
      <div class="reply-count">
        {{topic.replies.length}}回复
      </div>
      <div class="reply-detail" :class="{replyDetailHigh : index < 3}" v-for="(user, index) of topic.replies" :key="user.id">
        <div class="reply-info">
          <img :src="user.author.avatar_url" class="reply-img">
          <a href="#" class="reply-user-name">{{user.author.loginname}}</a>
          <a href="#" class="reply-time">{{index + 1}}楼<span class="cricle"></span>{{user.create_at}}</a>
        </div>
        <p class="reply-content" v-html="user.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import time from 'assets/js/conversionStrTime'
import conversionTime from 'assets/js/conversionTime'
import { mapActions } from 'vuex'

export default {
  name: 'detailContext',
  data () {
    return {
      topicId: '',
      topic: {}
    }
  },
  methods: {
    getTopic () {
      let url = 'https://cnodejs.org/api/v1/topic/' + this.topicId
      axios.get(url)
      .then(this.getTopicContent)
    },
    getTopicContent (res) {
      if( res.data.success === true)
      this.topic = res.data.data
    },
    ...mapActions([
      "setTopicId"
    ])
  },
  computed: {
    tab () {
      return this.topic.top === true ? '置顶' : this.topic.good === true ? '精华' : this.topic.tab === "share" ? "分享" : "问答"
    },
    content () {
      let content = this.topic.content
      const reg = /\n/g
      return content.replace(reg, '<br/>')
    }
  },
  watch: {
    topic () {
      this.topic.create_at = time (this.topic.create_at)
      this.topic.replies = conversionTime (this.topic.replies)
    }
  },
  created () {
    this.topicId = this.$route.params.id
    this.getTopic()
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  .topic-detail
    background-color #fff
    .topic-header
      border-bottom 1px solid #dfe6e9
      padding 0 .2rem
      .topic-title
        font-size .9rem
        .topic-type
          padding .04rem .08rem
          font-size .24rem
          font-weight bold
          color #fff
          border-radius .04rem
        .TopicTop
          background-color #80bd01
        .title
          font-size .44rem
          font-weight bold
          margin-left .1rem
      .topic-info
        font-size .24rem
        color #838383
        line-height 1rem
        & > li
          display inline
          &:before
            content: " • "
    .topic-content 
      & >>> .markdown-text
        font-size .3rem
        padding .3rem .4rem
        p
          line-height .5rem
        a
          color #08c
        blockquote
          border-left .1rem solid #eee
          padding 0 0 0 .3rem
          margin .1rem 0
          p
            color #838383
            a
              color #08c
        p:last-child
          margin-top .3rem
  .topic-reply
    .reply-count
      height .8rem
      line-height .8rem
      margin-top .3rem
      padding-left .2rem
      font-size .28rem
      background-color #f6f6f6
    .reply-detail
      padding .2rem .2rem .4rem
      width 100%
      background-color #fff
      box-sizing border-box
      font-size .28rem
      border-bottom 1px solid #f0f0f0
      .reply-info
        display inline-block
        font-size .24rem
        padding-top .1rem
        height .1rem
        .reply-img
          width .6rem
          height .6rem
          display inline-block
          overflow hidden
          vertical-align text-top
        .reply-user-name
          font-size .24rem
          margin 0 .1rem 0 .2rem
          color #000
          font-weight bold
        .reply-time
          color #08c
          &:hover
            color #005580
            text-decoration underline
          .cricle
            &:before
              content: '\2022'
      .reply-content
        width 93%
        margin .1rem .36rem
        padding-left .6rem
        font-size .28rem
        & >>> a
          color #08c
        & >>> p
          line-height .44rem
    .replyDetailHigh
      background-color #f4fcf0
</style>
