# 学生管理系统
循环迭代项目-学生管理系统。

```
技术栈: Vue + Vue-Router + Vuex + Element
```

## 技术点
- 用vue重构jq项目
- 用axios写请求工具"api"，Vue.use()，将api挂载到Vue.prototype上
- 写消息组件，用this.$Toast的方式调用。
    - Vue.extend()创建Toast的构造器，Vue.prototype.$Toast = Toast的构造器，所以每次this.$Toast都创建一个新的Toast组件。


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
