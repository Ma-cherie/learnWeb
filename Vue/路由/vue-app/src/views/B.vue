<template>
    <div>
        <h1>导航守卫案例</h1>
        <p>表单内有信息时，跳转页面会提示确认</p>
        <input type="text" v-model="inputVal">
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputVal: ""
        }
    },
    beforeRouteLeave(to,from,next){
        // 若输入框有值，则要确认
        if (this.inputVal) {
            const val = window.confirm('你确定要移动吗?');
            if (val) {
                next();
            }
        // 如果输入框为空，可以直接跳转
        }else{
            next();
        }
    }
}
</script>