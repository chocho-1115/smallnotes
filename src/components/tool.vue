<template>
  <div id="type" class="type" :is="view">
  </div>
</template>

<script>
import list from '@/components/list'
import add from '@/components/add'
export default {
  name: 'tool',
  data () {
    return {
      view: 'list'
    }
  },
  components: {
    'list': list,
    'type': add
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tool{position:absolute;left:100%;top:0;background:#F5F5F5;width:280px;height:100%;border-right:1px solid #E5E5E5;z-index:2;}
.tool li{background:#F5F5F5;border:1px solid #E5E5E5;padding:0 30px;margin:30px 80px;height:40px;line-height:40px;}
</style>
