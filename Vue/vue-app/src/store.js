import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '猪猪最帅',
    age: 1
  },
  getters:{
    person(state) {
      return `姓名: ${state.name} 年龄: ${state.age}`;
    }
  },
  // 改变state的同步操作
  mutations: {
    growUp(state,payload){
      state.age += payload;
    }
  },
  // 改变state的异步操作
  actions: {
    growUp(context,payload) {
      // console.log(context,payload);
      context.commit('growUp', payload)
    }
  }
})
