import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 初始化css像素边框，300毫秒点击延迟
import FastClick from 'fastclick'
import '../src/assets/style/reset.css'
import '../src/assets/style/border.css'
import '../src/assets/style/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
