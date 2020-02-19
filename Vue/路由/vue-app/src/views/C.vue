<template>
    <div>
        <h1>嵌套路由案例</h1>
        <ul>
            <router-link :to="{path:'/c/c1'}">跳转到C1</router-link> | 
            <router-link to="/c/c2">跳转到C2</router-link> | 
            <router-link to="/c/c3">跳转到C3</router-link>
        </ul>
        <router-view/>
    </div>
</template>

<script>
export default {

}
</script>