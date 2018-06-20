<template>
  <div id="header" class="header">

      <h1 class="logo" to='/'>SN</h1>
      <ul class='navbar' id='navbar'>
        <router-link tag='li' v-for='(item) in colorList' v-if='!item.hidden' :to='{name:"list",params:{id:item.id}}' :key="item.id">
          <span class="icon" :style='{backgroundColor:item.color}'></span>
        </router-link>
      </ul>

      <ul class='tool'>
        <router-link tag='li' class='iconfont icon-add add' active-class='in' :to='{name:"add",params:{}}'></router-link>
      </ul>

  </div>
</template>

<script>
// import Vue from 'vue'
// import VueResource from 'vue-resource'

// Vue.use(VueResource) // 这个一定要加上，指的是调用vue-resource.js
export default {
  name: 'navbar', // div的id
  data () {
    return {
      colorList: []
    }
  },
  // created方法，页面初始调用
  created: function () {
    /* var url = "/library/libraryInfo";
    this.$http.get(url).then(function (data) {  //ajax请求封装
      var json = data.bodyText;
      var usedData= JSON.parse(json);
      //我的json数据参考下面
      this.libraryInfo = usedData["libraryBooks"];
    }, function (response) {   //返回失败方法调用，暂不处理
      console.info(response);
    }) */
    this.colorList = [
      {hidden: false, color: '#fff', id: 0},
      {hidden: false, color: '#696', id: 1},
      {hidden: false, color: '#966', id: 2}
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{position:fixed;left:0;top:0;width:80px;height:100%;z-index:2;background:#235F93;}
.header .logo{color:#fff;}
.header li{cursor:pointer;height:80px;line-height:80px;background-size: 100% 100%;font-size:32px;color:#fff; white-space:nowrap;}
.header li.in,
.header li:hover{background:#145892;}
.header .navbar li .icon{width:15px;height:15px;display:inline-block;border-radius:1000px;}
.header .tool{position:absolute;left:0;bottom:0;width:100%;}
</style>
