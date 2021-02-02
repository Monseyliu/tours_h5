import Vue from 'vue'
import VueRouter from 'vue-router'

// 主页面路由
const Index = () => import (/*webpackChunkName: "index-index"*/"../pages/Index");
const Home = () => import (/*webpackChunkName: "index-home"*/"../pages/home/Home");

// 其他一级路由
const City = () => import (/*webpackChunkName: "city-city"*/"../pages/city/City");
const Detail = () => import (/*webpackChunkName: "detail-detail"*/"../pages/detail/Detail");

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index, children: [
    { path: '/', redirect: '/home'},
    { path: '/home',name: 'Home',component: Home }
  ]},
  { path: '/city', component: City },
  { path: '/detail/:id', component: Detail}
]

const router = new VueRouter({
  routes
})

export default router
