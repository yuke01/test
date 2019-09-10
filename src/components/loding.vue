<template>
  <div class="img_box" v-if="logind">
    <img src="../assets/logo.png" alt="" class="img">
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  created () {
    console.log(this.logind)
  },
  computed: {
    ...mapState(['logind'])
  }
}
</script>
<style>
.img_box{
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(250, 250, 250, 0.2);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
}
.img{
  width: 80px;
  height: 80px;
}
</style>

