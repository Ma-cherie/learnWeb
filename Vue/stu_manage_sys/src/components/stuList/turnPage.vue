<template>
  <ul id="turn-page">
    <li class="prev-page" 
      @click="turnPage('prev')"
      :class="{disabled: curPage == 1}"
    >上一页</li>
    <!-- 总页数 <=7 的情况 -->
    <template v-if="totalPage <= 7">
      <li v-for="page in totalPage" :key="page" 
        :class="{active: page == curPage}"
        @click="turnPage(page)"
      >{{page}}</li>
    </template>
    <!-- 总页数 >7 的情况 -->
    <template v-else>
      <!-- 1 2 3 4 5 6 curPage<=4 -->
      <template v-if="curPage <= 4">
        <li v-for="i in 6" :key="i" @click="turnPage(i)" :class="{active: curPage==i}">{{ i }}</li>
      </template>
      <!-- 1... curPage>=5 -->
      <template v-if="curPage > 4">
        <li @click="turnPage(1)">1</li>
        <li >...</li>
      </template>
      <!-- n-2 n-1 n n+1 n+2  -->
      <template v-if="curPage > 4 && curPage <= totalPage-4">
        <li v-for="i in 5" :key="curPage - 3 + i" 
          @click="turnPage(curPage - 3 + i)" 
          :class="{active: curPage==curPage - 3 + i}"
        >{{ curPage - 3 + i }}</li>
      </template>
      <!-- ...totalPage -->
      <template v-if="curPage <= totalPage-4">
        <li >...</li>
        <li @click="turnPage(totalPage)">{{ totalPage }}</li>
      </template>
      <!-- n-5 n-4 n-3 n-2 n-1 n  curPage > totalPage-4-->
      <template v-if="curPage > totalPage-4">
        <li v-for="i in 6" :key="totalPage - 6 + i" 
          @click="turnPage(totalPage - 6 + i)" 
          :class="{active: curPage == totalPage - 6 + i}"
        >{{ totalPage - 6 + i }}</li>
      </template>
    </template>

    <li class="next-page" 
      @click="turnPage('next')"
      :class="{disabled: curPage == totalPage}"
    >下一页</li>
  </ul>
</template>

<script>
import {mapState,mapActions} from "vuex";

export default {
  // data(){
  //   return {
  //     curPage: 1,
  //     totalPage: 8,
  //   }
  // },
  computed:{
    ...mapState(['curPage','totalPage'])
  },
  methods:{
    ...mapActions(['turnPage']),
  },

}
</script>

<style>
#turn-page li{
  color: #606266;
  user-select: none;
}
#turn-page .active{
  border-color: #409eff;
}
#turn-page .disabled{
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>