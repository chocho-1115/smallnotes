import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import add from '@/components/add'

Vue.use(Router)

const R = new Router({
  routes: [
    {
      path: '/',
      redirect: '/list/0' // 重定向
    },
    {
      path: '/list/:id',
      name: 'list',
      component: list,
      props: true,
      meta: {
        title: 'SN'
      }
    },
    {
      path: '/add',
      name: 'add',
      component: add,
      props: true,
      meta: {
        title: 'SN-add'
      }
    }
  ]
})

// 路由全局钩子
R.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || 'SN'
  next()
})

// R.push({ name: 'page0', params: { id: 0 }})

export default R
