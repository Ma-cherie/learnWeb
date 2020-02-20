<template>
    <div>
        <h1>登录页面</h1>
        <p>存储登录信息</p>
        <button @click="handleClick">登录</button>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            localStorage.setItem('login',true)
        }
    }
}
</script>