<template>
  <div class="Login_box">
    <div class="login_top">
      <p style="padding: 20px;">SCIENCE</p>
      <el-form :model="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" style="width:80%;"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="name">
          <el-input v-model="ruleForm.psd" style="width:80%;" show-password></el-input>
        </el-form-item>
         <el-form-item>
          <el-button style="width:80%;" @click="login">登录</el-button>
        </el-form-item>
        <!-- <el-button style="width:80%;" @click="login">登录</el-button> -->
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        psd: ""
      }
    };
  },
  // components:{aa},
  created() {
    //  setInterval(() => {this.login()},3000)  3秒一次发生请求
  },
  methods: {
    login() {
      if (this.ruleForm.name == '' || this.ruleForm.psd == '') {
        return alert('不能为空！')
      }
      this.$axios
        .post(
          "api/login",
          this.ruleForm
        )
        .then(res => {
          console.log(res)
          if (res.data.code == 200) {
             this.$router.push('/home')
          } else {
            alert(res.data.msg)
          }
        });
        // this.$router.push('/home')
    }
  }
};
</script>
<style lang="less" scoped>
.Login_box {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/loginBg.jpg");
  overflow: hidden;
  .login_top {
    width: 500px;
    height: 350px;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: 50%;
    margin-top: -250px;
    text-align: center;
    p {
      font-size: 20px;
    }
  }
}
.demo-ruleForm {
  text-align: left;
}
</style>
