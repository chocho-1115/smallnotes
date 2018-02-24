<template>
  <div class="add">
    <ul class='tabs'>
        <li v-for="(item,index) in tabs" :class="{active:index==num}" @click="tab(index)" :key='item'>{{item}}</li>
    </ul>
    <div class="tabCon" v-show='num==0'>
      0
    </div>
    <div class="tabCon" v-show='num==1'>
      1
    </div>
  </div>

</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      tabs: ['添加标签', '添加分类'],
      num: 0
    }
  },
  methods: {
    tab (index) {
      this.num = index
    }
  }
}
</script>
<style scoped>
.add{}
.tabs{color:#235F93;border-bottom:1px solid #ccc;height:50px;font-size:20px;color:#474747;}
.tabs li{float:left;padding:0 20px;border:1px solid #fff;border-bottom:1px solid #ccc;line-height:49px;border-radius:3px 3px 0 0;}
.tabs li.active{border-color:#ccc;border-bottom-color:#fff;color:#333;}
.tabCon{}
</style>
