<template>
  <div class="outer">
    <div class="inner">
      <div class="source-code"><a href="https://cnodejs.org/rss" class="source-code-link">RSS</a><span class="segmentation"> | </span><a href="https://github.com/cnodejs/nodeclub/" class="source-code-link">源码地址</a></div>
      <p class="cnode-desc">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <div class="sponsor">
          服务器赞助商为
          <a href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo"><img src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" width="92px"></a>
          ，存储赞助商为
          <a href="https://www.qiniu.com/?ref=cnode"><img src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" width="115px"></a>
          ，由
          <a href="https://www.aliyun.com/product/nodejs?ref=cnode"><img src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" width="166px"></a>提供应用性能服务。
      </div>
      <div class="suggest">
        新手搭建 Node.js 服务器，推荐使用无需备案的 
        <a href="https://www.digitalocean.com" class="server-link">DigitalOcean(https://www.digitalocean.com/)</a>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="stylus" scoped>
.outer
  width 100%
  background-color #fff
  .inner
    overflow hidden
    max-width 1400px
    min-width 968px
    margin 0 auto
    padding .6rem 0
    font-size .28rem
    color #ababab
    .source-code
      .segmentation
        font-size .16rem
        opacity .4
      .source-code-link
        color #666
    .sponsor
      margin .1rem 0
    .cnode-desc,
    .suggest
      line-height .6rem
      .server-link:hover
        text-decoration underline
        color #000
</style>
