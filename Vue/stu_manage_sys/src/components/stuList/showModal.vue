<template>
  <div class="modal" id="modal">
    <div class="mask" @click="$store.commit('setModalShow', false)"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input type="text" name="name" autocomplete="off"  
            :value="stu.name" 
            @input="edit('name',$event.target.value)" 
            ref="name"/>
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <template v-if="stu.sex == 1">
            <input type="radio" name="sex" value="0" @change="edit('sex',0)" ref="sex"/><span>男</span>
            <input type="radio" name="sex" value="1" @change="edit('sex',0)" checked ref="sex"/><span>女</span>
          </template>
          <template v-else-if="stu.sex == 0">
            <input type="radio" name="sex" value="0" @change="edit('sex',0)" checked ref="sex" /><span>男</span>
            <input type="radio" name="sex" value="1" @change="edit('sex',0)" ref="sex"/><span>女</span>
          </template>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" name="sNo" :value="stu.sNo" readonly ref="sNo"/>
        </div>
        <div>
          <label for="email">邮箱</label>
          <input type="text" name="email" :value="stu.email"  @input="edit('email',$event.target.value)" ref="email"/>
        </div>
        <div>
          <label for="birth">出生年</label>
          <input type="text" name="birth" :value="stu.birth"  @input="edit('birth',$event.target.value)" ref="birth"/>
        </div>
        <div>
          <label for="phone">手机号</label>
          <input type="text" name="phone" :value="stu.phone"  @input="edit('phone',$event.target.value)" ref="phone"/>
        </div>
        <div>
          <label for="address">住址</label>
          <input type="text" name="address" :value="stu.address"  @input="edit('address',$event.target.value)" ref="address"/>
        </div>
        <div>
          <label for=""></label>
          <input type="button" value="提交" class="btn" id="edit-submit"  @click="submit"/>
          <input type="reset" value="重置" class="btn"  @click="reset"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      editStu: {}
    }
  },
  computed:{
    stu(){
      // 这里用value回填，如果用v-model回填，会更改stu对象，导致取消之后，表格数据也边了
      return this.$store.state.activeStu;
    }
  },
  methods:{
    // 保存学生信息被更改的key和value
    edit(key,value){
      this.editStu[key] = value;
    },
    // 提交修改学生
    submit(){
      // console.log(this.editStu)
      // 如果没有修改，则返回
      if (Object.keys(this.editStu).length == 0) {
        return;
      }
      // 修改了，则把修改的对象和原来的stu合并，提交
      const stu = {
        ...this.stu,
        ...this.editStu
      };
      this.$store.dispatch('updateStudent',stu)
        .then(msg => {
          this.$Toast(msg)
        })
    },
    reset(){
      console.log(this.$refs.sex)
    }
  }
}
</script>

<style>

</style>