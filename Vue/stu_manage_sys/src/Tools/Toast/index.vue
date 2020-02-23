<template>
  <div class="my-alert" :class="flag ? 'fade-in' : 'fade-out'" v-if="show">{{ msg }}</div>
</template>



<script>
export default {

};
</script>



<style scoped>
.my-alert {
  min-width: 280px;
  box-sizing: border-box;
  border-radius: 4px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}
@keyframes fadeIn {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 50px;
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    top: 50px;
    opacity: 1;
  }
  to {
    top: 0px;
    opacity: 0;
  }
}
.fade-in {
  animation: fadeIn 0.5s forwards;
}
.fade-out {
  animation: fadeOut 0.5s forwards;
}
</style>