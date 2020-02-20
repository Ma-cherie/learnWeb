<template>
    <div>
        <h1 class="font">动态路由案例</h1>
        <div 
            v-for="(item,index) in questions" :key="item.id"
            class="question"
            @click="handleClick(item.id)"
        >
            {{index + 1}} {{ item.title }}
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            questions: [
                {id: 0,title: 'Nostrud et aute Lorem id ad non quis ad in exercitation mollit voluptate ad.'},
                {id: 1,title: 'Nisi ex duis veniam quis enim ex exercitation proident in commodo.'},
                {id: 2,title: 'Dolor quis magna non Lorem culpa est aliqua.'},
            ]
        }
    },
    methods:{
        handleClick(id){
            this.$router.push({
                name: 'question',
                params:{
                    id
                },
                query:{
                    id
                }
            })
        }
    }
}
</script>

<style scoped>
.question{
    margin-top: 20px;
    margin-bottom: 20px;
}
.font{
    color: #abcdef;
}
</style>