<template>
  <div class="Login_box">
    <div class="login_top">
      <!-- <img src="../assets/img/loginBg.jpg" alt=""> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        region: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.Login_box {
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/loginBg.jpg') ;
  overflow: hidden;
}
</style>
