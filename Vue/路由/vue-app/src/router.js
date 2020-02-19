// 自己写一下Router配置
import Vue from 'vue';
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      component: () => import("./views/About.vue")
    },
    {
      path: '/a',
      component: () => import("./views/A.vue")
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import("./views/Question.vue")
    },
    {
      path: '/b',
      component: () => import("./views/B.vue")
    },
    {
      path: '/c',
      component: () => import("./views/C.vue"),
      redirect: '/c/c1',
      children:[
        {
          // path:'/c/c1',
          path:'c1',
          component: () => import("./views/C1.vue")
        },
        {
          path:'c2',
          component: () => import("./views/C2.vue")  
        },
        {
          path:'/c/c3',
          component: () => import("./views/C3.vue")
        },
      ]
    },
    {
      path: "/notfound",
      component: () => import("./views/NotFound.vue")
    },
    // 如果上面的都不匹配
    {
      path: '*',
      redirect(to){
        return "/notfound";
      }
    }
  ]
})




















// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
