import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home',component:home},
    {path:'/home',name:'home',component:home},
  ]
})
