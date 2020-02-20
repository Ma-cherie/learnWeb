<template>
    <div>
        <h2>StoreA组件</h2>
        <p>用computed、mapState、mapGetters...</p>
        <p>{{name}} {{ age}}</p>
        <button @click="handleClick">大了一岁</button>
        <p>{{ person }}</p>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    data(){
        return {

        }
    },
    created(){
        // console.log(this.$store)
    },
    computed:{
        ...mapState(['name','age']),
        ...mapGetters(['person'])
    },
    methods:{
        handleClick(){
            // this.$store.commit('growUp',1);
            this.$store.dispatch('growUp',1);
        }
    }
}
</script>
