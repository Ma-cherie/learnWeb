import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局路由守卫
router.beforeEach((to,from,next) => {
  const isLogin = localStorage.getItem('login');
  // console.log(typeof isLogin,isLogin)
  const needLogin = to.matched.some(ele => ele.meta.needLogin);
  if (needLogin && !isLogin) {
    alert('这页需要登录才能访问噢~\n将要跳转到登录页');
    next('/login');
  }
  else{
    next();
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
