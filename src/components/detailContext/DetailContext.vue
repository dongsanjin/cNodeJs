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
  </div>
</template>

<script>
import axios from 'axios'
import time from 'assets/js/conversionStrTime'
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
      time (this.topic)
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
</style>
