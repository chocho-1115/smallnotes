<template>
  <ul class='list'>
    <li v-for='(item, index) in lists[listsIndex]' :key='index' class='rela'>
      {{ item.content }}
      <span class="abso close show" v-on:click='remove($event,index)'>×</span>
    </li>
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
  },
  methods: {
    // 参数是子组件传过来的数据
    remove (e, index) {
      console.log(index)
      console.log(this.$(e.currentTarget).hasClass('show'))
      this.lists[this.listsIndex].splice(index, 1)
    }
  }
}
</script>

<style scoped>
.list{overflow:hidden;color:#373737;font-size:22px;}
.list li{overflow:hidden;float:left;padding:0 25px;background:#F5F5F5;min-width:50px;height:50px;line-height:50px;border:1px solid #E5E5E5;margin-right:30px;margin-bottom:24px;text-align:center;}
.list li .close{width:50px;height:50px;line-height:50px;right:-50px;top:0;background:rgba(200,0,0,.8);color:#fff;cursor:pointer;}
.list li .close.show{right:0;}
</style>
