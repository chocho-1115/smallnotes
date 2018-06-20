<template>
  <ul class='list'>
    <li v-for='(item, index) in lists[listsIndex]' :key='index'>{{ item.content }}</li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      listsIndex: this.$route.params.id || 0,
      lists: {}
    }
  },
  // watch
  watch: {
    'msg' (to, from) {
      // console.log(this)
      // $route.getStatus(this.$route.path)
    }
  },
  // 在当前路由改变，但是该组件被复用时调用
  beforeRouteUpdate (to, from, next) {
    this.listsIndex = to.params.id
    next()
  },
  // 离开当前路由的时候 调用该钩子
  beforeRouteLeave (to, from, next) {
    next()
  },
  created: function () {
    // console.log(this.$route.params.id)
    this.lists = {
      '0': [
        {content: 'ifconfig'},
        {content: 'soul'},
        {content: 'gray'},
        {content: 'girl'},
        {content: 'component'},
        {content: 'methods'},
        {content: 'slice'},
        {content: 'splice'},
        {content: 'split'}
      ],
      '1': [
        {content: '第一个notes'}
      ],
      '2': [
        {content: '第二个notes'}
      ]
    }
  }
}
</script>

<style scoped>
.main{font-size:50px;padding-left:80px;}
.list{overflow:hidden;color:#373737;font-size:20px;}
.list li{float:left;padding:0 25px;background:#F5F5F5;height:35px;line-height:35px;border:1px solid #E5E5E5;margin-right:30px;margin-bottom:24px;}
</style>
