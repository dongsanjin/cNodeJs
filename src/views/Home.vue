<template>
  <div class="home">
    <my-header></my-header>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "components/header/Header"
import MyMain from "components/main/Main"
import MyFooter from "components/footer/Footer"

export default {
  name: 'Home',
  components: {
    MyHeader,
    MyMain,
    MyFooter
  }
}
</script>
