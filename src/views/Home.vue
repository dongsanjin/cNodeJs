<template>
  <div class="home">
    <my-header></my-header>
    <my-main></my-main>
  </div>
</template>

<script>
import MyHeader from "components/header/Header"
import MyMain from "components/main/Main"

export default {
  name: 'Home',
  components: {
    MyHeader,
    MyMain
  }
}
</script>
