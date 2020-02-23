<template>
<table border="0">
    <!-- 表头区域 -->
    <thead>
        <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>邮箱</th>
            <th>年龄</th>
            <th>手机号</th>
            <th>住址</th>
            <th>操作</th>
        </tr>
    </thead>
    <!-- 表格内容 -->
    <tbody id="student-body">
        <tr v-for="(item, index) in list" :key="index">
            <td>{{item.sNo}}</td>
            <td>{{item.name}}</td>
            <td>{{item.sex == 0 ? "男" : "女"}}</td>
            <td>{{item.email}}</td>
            <td>
                {{(new Date()).getFullYear() - item.birth}}
            </td>
            <td>{{item.phone}}</td>
            <td>{{item.address}}</td>
            <td>
                <button class="btn edit" @click="edit(item)">编辑</button>&nbsp;
                <button class="btn del" @click="del(item)" >删除</button>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
// import {mapState} from 
export default {
    created(){
        this.$store.dispatch('getStuList')
    },
    data(){
        return {
        }
    },
    methods:{
        // 编辑学生
        edit(stu){
            this.$store.commit('setModalShow',true);
            this.$store.commit('setActiveStu',stu);
        },
        // 删除学生
        del(stu){
            // console.log(stu.sNo);
            this.$store.dispatch('delBySno',stu.sNo)
            .then(msg => {
                this.$Toast(msg)
            })
        }
    },
    computed:{
        list(){
            return this.$store.state.list;
        }
    },
}
</script>

<style>

</style>