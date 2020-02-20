<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <br/>
      <router-link to="/a">动态路由</router-link> |
      <router-link to="/b">导航守卫</router-link> |
      <router-link to="/c">嵌套路由</router-link> |
      <router-link to="/about">权限验证</router-link>
      <br/>
      <router-link to="/store">Vuex</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
