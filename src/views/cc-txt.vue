<template>
    <div>
     <el-form :model="form" label-width="80px" class="demo-ruleForm">
        <el-form-item label="name" prop="name">
           <el-input type="textarea" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="define" prop="name">
           <el-input type="textarea" v-model="form.define"></el-input>
        </el-form-item>
        <el-form-item label="content" prop="name">
           <el-input type="textarea" v-model="form.content"></el-input>
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
            form:{
                name: '',
                define: '',
                content: ''
            }
        }
    },
    methods: {
        login () {
            if (this.form.name == '') {
                return alert('name不能为空！')
            }
            this.$axios.post('api/strategysave',this.form).then( res => {
                this.$router.push('/luru')
            })
        }
    }
}
</script>