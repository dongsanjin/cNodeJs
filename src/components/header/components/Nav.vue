<template>
  <div class="header-right">
    <div class="nav-lists">
      <a href="" class="nav-list nav-list-active">首页</a>
      <a href="" class="nav-list">新手入门</a>
      <a href="" class="nav-list">API</a>
      <a href="" class="nav-list">关于</a>
      <a href="" class="nav-list">注册</a>
      <a href="" class="nav-list">登录</a>
    </div>
  </div>
</template>
<script>
export default {
    name: "Nav"
}
</script>
<style lang="stylus" scoped>
.header-right
  float right
  .nav-lists
    font-size .26rem
    .nav-list
      float left
      margin 0 .3rem
      color #ccc
      &:hover
        color #fff
    .nav-list-active
      color #08c
</style>
