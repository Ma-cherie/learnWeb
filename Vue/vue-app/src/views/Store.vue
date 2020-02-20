<template>
    <div>
        <StoreA></StoreA>
        <hr/>
        <StoreB></StoreB>
    </div>
</template>

<script>
import StoreA from "../components/StoreA.vue"
import StoreB from "../components/StoreB.vue"

export default {
    components:{
        StoreA,
        StoreB
    }
}
</script>