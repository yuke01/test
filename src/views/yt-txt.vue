<template>
    <div>
     <el-form :model="form"  label-width="80px" class="demo-ruleForm">
        <el-form-item label="议题">
    <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select> -->
    <el-input v-model="form.topicname" placeholder="请输入议题"></el-input>
  </el-form-item>
  <el-form-item>
         <el-button style="width:80%;" @click="login">确定</el-button>
         </el-form-item>
     </el-form>
    </div>
</template>
<script>
export default {
    data () {
        return {
            form: {
                topicname: ''
            }
        }
    },
    methods: {
        login () {
            this.$axios.post('api/topicsave',this.form).then( res => {
                console.log(res)
                console.log('111')
            })
            this.$router.push('/luru')
        }
    }
}
</script>