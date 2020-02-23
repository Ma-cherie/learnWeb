import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api/index.js";
import Toast from './Tools/Toast'

Vue.config.productionTip = false
// 绑定自己api
Vue.use(function (Vue) {
  Vue.prototype.$api = api;
})
// 绑定消息弹框
Vue.prototype.$Toast = Toast;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
