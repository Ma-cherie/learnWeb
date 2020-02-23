<template>
    <!-- 学生列表 -->
    <div class="student-list content" id="student-list">
        <stu-search></stu-search>
        <stu-table></stu-table>
        <turn-page></turn-page>
        <transition>
            <show-modal v-if="flag"></show-modal>
        </transition>
    </div>
</template>

<script>
import showModal from '../components/stuList/showModal'
import stuSearch from '../components/stuList/stuSearch'
import stuTable from '../components/stuList/stuTable'
import turnPage from '../components/stuList/turnPage'
export default {
    data(){
        return {

        }
    },
    computed:{
        flag(){
            return this.$store.state.showModal;
        }
    },
    components:{
        showModal,
        stuSearch,
        stuTable,
        turnPage,
    }
}
</script>

<style>
.v-enter {
   top: -100%;
   opacity: 0;
} 
.v-enter-to {
  top: 0;
  opacity: 1;
}
.v-leave{
 top: 0;
  opacity: 1;
} 
.v-leave-to {
     top: -100%;
   opacity: 0;
}
.v-enter-active {
    transition: all .5s;
}
.v-leave-active {
    transition: all .5s;
}
</style>