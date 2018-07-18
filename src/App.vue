<template>
  <div id="app">
    <header-view />
    <div class="main"><router-view /></div>
  </div>
</template>

<script>
import header from '@/components/header'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'header-view': header
  }
}
</script>

<style src="./assets/css/normalize.css" lang="css"></style>
<style src="./assets/css/iconfont.css" lang="css"></style>
<style src="./assets/css/all.css" lang="css"></style>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{text-align:left;padding:5%;margin-left:80px;min-width:560px;}
</style>
