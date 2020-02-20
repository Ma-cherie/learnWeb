<template>
    <div>
        <h2>StoreA组件</h2>
        <div>{{name}} {{ age}}</div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data(){
        return {

        }
    },
    created(){
        // console.log(this.$store)
    },
    computed:{
        ...mapState(['name','age'])
    },
    methods:{

    }
}
</script>
