<template>
  <div class="header-right">
    <ul class="nav-lists">
      <li class="nav-list">首页</li>
      <li class="nav-list">新手入门</li>
      <li class="nav-list">API</li>
      <li class="nav-list">关于</li>
      <li class="nav-list">注册</li>
      <li class="nav-list">登录</li>
    </ul>
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
    font-size .2rem
    .nav-list
      float left
      margin 0 .3rem
      color #ccc
</style>
