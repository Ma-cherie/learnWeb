import Vue from 'vue'
import Vuex from 'vuex'
import api from "./api/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  //学生表格
    //学生列表
    list: [],
    // 一页展示的学生数量
    pageSize: 5,
    // 学生总数
    stuNum: 0,
    // 遮罩层显示
    showModal: false,
    // 正在编辑的学生
    activeStu: null,
  // 分页
    // 总页数
    totalPage: 0,
    // 当前页数
    curPage: 1,
  // 搜索
    // 是否为搜素的标记
    searchFlag: false,
    // 查询的性别
    sex: -1,
    // 查询的关键字
    search: '',
  },
  mutations: {
    setList(state,list){
      state.list = list;
    },
    // 设置学生总数、同时设置总页数
    setTotalPage(state, count){
      state.stuNum = count;
      state.totalPage = Math.ceil(count / state.pageSize);
    },
    setModalShow(state,boolean){
      state.showModal = boolean;
    },
    setActiveStu(state,stu){
      state.activeStu = stu;
    },
    setCurPage(state,pageNum){
      state.curPage = pageNum;
    },
    // 切换搜索标记，如果变化了bool值，则代表切换了模式-页码回到第一页
    setSearchFlag(state,bool){
      if (state.searchFlag != bool) {
        state.curPage = 1;
      }
      state.searchFlag = bool;
    },
    setSearch(state, search){
      state.search = search;
    }
  },
  actions: {
    getStuList(context){
      api.findByPage(context.state.curPage, context.state.pageSize).then(data => {
        const list = data.data.data.findByPage;
        const count = data.data.data.cont;
        context.commit('setList',list);
        context.commit('setTotalPage',count);
      })
    },
    delBySno(context,sno){
      return api.delBySno(sno).then(data => {
        // console.log(data);
        context.dispatch('getStuList')
        // if (data.data.status == 'success') {
          return data.data.msg;
        // }
      })
    },
    updateStudent(context,stu){
      return api.updateStudent(stu).then(data => {
        if (data.data.status == 'success') {
          context.commit('setModalShow',false);
          context.dispatch('getStuList');
          return data.data.msg;
        }else{
          return data.data.msg;
        }
      })
    },
    turnPage(context,pageNum) {
      let lastTimePage = context.state.curPage;
      // 翻页
      if (pageNum == 'prev') {
        if (context.state.curPage > 1) {
          context.commit('setCurPage',context.state.curPage - 1);
        }
      }
      else if (pageNum == 'next') {
        if (context.state.curPage < context.state.totalPage) {
          context.commit('setCurPage', context.state.curPage + 1);
        }
      } else {
        context.commit('setCurPage',pageNum);
      }
      // 获取数据(如果搜索标记为true，代表正在搜索，翻页是按搜索的来翻页)
      if (context.state.searchFlag) {
        context.dispatch('searchStu');
      }else{
        context.dispatch('getStuList');
      }

    },
    searchStu(context){
      // 如果搜索为空，则返回普通模式
      if (context.state.search == '') {
        context.commit('setSearchFlag', false);
        context.dispatch('getStuList');
        return '搜索内容为空，返回全部学生';
      }
      // 设置搜索标记
      context.commit('setSearchFlag',true);
      // 请求
      return api.searchStu(context.state.search, context.state.sex, context.state.curPage,context.state.pageSize)
      .then(data => {
        console.log(data);
        if (data.data.status == 'fail') {
          return data.data.msg;
        }
        const list = data.data.data.searchList;
        const count = data.data.data.cont;
        // console.log(list,count)
        context.commit('setList', list);
        context.commit('setTotalPage', count);
        return data.data.msg;
      })
    }
  }
})
