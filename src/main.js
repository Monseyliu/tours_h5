import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 初始化css像素边框，300毫秒点击延迟--现在可以不使用了
// import FastClick from 'fastclick'
import '../src/assets/style/reset.css'
import '../src/assets/style/border.css'
import '../src/assets/style/iconfont.css'
// 引入 mint -ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入 axios 代理
import axios from 'axios'
import '../src/config/index.js'

Vue.config.productionTip = false
// FastClick.attach(document.body);
Vue.use(MintUI);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
