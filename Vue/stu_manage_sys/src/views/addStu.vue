<template>
    <!-- 新增学生表单 -->
<div class="add-student content" id="add-student">
    <form action="#" id="add-student-form"  class="add-student-form">
        <div>
            <label for="name">姓名</label>&nbsp;
            <input type="text" name="name" v-model="stu.name" >
        </div>
        <div class="sex">
            <label for="sex">性别</label>&nbsp;
            <input type="radio" name="sex" value="0" id="male" v-model="stu.sex">
            <label for="male">男</label>&nbsp;
            <input type="radio" name="sex" value="1" id="female" v-model="stu.sex">
            <label for="female">女</label>
        </div>
        <div>
            <label for="sNo">学号</label>&nbsp;
            <input type="text" id="sNo" name="sNo" v-model="stu.sNo">
        </div>
        <div>
            <label for="email">邮箱</label>&nbsp;
            <input type="text" id="email" name="email" v-model="stu.email">
        </div>
        <div>
            <label for="birth">出生年</label>&nbsp;
            <input type="text" id="birth" name="birth" v-model="stu.birth">
        </div>
        <div>
            <label for="phone">手机号</label>&nbsp;
            <input type="text" id="phone" name="phone" v-model="stu.phone">
        </div>
        <div>
            <label for="address">住址</label>&nbsp;
            <input type="text" id="address" name="address" v-model="stu.address">
        </div>
        <div>
            <label for=""></label>
            <input type="button" value="提交" class="btn" id="add-submit" @click="commit">
            &nbsp;
            <input type="button" value="重置" class="btn" @click="reset">
        </div>
    </form>
</div>
</template>

<script>
export default {
    data(){
        return {
            stu:{
                name: '',
                sex: null,
                sNo: '',
                email: '',
                birth: null,
                phone: '',
                address: '',
            }
        }
    },
    methods:{
        commit(){
            console.log(this.stu);
            // 信息为空
            for (const prop in this.stu) {
                if (!this.stu[prop]) {
                    console.log(1);
                    this.$Toast(`信息不能为空`);
                    return;
                }
            }
            // 学号4-16位
            if (this.stu.sNo.length < 4 || this.stu.sNo.length > 16) {
                this.$Toast('学号必须为4-16位的数字组成')
                return;
            }
            this.$api.addStu(this.stu)
            .then(data => {
                console.log(data);
                if (data.data.status == 'success') {
                    this.$Toast(data.data.msg);
                    this.$router.push('/stulist');
                }else{
                    this.$Toast(data.data.msg);
                }
            });
        },
        reset(){
            // this.stu = {
            //     name: '',
            //     sex: null,
            //     sNo: '',
            //     email: '',
            //     birth: null,
            //     phone: '',
            //     address: '',
            // }
        }
    },
}
</script>

<style>

</style>