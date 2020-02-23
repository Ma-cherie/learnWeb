<template>
  <div id="app">
    <div class="wrapper">
      <sys-header></sys-header>
      <left-menu></left-menu>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from "./components/leftMenu"
import sysHeader from "./components/sysHeader"

export default {
  components:{
    sysHeader,
    leftMenu,
  }
}
</script>

<style>
@import "./assets/index.css";
</style>
