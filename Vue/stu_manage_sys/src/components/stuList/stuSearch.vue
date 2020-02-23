<template>
<div class="search">
    <label for="search-word">关键字搜索:</label>&nbsp;
    <input type="text" id="search-word" :value="keyword" 
        @keyup.enter="searchStu"
        @input="$store.commit('setSearch',$event.target.value)"
    >
    <button id="search-submit" @click="searchStu">搜索</button>
</div>
</template>

<script>
export default {
    computed:{
        keyword(){
            return this.$store.state.search
        } 
    },
    methods:{
        searchStu(){
            this.$store.dispatch('searchStu').then(msg => this.$Toast(msg))
        },
    },

}
</script>

<style>

</style>