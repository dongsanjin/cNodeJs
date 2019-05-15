<template>
  <div class="home-content-outer">
    <div class="home-content-inner">
      <topic :topicList="topicList" @clickTab="clickTab">
        <pagination @chickPage="chickPage" ref="select"></pagination>
      </topic>
    </div>
  </div>
</template>
<script>
import Topic from './components/Topic'
import Pagination from './components/Pagination'
import { mapActions } from 'vuex'
import conversionTime from 'assets/js/conversionTime'
import changeUrl from 'assets/js/urlPath'

const axios = require('axios')
export default {
  name: "homeContent",
  components: {
    Topic,
    Pagination
  },
  data () {
    return {
      topicList: [],
      params: {},
      topic: {}
    }
  },
  methods: {
    //发送get请求
    handleTopicAxios () {
      this.params = {
        tab: this.$store.state.params.tab,
        page: this.$store.state.params.page
      }
      changeUrl(this.params)
      axios.get("https://cnodejs.org/api/v1/topics",
        {
          params: this.params
      })
      .then(this.getTopicInfo)
      .catch(this.getError)
    },
    getTopicInfo (res) {
      const data = res.data
      if(data.success === true){
        this.topicList = res.data.data
      }
    },
    getError () {
      // eslint-disable-next-line
      console.log("没有发送请求")
    },
    // 点击更换页码
    chickPage (currentPage) {
      /* eslint-disable */
      this.changePage(currentPage)
      this.handleTopicAxios()
    },
    // 点击更换
    clickTab (tab) {
      this.changeTab(tab)
      this.changePage(1)
      this.handleTopicAxios()
      this.$refs.select.select(1)
    },
    passTopic (list) {
      this.topic = list
    },
    ...mapActions([
      'changePage',
      'changeTab'
    ])
  },
  //监听topicList将数据中的时间格式进行转换
  watch: {
    topicList () {
      conversionTime(this.topicList)
    }
  },
  created () {
    this.handleTopicAxios()
  }
}
</script>
<style lang="stylus" scoped>
.home-content-outer
  .home-content-inner
    overflow hidden
    max-width 1400px
    margin 0 auto
    display flex
    border-radius .04rem
</style>
