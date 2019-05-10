<template>
  <ul class="wrapper">
    <li class="side github-login">
      <p class="side-text">CNode: Node.js专业中文社区</p>
      <div class="login-inner">
        您可以<a href="#" class="behavior">登录</a>或<a href="#" class="behavior">注册</a>,也可以
      </div>
      <a class="btn-login">通过Github登录</a>
    </li>
    <li class="side recommend">
      <a href="#" class="img-box">
        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS">
      </a>
      <a href="#" class="img-box">
        <img src="https://static.cnodejs.org/FvSQHGgGVh_tkomqIFQ0MDEH9wrg">
      </a>
      <a href="#" class="img-box">
        <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_">
      </a>
    </li>
    <li class="side reply">
      <div class="title">
        无人回复的话题
      </div>
      <div class="topic-wrapper">
        <a href="#" class="not-reply-topic">Node.js 是如何异步判断文件是否存在?</a>
        <a href="#" class="not-reply-topic">最简洁的react router，仅一行代码。</a>
        <a href="#" class="not-reply-topic">express传入模板引擎变量的源码分析</a>
        <a href="#" class="not-reply-topic">CEAMS: 基于Node.js的高效微服务应用开发运维和API管理系统提供免费下载使用</a>
        <a href="#" class="not-reply-topic">计算机语言的性能指标都是啥意思?</a>
      </div>
    </li>
    <li class="side integral">
      <div class="title">
        积分榜<span class="ranking">TOP 100 >></span>
      </div>
      <div class="ranking-wrapper">
        <a href="#" class="top">21400 <span class="username">i5ting</span></a>
        <a href="#" class="top">15475 <span class="username">alsotang</span></a>
        <a href="#" class="top">9350 <span class="username">leapon</span></a>
        <a href="#" class="top">8780 <span class="username">jiyinyiyong</span></a>
        <a href="#" class="top">8475 <span class="username">atian25</span></a>
        <a href="#" class="top">7185 <span class="username">yakczh</span></a>
        <a href="#" class="top">6745 <span class="username">im-here</span></a>
        <a href="#" class="top">6075 <span class="username">DevinXian</span></a>
        <a href="#" class="top">5790 <span class="username">chapgaga</span></a>
        <a href="#" class="top">5345 <span class="username">magicdawn</span></a>
      </div>
    </li>
    <li class="side community">
      <img class="community-img" src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png">
      <img class="community-img" src="https://static2.cnodejs.org/public/images/golangtc-logo.png">
      <img class="community-img" src="https://static2.cnodejs.org/public/images/phphub-logo.png">
      <img class="community-img" src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK">
    </li>
    <li class="side qr-code">
      <div class="title">
        客户端二维码
      </div>
      <div class="code-img">
        <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
      </div>
      <p class="code-desc">客户端源码地址</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Sidebar"
}
</script>
<style lang="stylus" scoped>
  .wrapper
    width 5.8rem
    float right
    margin-left .3rem
    font-size .28rem
    .side
      margin-bottom .2rem
      padding .2rem
      box-sizing border-box
      background-color #fff
    .github-login
      height 2.32rem
      line-height .5rem
      .side-text
        margin-bottom .2rem
      .behavior
        font-size .26rem
        color #778087
        margin 0 .1rem
      .btn-login
        display inline-block
        width 3rem
        height .7rem
        line-height .7rem
        border-radius .06rem
        background-color #5bc0de
        color #fff
        text-align center
        cursor pointer
        letter-spacing .04rem
        transition all .2s ease-in-out
        &:hover
          background-color #2f96b4
    .recommend
      .img-box
        display block
        margin-bottom .2rem
        &:last-child
          margin-bottom 0
    .reply,
    .integral
    .qr-code
      padding 0
    .side
      .title
        height .8rem
        line-height .5rem
        padding .2rem
        box-sizing border-box
        background-color #f6f6f6
        color #51585c
        font-size .26rem
        .ranking
          margin-left .2rem
      .topic-wrapper,
      .ranking-wrapper
        padding .24rem .2rem
        .not-reply-topic,
        .top
          display block
          color #778087
          line-height .6rem
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
        .top
          font-size .26rem
          .username
            margin-left .2rem
    .community
      .community-img
        max-width 3rem
        margin-top .2rem
      .community-img:first-child
        margin-top 0
    .qr-code
      padding-bottom .3rem
      .code-img
        width 4rem
        height 4rem
        margin .15rem auto
      .code-desc
        text-align center
        color #778087
</style>
