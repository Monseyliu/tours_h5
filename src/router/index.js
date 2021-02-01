import Vue from 'vue'
import VueRouter from 'vue-router'

// 主页面路由
const Index = () => import (/*webpackChunkName: "index-index"*/"../pages/Index");
const Home = () => import (/*webpackChunkName: "index-home"*/"../pages/home/Home");

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index, children: [
    { path: '/', redirect: '/home'},
    { path: '/home',name: 'Home',component: Home }
  ]},
  
]

const router = new VueRouter({
  routes
})

export default router
