<template>
    <div>
        <p>params: {{ $route.params }}</p>
        <p>query: {{ $route.query }}</p>
        <p>questionId: {{ questionId }}</p>
        <button @click="handleClick">下一个问题</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            questionId: null
        }
    },
    mounted(){
        // console.log(this.$route.params);
        this.questionId = this.$route.params.id;
    },
    beforeRouteUpdate(to,from,next){
        console.log(to.params.id)
        this.questionId = to.params.id;
        next()
    },
    methods:{
        handleClick(){
            this.$router.push({
                name: 'question',
                params:{
                    id: this.questionId + 1
                },
                query:{
                    id: this.questionId + 1
                }
            })
        }
    }
}
</script>